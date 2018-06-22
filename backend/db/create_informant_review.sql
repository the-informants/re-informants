insert into informantreview (
    informantid,
    buyerid,
    starrating,
    reviewcomment,
    reviewdatetime
)
values(
    ${informantid},
    ${buyerid},
    ${starrating},
    ${reviewcomment},
    CURRENT_TIMESTAMP
)
RETURNING *;