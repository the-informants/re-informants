select 
    buyerid,
    userid,
    firstname,
    lastname,
    phone,
    buyertype,
    buyersincedatetime,
    buyernotes,
    buyeractiveflag
from buyers
where userid=${userid};