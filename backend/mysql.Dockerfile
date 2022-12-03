FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=secret123

COPY ./sql/cyberia_bd.sql /docker-entrypoint-initdb.d/
