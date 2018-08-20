-- Deploy abusedb:schemas to pg

BEGIN;

-- public schema in which we publish data
CREATE SCHEMA api;

-- schema used to import source to
CREATE SCHEMA source;

-- schema used for private data
CREATE SCHEMA private;

COMMIT;
