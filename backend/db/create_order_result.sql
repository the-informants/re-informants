insert into orderresults (
    buyerid,
    informantid,
    distance,
    viewedflag,
    selectedflag,
    orderresultdatetime,
    paidflag

)
values(
    ${buyerid},
    ${informantid},
    ${distance},
    'true',
    'true',
    CURRENT_TIMESTAMP,
    'unpaid'
)
RETURNING *;