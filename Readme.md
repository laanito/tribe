# Tribes, collaborative abuse IP framework

The main target of this project is providing a framework for sharing possible abuser IPs (attacks, intrusions, suspicious behaviours), ...
Next, it will cross reports with log entries (if any) and generate:
1 - Ip sets for firewalls
2 - ML tools to detect attacks.

## Components

Tribe is made of several components:
* Agents to collect data, initially fail2ban actions for abuses and rsyslog for logs, other agents may be useful in the future.
* Collectors.- initially, the idea is using AWS SQS, Rest service, rsyslog server and AMPQ queue
* Database to centralize all data from collectors and agents.
* Admin tool for data exploration
* Public web for publicly sharing data and sets
* Data mining tools to excerpt future tools from data

## Agents


## Collectors

## Database

## Admin tool

## Public web

## Data Tools
