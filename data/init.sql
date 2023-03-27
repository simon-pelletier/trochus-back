-- psql -U postgres -f ./data/init.sql

BEGIN;

-- Drop User and Database
DROP DATABASE IF EXISTS TROCHUS;
DROP USER IF EXISTS TROCHUS;

-- Create User and Database
CREATE USER TROCHUS WITH LOGIN PASSWORD 'trochus';
CREATE DATABASE TROCHUS OWNER TROCHUS;

-- Connect to new Database trochus with user trochus
\c trochus trochus

CREATE TABLE role (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  label TEXT NOT NULL
);

INSERT INTO role (label) VALUES ('user');
INSERT INTO role (label) VALUES ('admin');

CREATE TABLE "user" (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email VARCHAR(42) NOT NULL,
  pseudo VARCHAR(42) NOT NULL,
  password VARCHAR(42) NOT NULL,
  location VARCHAR(42),
  searchperimeter VARCHAR(42),
  activated BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ,
  role_id INTEGER NOT NULL DEFAULT 1 REFERENCES ROLE(id)
);

CREATE TABLE item (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR(42) NOT NULL,
  estimation INTEGER,
  description TEXT,
  condition VARCHAR(42),
  traded BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ,
  user_id INTEGER
);

CREATE TABLE want (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ,
  item_id INTEGER,
  user_id INTEGER
);

CREATE TABLE traded (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ,
  transaction_id INTEGER,
  item_id INTEGER
);

COMMIT;