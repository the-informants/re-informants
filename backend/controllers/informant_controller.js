module.exports = {

    getInformant: (req,res)=>{
        const db = req.app.get('db');
        const { userid } = req.user;
        db.get_informant({userid})
        .then(informant=>{
            res.status(200).send(informant);
        })
        .catch(err=>console.error(err))
    },

    getInformants: (req,res)=>{
        const db = req.app.get('db');
        db.get_informants()
        .then(informants=>{  
            //req.session.user.triggers=triggers;
            
            res.status(200).send(informants);
        })
        .catch(err=>console.error(err))
    },
    getInformantsSearch: (req,res)=>{
        const db = req.app.get('db');
        let {lat, lng} = req.query
        lat = parseFloat(lat);
        lng = parseFloat(lng);
        console.log(1111, lat, lng)
        db.searchinformants_by_lat_lng({lat, lng}).then(informants=>{
            res.status(200).send(informants);
        })
        .catch(err=>console.error(err))
    },

    createInformant: (req,res)=>{
        const db = req.app.get('db');
        const { userid } = req.user;
        const {firstname, lastname, informantnotes, phone, 
            address1, address2, city, state, zip, knowcommunityflag, knowreligionflag,
            knowcrimeflag, knowschoolflag, availableflag, lat, lng, years} = req.body;
        let newInformant = {userid, firstname, lastname, informantnotes, phone, 
            address1, address2, city, state, zip, knowcommunityflag, knowreligionflag,
            knowcrimeflag, knowschoolflag, lat, lng, years}

        db.create_informant(newInformant).then(informant => {
            res.send(informant)
        });
    },
    createInformantReview: (req,res)=>{
        const db = req.app.get('db');
        const {informantid, buyerid, starrating, reviewcomment} = req.body;
        let newReview = {informantid, buyerid, starrating, reviewcomment};
        db.create_informant_review(newReview).then(review=>{
            res.status(200).send(review)
        }).catch(err=>console.log(err))
    },
    getInformantReviews: (req,res)=>{
        const db = req.app.get('db');
        const {id} = req.params;
        console.log("id", id)
        db.get_informant_reviews({id}).then(reviews=>{
            var response = {
                reviews: reviews
            }
            db.get_informant_name({id}).then(name=>{
                response.name = name
                db.get_informant_starrating({id}).then(rating=>{
                    response.rating = rating
                    res.status(200).send(response)
                })
            })
        }).catch(err=>console.log(err));

    }
}
