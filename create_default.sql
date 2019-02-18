-- create DB

CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    username TEXT,
    email TEXT
);

-- ID auto increments so don't try to insert anything to it!
INSERT INTO users (username, email) VALUES ('jdoe', 'john.doe@gmail.com');
INSERT INTO users (username, email) VALUES ('wsm', 'wade.smith@gmail.com');
INSERT INTO users (username, email) VALUES ('jane', 'jane.doe@gmail.com');
