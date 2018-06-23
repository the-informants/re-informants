module.exports = {

    getBuyer: (req,res)=>{
        const db = req.app.get('db');
        const { userid } = req.user;
        db.get_buyer({userid})
        .then(buyer=>{
            res.status(200).send(buyer);
        })
        .catch(err=>console.error(err))
    },

    createBuyer: (req,res)=>{
        const db = req.app.get('db');
        const { userid } = req.user;
        const {firstname,lastname,phone,buyertype,buyernotes} = req.body;
        let newBuyer = {userid,firstname,lastname,phone,buyertype,buyernotes}

        db.create_buyer(newBuyer).then(buyer => {
            res.send(buyer)
        });
    },
    updateBuyer: (req,res)=>{
        const db = req.app.get('db');
        const { userid } = req.user;
        const {buyerid, firstname,lastname,phone,buyertype,buyernotes} = req.body;
        let updatedBuyer = {buyerid,firstname,lastname,phone,buyertype,buyernotes}

        db.update_buyer(updatedBuyer).then(buyer => {
            res.send(buyer)
        });
    }

}
