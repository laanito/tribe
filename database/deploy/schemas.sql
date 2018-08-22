-- Deploy abusedb:schemas to pg

BEGIN;

-- public schema in which we publish data
CREATE SCHEMA api;
COMMENT ON SCHEMA api IS
'Public api with read methods to view data';

-- schema used to import source to
CREATE SCHEMA source;

COMMENT ON SCHEMA source IS
'Public API to submit data, only PUT methods are supported';

-- schema used for private data
CREATE SCHEMA private;

COMMENT ON SCHEMA private IS
  'private schema for data transformation';

COMMIT;
