insert into buyers (
                        userid,
                        firstname,
                        lastname,
                        phone,
                        buyertype,
                        buyersincedatetime,
                        buyernotes,
                        buyeractiveflag)
values
(
    ${userid},
    ${firstname},
    ${lastname},
    ${phone},
    ${buyertype},
    CURRENT_TIMESTAMP,
    ${buyernotes},
    'true'
)

RETURNING *;
