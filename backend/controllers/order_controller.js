module.exports = {

    getOrders: (req,res)=>{
        const db = req.app.get('db');
        const { userid } = req.user;
        db.get_orders({userid})
        .then(orders=>{
            res.status(200).send(orders);
        })
        .catch(err=>console.error(err))
    },

    createOrder: (req,res)=>{
        const db = req.app.get('db');
        const {buyerid, ordername,address1,address2,city,state,zip,ordertype,ordernotes,durationday} = req.body;
        let newOrder = {buyerid, ordername,address1,address2,city,state,zip,ordertype,ordernotes,durationday}

        db.create_order(newOrder).then(order => {
            res.send(order)
        });
    }

}
