-- Verify abusedb:abuseinput on pg

BEGIN;

SELECT id, date, submit_date, address, source, action
FROM source.fail2ban_event
WHERE FALSE;

ROLLBACK;

