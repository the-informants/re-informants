 
update buyers 
    Set firstname = ${firstname},
        lastname = ${lastname},
        phone = ${phone},
        buyertype = ${buyertype},
        buyernotes = ${buyernotes}
where buyerid = ${buyerid}

RETURNING *;
