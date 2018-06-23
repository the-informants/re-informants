select  avg(starrating), count(informantid) from informantreview
where informantid = ${id}
group by informantid