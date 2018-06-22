select i.*, avgstarrating, (point(i.lng,i.lat) <@> point(${lng},${lat})) as distance
from informants i
LEFT JOIN ( SELECT informantid, AVG(starrating) as avgstarrating
            FROM informantreview
            GROUP BY informantid
            ) ir
            on i.informantid::integer = ir.informantid::integer
where (point(i.lng,i.lat) <@> point(${lng},${lat})) < 50
order by distance 