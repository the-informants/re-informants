insert into informants (userid, firstname, lastname, informantsincedatetime, informantnotes, phone, 
                        address1, address2, city, state, zip, knowcommunityflag, knowreligionflag,
                        knowcrimeflag, knowschoolflag, availableflag, lat, lng, years)
values
(
    ${userid},
    ${firstname},
    ${lastname},
    CURRENT_TIMESTAMP,
    ${informantnotes},
    ${phone},
    ${address1},
    ${address2},
    ${city},
    ${state},
    ${zip},
    ${knowcommunityflag},
    ${knowreligionflag},
    ${knowcrimeflag},
    ${knowschoolflag},
    'true',
    ${lat},
    ${lng},
    ${years}
)

RETURNING *;