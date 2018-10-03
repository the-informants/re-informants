insert into stayinformed (
    firstname,
    lastname,
    email,
    recordcreatedate
    )

values
(
    ${firstname},
    ${lastname},
	${email},
	CURRENT_TIMESTAMP
)

RETURNING *;