show databases;
-- 데이터베이스 목록보기


create database practice;
-- practice 데이터베이스

use practice;
-- practice 데이터베이스 사용하겠다.

create table person(
	name varchar(10),
    age int,
    height double    
);
--  person 테이블 생성

insert into person(name,age,height) values
('이민호',20,176.6),
('정채연',21,164.2),
('송중기',22,178.4)
;
-- person 테이블의 name, age, height칼럼에 값을 넣겠다. 

select name as 이름,
	   age as 나이
from person;

select *
from person;

select *
from person
where height<178 and age<21;

SET SQL_SAFE_UPDATES = 0;

update person set age=30 where name = '이민호';

delete from person where name='이민호';


create table car(
	model varchar(10),
    price int,
    eff double,
    unit varchar(2)
);
drop table car;
insert into car(model,price,eff,unit) values
('k5',2600,12.8,'km'),
('소나타',3000,13.2,'km'),
('아반뗴',2400,13.6,'km'),
('그랜져',4000,9.2,'km')
;
insert into car(model,price,eff,unit,production_date) values
('소나타3',700,10.8,'km','2018-02-01'),
('뉴 소나타',3200,12.7,'km','2022-10-01'),
('프리미엄 소나타',900,13.6,'km','2017-11-05')
;


select *
from car;

select *
from car
where price>2500;

alter table car add column production_date date;

update car set production_date = '2022-05-22' where model='k5';
update car set production_date = '2022-04-13' where model='소나타';
update car set model = '아반떼' where model='아반뗴';
update car set production_date = '2022-08-04' where model='아반떼';
update car set production_date = '2022-01-17' where model='그랜져';

/*
날짜, LIKE
날짜 : DATE , TIME , DATETIME
DATE : 년월일
TIME : 시분초
DATETIME : 년월일 시분초

*/

create table book(
	book_title varchar(20),
    price int,
    publishing_date date
);

insert into book(book_title, price, publishing_date) values
('어쩌다 한국인',15000,'2022-05-01'),
('사피엔스',18000,'2022-06-21'),
('프렌즈',23000,'2022-08-26')
;

select *
from book
where publishing_date between '2022-05-30' and '2022-07-01'
;

select *
from book
where book_title LIKE '%다%';

create table member(
	id varchar(10) primary key ,
    pw varchar(10),
    address varchar(20)
);

insert into member(id,pw,address) values
('asdf1234','asdf1234','대구광역시'),
('qwer1234','qwer1234','부산광역시'),
('sdfg1234','sdfg1234','광주광역시'),
('zxcv1234','zxcv1234','울산광역시')
;
/*
회원가입
비밀번호는 10글자 이상에 특수문자를 포함해야한다. -> JS에서 해결해야한다.(데이터 유효성 검사)

백엔드는 넘어온 데이터를 DB에 전달해서 insert SQL문이 실행되게 해준다.
*/


create database con_practice;
use con_practice;

create table student(
	id varchar(30) primary key,
    name varchar(10),
    major varchar(20)
);

create table lecture(
	lecture_id varchar(30),
    foreign key(lecture_id) references student(id),
    name varchar(10),
    lecture_name varchar(20)
);


show columns in student;
show columns in lecture;

insert into student (id,name,major) values 
('2018038018','김철수','컴푸터공학과'),
('2019040033','이민호','경영학과'),
('2022044025','신동엽','고분자공학과')
;

select * from student;

insert into lecture values('2018038018','김철수','자바 프로그래밍');
insert into lecture values('2018038018','김철수','리액트');
insert into lecture values('2019040033','이민호','경영학개론');
insert into lecture values('2022044025','신동엽','고분자공학개론');

select * from lecture;

select * from information_schema.table_constraints where table_name = 'lecture';


create table member(
	id varchar(20) primary key,
    name varchar(10),
    address	varchar(20)
);

create table order_info(
	order_id varchar(20),
    foreign key (order_id) references member(id),
    product varchar(20),
    order_date date
);

insert into member values 
('asdf1234','김철수','대구광역시'),
('qwer2222','이나영','부산광역시'),
('bffs2342','송중기','울산광역시'),
('rofs5454','박재범','서울특별시')
;

insert into order_info values
('asdf1234','usb128gb','2022-05-22'),
('asdf1234','여행용 세안도구','2022-02-14'),
('qwer2222','바디워시','2022-08-27'),
('bffs2342','아이폰 13 pro','2022-03-04'),
('rofs5454','일회용 마스크','2022-07-12')
;

select * 
from order_info
;

create table product(
	name varchar(20),
    price int
);

insert into product values 
('포도 봉봉',1500),
('웰치스 포도',1100),
('해태 폴라포 포도',1200),
('아침에 주스 포도',1500),
('싱싱한 포도 젤리',1400),
('신라면',1200),
('진라면',1300),
('열라면',1100),
('참꺠라면',1200)
;

select *
from product
where name like '%포도%'
limit 0,2;

-- Auto_increment : 자동증가 
-- - 게시판에 글 번호 메길 때 쓴다.

create table board(
	no int primary key auto_increment,
    title varchar(10),
    contents TEXT,
    write_date date
);

insert into board(title,contents,write_date) values
('title1','contents1','2022-09-01'),
('title2','contents2','2022-09-02'),
('title3','contents3','2022-09-03')
;

select * from board;

create table dept(
	deptno smallint primary key,
    dname varchar(20),
    loc varchar(20)
);


create table emp(
	empno int primary key,
    ename varchar(10),
    job varchar(20),
    deptno smallint
);

insert into dept values
(10,'accounting','new york'),
(20,'research','dallas'),
(30,'sales','chicago'),
(40,'operation','boston')
;

insert into emp values
(7839,'king','president',90),
(7566,'jones','manager',20),
(7788,'scott','analyst',10),
(7654,'martin','salesman',30),
(7900,'james','clerk',null)
;

select *
from dept as d
join emp as e on e.deptno = d.deptno
order by d.deptno;




