-- create DB

CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    username TEXT,
    email TEXT,
    enabled INTEGER
);

-- ID auto increments so don't try to insert anything to it!
INSERT INTO users (username, email, enabled) VALUES ('jdoe', 'john.doe@gmail.com', 1);
INSERT INTO users (username, email, enabled) VALUES ('wsm', 'wade.smith@gmail.com', 1);
INSERT INTO users (username, email, enabled) VALUES ('jane', 'jane.doe@gmail.com', 1);
