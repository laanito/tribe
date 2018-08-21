-- Deploy abusedb:abuseinput to pg
-- requires: schemas

BEGIN;

CREATE TABLE source.fail2ban_event (
  id SERIAL PRIMARY KEY,
  date TIMESTAMP,
  submit_date TIMESTAMP,
  address INET,
  source INET,
  action VARCHAR(64));

COMMIT;
