select 
    o.orderid,
    o.buyerid,
    o.ordername,
    -- o.address1,
    -- o.address2,
	-- o.city,
	-- o.state,
	-- o.zip,
	o.ordertype,
	o.ordernotes,
	o.ordervaliduntil,
	o.orderdatetime,
	o.address,
	o.lat,
	o.lng,
	o.orderresultid,
	case when CURRENT_TIMESTAMP>o.ordervaliduntil THEN 'Expired' ELSE 'Active' END as orderstatus
	
from orders as o
INNER JOIN buyers as b on o.buyerid::varchar = b.buyerid::varchar
WHERE b.userid::integer=${userid}
order by o.orderdatetime desc