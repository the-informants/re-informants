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
        const {buyerid, ordername,
            // address1,address2,city,state,zip,
            ordertype,ordernotes,durationday, address, lat, lng, orderresultid} = req.body;
        let newOrder = {buyerid, ordername,
            // address1,address2,city,state,zip,
            ordertype,ordernotes,durationday, address, lat, lng, orderresultid}

        db.create_order(newOrder).then(order => {
            res.send(order)
        });
    },

    createOrderResult: (req,res)=>{
        const db = req.app.get('db');
        const {buyerid, informantid, distance} = req.body
        let newOrderResult = {buyerid, informantid, distance}
        db.create_order_result(newOrderResult).then(orderResult=>{
            res.send(orderResult)
        })
    },

    getOrderResultsbyInformant: (req,res)=>{
        const db = req.app.get('db');
        const { userid } = req.user;
        db.get_orderresults_by_informant({userid})
        .then(orderresults=>{
            res.status(200).send(orderresults);
        })
        .catch(err=>console.error(err))
    },

    getOrderResultsbyBuyer: (req,res)=>{
        const db = req.app.get('db');
        const { userid } = req.user;
        db.get_orderresults_by_buyer({userid})
        .then(orderresults=>{
            res.status(200).send(orderresults);
        })
        .catch(err=>console.error(err))
    },

    payOrderResult: (req,res)=>{
        const db = req.app.get('db');
        const { userid } = req.user;
        db.pay_orderresult({userid})
        .then(paidflag=>{   
            console.log('this is the new status for this trigger',paidflag);           
            res.status(200).send(paidflag);
        })
        .catch(err=>console.error(err))
    },

    cancelOrderResult : (req,res)=>{
        const db = req.app.get('db');
        const { orderresultsid } = req.params;
        const { userid } = req.user;
        db.cancel_orderresult({orderresultsid, userid })
        .then(order=>{   
            console.log('order results with new paid flag',order);           
            res.status(200).send(order);
        })
        .catch(err=>console.error(err))
    },

}
