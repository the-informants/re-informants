-- select * from informantreview
-- where informantid = ${id}
-- order by reviewdatetime desc

select i.*, b.firstname, b.lastname from informantreview i
left join buyers b on b.buyerid = i.buyerid::integer
where informantid = ${id}
order by reviewdatetime desc