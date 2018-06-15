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
            knowcrimeflag, knowschoolflag, availableflag, lat, lng} = req.body;
        let newInformant = {userid, firstname, lastname, informantnotes, phone, 
            address1, address2, city, state, zip, knowcommunityflag, knowreligionflag,
            knowcrimeflag, knowschoolflag, lat, lng}

        db.create_informant(newInformant).then(informant => {
            res.send(informant)
        });
    }

}
