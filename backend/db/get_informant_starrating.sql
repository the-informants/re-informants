select  avg(starrating) from informantreview
where informantid = ${id}
group by informantid