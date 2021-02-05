INSERT INTO roles(name) VALUES('ROLE_USER');
INSERT INTO roles(name) VALUES('ROLE_MODERATOR');
INSERT INTO roles(name) VALUES('ROLE_ADMIN');

INSERT INTO category(category_id, category_type) VALUES(1, 'MOTHERBOARD');
INSERT INTO category(category_id, category_type) VALUES(2, 'PROCESSOR');
INSERT INTO category(category_id, category_type) VALUES(3, 'GRAPHICS_CARD');
INSERT INTO category(category_id, category_type) VALUES(4, 'MEMORY');
INSERT INTO category(category_id, category_type) VALUES(5, 'HARDWARE');
INSERT INTO category(category_id, category_type) VALUES(6, 'POWER_SUPPLY');
INSERT INTO category(category_id, category_type) VALUES(7, 'COMPUTER_CASE');

INSERT INTO socket_dictionary(id, value) VALUES (1, '1200');
INSERT INTO socket_dictionary(id, value) VALUES (2, '1151');
INSERT INTO socket_dictionary(id, value) VALUES (3, 'AM4');
INSERT INTO socket_dictionary(id, value) VALUES (4, '2066');
INSERT INTO socket_dictionary(id, value) VALUES (5, 'TR4');
INSERT INTO socket_dictionary(id, value) VALUES (6, 'sTRX4');

INSERT INTO producer(producer_id, producer_name) VALUES(1, 'INTEL');
INSERT INTO producer(producer_id, producer_name) VALUES(2, 'AMD');
INSERT INTO producer(producer_id, producer_name) VALUES(3, 'NVIDIA');
INSERT INTO producer(producer_id, producer_name) VALUES(4, 'GIGABYTE');
INSERT INTO producer(producer_id, producer_name) VALUES(5, 'ASUS');
INSERT INTO producer(producer_id, producer_name) VALUES(6, 'MSI');
INSERT INTO producer(producer_id, producer_name) VALUES(7, 'PALIT');
INSERT INTO producer(producer_id, producer_name) VALUES(8, 'GOODRAM');
INSERT INTO producer(producer_id, producer_name) VALUES(9, 'CORSAIR');
