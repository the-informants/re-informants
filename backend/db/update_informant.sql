update informants 

set firstname = ${firstname}, 
    lastname = ${lastname}, 
    informantnotes = ${informantnotes}, 
    phone = ${phone}, 
    address1 = ${address1}, 
    address2 = ${address2}, 
    city = ${city}, 
    state = ${state}, 
    zip = ${zip}, 
    knowcommunityflag = ${knowcommunityflag}, 
    knowreligionflag = ${knowreligionflag},
    knowcrimeflag = ${knowcrimeflag}, 
    knowschoolflag = ${knowschoolflag}, 
    lat = ${lat}, 
    lng = ${lng}, 
    years = ${years}
where informantid = ${informantid}

RETURNING *;