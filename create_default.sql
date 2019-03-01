-- create DB

CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    username TEXT,
    password TEXT,
    email TEXT,
    enabled INTEGER
);

-- ID auto increments so don't try to insert anything to it!
INSERT INTO users (username, password, email, enabled) VALUES ('jdoe', 'foobar', 'john.doe@gmail.com', 1);
INSERT INTO users (username, password, email, enabled) VALUES ('wsm', 'foobar', 'wade.smith@gmail.com', 1);
INSERT INTO users (username, password, email, enabled) VALUES ('jane', 'foobar', 'jane.doe@gmail.com', 1);
