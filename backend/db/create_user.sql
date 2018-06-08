INSERT INTO users ( name, email, authid )
VALUES (${name},${email},${authid})

RETURNING *;