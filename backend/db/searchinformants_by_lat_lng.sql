select * from informants i
where (point(i.lng,i.lat) <@> point(${lng},${lat})) < 10