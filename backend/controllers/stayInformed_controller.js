module.exports = {
    createRecord: (req, res) =>{
        const db = req.app.get('db');
        const {email} = req.body;
        let newRecord = {email};
        console.log("creating stay informed recrod", newRecord)
        db.create_stayinformed_record(newRecord).then(record => {
            res.send(record)
        }).catch(e=>console.log("creating stay informed error", e));
    }
}