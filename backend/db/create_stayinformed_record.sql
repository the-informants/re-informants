insert into stayinformed (
    email,
    recordcreatedate
    )

values
(
	${email},
	CURRENT_TIMESTAMP
)

RETURNING *;