CREATE DATABASE pje-bot
USE pje-bot

create table notification (
      id          Long            not null primary key,
      number      VARCHAR(13)     not null,
      key         UUID            not null
);