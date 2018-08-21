-- Revert abusedb:abuseinput from pg

BEGIN;

DROP TABLE source.fail2ban_event;

COMMIT;
