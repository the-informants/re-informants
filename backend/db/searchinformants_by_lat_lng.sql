select *, (point(i.lng,i.lat) <@> point(${lng},${lat})) as distance
from informants i
where (point(i.lng,i.lat) <@> point(${lng},${lat})) < 50
order by distance 