CREATE DATABASE pje-bot
USE pje-bot

create table if not exists notification (
      id          BIGSERIAL       not null primary key,
      number      VARCHAR(13)     not null,
      key         UUID            not null
);