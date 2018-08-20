-- Revert abusedb:schemas from pg

BEGIN;

DROP SCHEMA api;
DROP SCHEMA source;
DROP SCHEMA private;

COMMIT;
