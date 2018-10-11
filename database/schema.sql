-- DROP DATABASE if EXISTS amazontest;
-- CREATE DATABASE amazontest;


-- DROP SCHEMA IF EXISTS amazonproducts cascade;

CREATE SCHEMA public;
-- SET search_path TO public;

CREATE TABLE public.restaurants (
  id serial primary key,
  name char(250),
  priceRange int,
  healthScore int,
  takesReservation int,
  monday char(300),
  tuesday char(300),
  wednesday char(300),
  thursday char(300),
  friday char(300),
  saturday char(300),
  sunday char(300);
);

\COPY public.restaurants FROM './NewTenMillion.csv' WITH DELIMITER AS ',' CSV HEADER;
CREATE INDEX id ON public.restaurants (id);