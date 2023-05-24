-- بسمك اللهم وبحمد

CREATE DATABASE Todo_List;
\c Todo_List;
CREATE TABLE Tasks(
    id SERIAL PRIMARY KEY NOT NULL,
    description VARCHAR(255) NOT NULL
);

GRANT ALL PRIVILEGES ON DATABASE Todo_List TO Ahmed;
UPDATE Tasks SET description = 'I need to clean my code more than this way!' WHERE id = 9;
DELETE FROM Tasks;