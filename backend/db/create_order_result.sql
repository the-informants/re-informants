insert into orderresults (
    buyerid,
    informantid,
    distance,
    viewedflag,
    selectedflag,
    orderresultdatetime

)
values(
    ${buyerid},
    ${informantid},
    ${distance},
    'true',
    'true',
    CURRENT_TIMESTAMP
)
RETURNING *;