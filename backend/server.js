const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
const path = require('path');

const isAuthenticated = require("./middlewares/isAuthenticated");

require("dotenv").config();

const app = express();
const port = 4000;

app.use(express.static(`${__dirname}/../frontend/build`));
massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
});



app.use(bodyParser.json());
app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new Auth0Strategy(
    {
      domain: process.env.AUTH_DOMAIN,
      clientID: process.env.AUTH_CLIENT_ID,
      clientSecret: process.env.AUTH_CLIENT_SECRET,
      callbackURL: process.env.AUTH_CALLBACK,
      scope: "openid profile email"
    },
    (accessToken, refreshToken, extraParams, profile, done) => {
      const db = app.get("db");
    
      db.get_user_by_auth_id({ authid: profile.id }).then(results => {
        let user = results[0];
        console.log("user", user);

        if (user) {
          return done(null, user);
        } else {
          let userObj = {
            name: profile.displayName,
            authid: profile.id,
            email: profile.emails[0].value
          };

          db.create_user(userObj).then(results => {
            let user = results[0];
            return done(null, user);
          }).catch(e=>console.log(e));
        }
      }).catch(e=>console.log(e));
    }
  )
);

passport.serializeUser((user, done) => {
  return done(null, user.userid);
});

passport.deserializeUser((userid, done) => {
  const db = app.get("db");

  db.get_user_by_id({ userid }).then(results => {
    let user = results[0];
    return done(null, user);
  });
});

app.get("/auth", passport.authenticate("auth0"));
app.get(
  "/auth/callback",
  passport.authenticate("auth0", {
    successRedirect: "/Account",
    failureRedirect: "/"
  })
);

app.get("/auth/me", (req, res) => {
    console.log("auth/me");
    //console.log("isAuthenticated",req);
  if (req.isAuthenticated()) {
    //   console.log("authenticated")
    return res.send(req.user);
  } else {
    //   console.log("not authenticated")
    return res.status(404).send("user not authenticated");
  }
});

app.get('/api/logout', function(req,res){
    req.logout();
    console.log('logging out');    
    res.status(200).send();
})


const informant_Controller= require('./controllers/informant_controller');
const buyer_Controller= require('./controllers/buyer_controller');
const order_Controller= require('./controllers/order_controller');
const stayInformed_Controller = require('./controllers/stayInformed_controller');

app.post("/api/informant", informant_Controller.createInformant);
app.put("/api/informant", informant_Controller.updateInformant);
app.get("/api/informant", informant_Controller.getInformant);
app.get("/api/informants", informant_Controller.getInformants);
app.get("/api/informants/search", informant_Controller.getInformantsSearch);
app.post("/api/informant/review", informant_Controller.createInformantReview);
app.get("/api/informant/review/:id", informant_Controller.getInformantReviews);

app.post("/api/buyer", buyer_Controller.createBuyer);
app.put("/api/buyer", buyer_Controller.updateBuyer);
app.get("/api/buyer", buyer_Controller.getBuyer);

app.post("/api/order", order_Controller.createOrder);
app.get("/api/orders", order_Controller.getOrders);
app.post('/api/orderResults', order_Controller.createOrderResult);

app.get('/api/orderResultsbyInformant', order_Controller.getOrderResultsbyInformant);
app.get('/api/orderResultsbybuyer', order_Controller.getOrderResultsbyBuyer);

app.get("/api/informants/search");

app.put('/api/payorderresult', order_Controller.payOrderResult);
app.put('/api/payorderresult/paidflag/:orderresultsid', order_Controller.cancelOrderResult);

app.post('/api/stayInformed', stayInformed_Controller.createRecord);

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});


server = app.listen(port, () => {
  console.log("listening on port", port);
});