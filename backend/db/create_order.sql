insert into orders (
    buyerid,
    ordername,
    address1,
    address2,
	city,
	state,
	zip,
	ordertype,
	ordernotes,
	ordervaliduntil,
	orderdatetime
    )

values
(
    ${buyerid},
    ${ordername},
    ${address1},
    ${address2},
	${city},
	${state},
	${zip},
	${ordertype},
	${ordernotes},
	CURRENT_TIMESTAMP + (${durationhour} ||' hour')::interval,
	CURRENT_TIMESTAMP
)

RETURNING *;
