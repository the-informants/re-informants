select 
    r.orderresultsid,
    o.orderid,
    r.buyerid,
   
    o.ordername,
    o.address,
    -- o.address1,
    -- o.address2,
	-- o.city,
	-- o.state,
	-- o.zip,
	o.ordertype,
	o.ordernotes,
	o.ordervaliduntil,
	o.orderdatetime,
    
    r.informantid,   
    r.distance,
    r.viewedflag,
    r.selectedflag,
    r.orderresultdatetime,

	i.firstname,
	i.lastname,
	i.informantsincedatetime,
	i.informantnotes,
	i.phone, 
    i.address1,
    i.address2,
    i.city,
    i.state,
    i.zip,
    i.knowcommunityflag,
    i.knowreligionflag,
    i.knowcrimeflag, 
    i.knowschoolflag, 
    i.availableflag,
    case when CURRENT_TIMESTAMP>o.ordervaliduntil THEN 'Expired' ELSE 'Active' END as orderresultstatus

from orderresults as r
INNER JOIN orders as o on r.orderresultsid::varchar = o.orderresultid::varchar
INNER JOIN informants as i on i.informantid::varchar = r.informantid::varchar
where i.userid::integer=${userid}
order by r.orderresultdatetime desc