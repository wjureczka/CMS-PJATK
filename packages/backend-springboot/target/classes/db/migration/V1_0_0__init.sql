INSERT INTO roles(name) VALUES('ROLE_USER');
INSERT INTO roles(name) VALUES('ROLE_MODERATOR');
INSERT INTO roles(name) VALUES('ROLE_ADMIN');


INSERT INTO category(category_id, category_type) VALUES(1, 'MOTHERBOARD');
INSERT INTO category(category_id, category_type) VALUES(2, 'PROCESSOR');
INSERT INTO category(category_id, category_type) VALUES(3, 'GRAPHICS_CARD');
INSERT INTO category(category_id, category_type) VALUES(4, 'MEMORY');
INSERT INTO category(category_id, category_type) VALUES(5, 'HARDWARE');

INSERT INTO product(id, date_from, date_to, description, price, category_id) VALUES(1, '2021-01-01', '2021-12-31', 'Procesor AMD Ryzen %950x', 4600, 2);
