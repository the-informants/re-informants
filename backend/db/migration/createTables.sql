create table users (
    userid SERIAL PRIMARY KEY NOT NULL,
    authid varchar,
    name varchar,
	email varchar
)
;
create table orders (
    orderid SERIAL PRIMARY KEY NOT NULL,
    buyerid varchar(255),
    ordername varchar(255),
    address1 varchar(255),
    address2 varchar(255),
	city varchar(255),
	state varchar(255),
	zip varchar(255),
	ordertype varchar(255),
	ordernotes text,
	ordervaliduntil TIMESTAMP,
	orderdatetime TIMESTAMP
)
;
CREATE table orderresults (
    orderresultsid SERIAL PRIMARY KEY NOT NULL,
    orderid varchar(255),
    buyerid varchar(255),
    informantid varchar(255),
    distance integer,
    viewedflag varchar(10),
    selectedflag varchar(10),
    orderresultdatetime TIMESTAMP
    
    )
;

CREATE table buyers (
    buyerid SERIAL PRIMARY KEY NOT NULL,
    userid varchar(255),
    firstname varchar(255),
    lastname varchar(255),
    phone varchar(50),
    buyertype varchar(255),
    buyersincedatetime TIMESTAMP,
    buyernotes text
    
    )
  ;  
CREATE table informants (
    informantid SERIAL PRIMARY KEY NOT NULL,
    userid varchar(255),
    firstname varchar(255),
    lastname varchar(255),
    informantsincedatetime TIMESTAMP,
    informantnotes text,
    phone varchar(50),
    address1 varchar(255),
    address2 varchar(255),
    city varchar(255),
    state varchar(255),
    zip varchar(255),
    knowcommunityflag varchar(10),
    knowreligionflag varchar(10),
    knowcrimeflag varchar(10),
    knowschoolflag varchar(10),
    availableflag varchar(10),
    lat decimal,
    lng decimal
    
    )
;

CREATE table payments (
    paymentid SERIAL PRIMARY KEY NOT NULL,
    orderresultsid varchar(255),
    creditcard integer,
    creditcardname varchar(255),
    expmonth integer,
    expyear integer,
    cvs integer,
    transactiondatetime TIMESTAMP
    )
;
CREATE table informantreview (
    informantreviewid SERIAL PRIMARY KEY NOT NULL,
    orderresultsid varchar(255),
    informantid varchar(255),
    buyerid varchar(255),
    starrating integer,
    reviewcomment text,
    reviewdatetime TIMESTAMP
    )
