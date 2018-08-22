-- Verify abusedb:abuseinput on pg

BEGIN;

SELECT id, date, submit_date, address, source, action
FROM source.fail2banevent
WHERE FALSE;

ROLLBACK;

