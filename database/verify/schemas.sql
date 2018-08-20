-- Verify abusedb:schemas on pg

BEGIN;

SELECT 1/COUNT(*) FROM information_schema.schemata WHERE schema_name = 'api';
SELECT 1/COUNT(*) FROM information_schema.schemata WHERE schema_name = 'source';
SELECT 1/COUNT(*) FROM information_schema.schemata WHERE schema_name = 'private';

ROLLBACK;
