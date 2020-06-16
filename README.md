# VueJS, SpringBoot, PostgresSQL, Docker Tutorial

----
## Tutorial Adding Platform

Very simple tutorial in which we have a platform that allows the addition of a Tutorial which is composed by Title and a Description.

Everything is dockerized, so as long as you have Docker installed, it will work.

----
## Installation

1. git clone https://github.com/franciscoreinolds/springboot_vuejs.git
2. cd springboot_vuejs/database
3. docker build -t spring_psql .
4. docker run -d --network="host" --name spring_psql spring_psql
5. cd ../backend/
6. docker build -t spring_backend .
7. docker run -d --network="host" --name spring_backend spring_backend
8. cd ../frontend/ 
9. docker build -t vuejs-cookbook .
10. docker run -d --network="host" --name vuejs-cookbook vuejs-cookbook
11. go to http://localhost:8080/
