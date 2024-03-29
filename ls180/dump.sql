--
-- PostgreSQL database dump
--

-- Dumped from database version 14.8 (Homebrew)
-- Dumped by pg_dump version 14.8 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: weather; Type: TABLE; Schema: public; Owner: arnocai
--

CREATE TABLE public.weather (
    date date NOT NULL,
    low integer NOT NULL,
    high integer NOT NULL,
    rainfall integer DEFAULT 0
);


ALTER TABLE public.weather OWNER TO arnocai;

--
-- Data for Name: weather; Type: TABLE DATA; Schema: public; Owner: arnocai
--

INSERT INTO public.weather VALUES ('2016-03-07', 29, 32, 1);
INSERT INTO public.weather VALUES ('2016-03-08', 23, 31, 1);
INSERT INTO public.weather VALUES ('2016-03-09', 17, 28, 1);
INSERT INTO public.weather VALUES ('2016-03-02', 32, 44, 1);
INSERT INTO public.weather VALUES ('2016-03-03', 31, 47, 1);
INSERT INTO public.weather VALUES ('2016-03-04', 33, 42, 1);
INSERT INTO public.weather VALUES ('2016-03-05', 39, 46, 1);
INSERT INTO public.weather VALUES ('2016-03-06', 32, 43, 1);
INSERT INTO public.weather VALUES ('2016-03-01', 34, 43, 2);


--
-- PostgreSQL database dump complete
--

