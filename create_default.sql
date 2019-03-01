-- create DB

CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    username TEXT,
    password TEXT,
    email TEXT,
    enabled INTEGER
);

-- ID auto increments so don't try to insert anything to it!
INSERT INTO users (username, password, email, enabled) VALUES ('jdoe', '$2b$10$8TZjRLQJMUCMga9qmSBS7emCm11xc0T4zH917SDKeGFIx.VDW9B8a', 'john.doe@gmail.com', 1);
INSERT INTO users (username, password, email, enabled) VALUES ('wsm', '$2b$10$DwXWaI0v0e1L9hj..h2zguCzdYsNAdCcpvXxv18OAGx7WuGJujug6', 'wade.smith@gmail.com', 1);
INSERT INTO users (username, password, email, enabled) VALUES ('jane', '$2b$10$Fc0ICPO9GJ3sq2WB0RfjWOri25jx3KsLErnIrLwknmmPa.uA8vjI2', 'jane.doe@gmail.com', 1);
