INSERT INTO product(id, description, price, category_id, producer_id)
VALUES(1, 'Karta graficzna Gigabyte GeForce RTX 3070 Gaming', 3200, 3, 4);

INSERT INTO translation (id, lang, value, product_id)
VALUES (1, 'pl', 'Dwa wentylatory w połączeniu z wydajnym chłodzeniem + osiągi których oczekujesz! Najlepsza w swojej cenie!', 1);

INSERT INTO product_property (id, name, value, product_id)
VALUES (1, 'CORE_COUNT', '1', 1);

INSERT INTO product_property (id, name, value, product_id)
VALUES (2, 'CLOCK_SPEED', '2155 Mhz', 1);

INSERT INTO product_property (id, name, value, product_id)
VALUES (3, 'MEMORY_COUNT', '12 GB', 1);

-------------------------------------------------------------------------------------

INSERT INTO product(id, description, price, category_id, producer_id)
VALUES(2, 'Karta graficzna XFX Radeon RX 580 GTS', 2600, 3, 6);

INSERT INTO translation (id, lang, value, product_id)
VALUES (2, 'pl', 'Dwa wentylatory w połączeniu z wydajnym chłodzeniem + osiągi których oczekujesz! Najlepsza w swojej cenie!', 2);

INSERT INTO product_property (id, name, value, product_id)
VALUES (4, 'CORE_COUNT', '1', 2);

INSERT INTO product_property (id, name, value, product_id)
VALUES (5, 'CLOCK_SPEED', '1755 Mhz', 2);

INSERT INTO product_property (id, name, value, product_id)
VALUES (6, 'MEMORY_COUNT', '8 GB', 2);

-------------------------------------------------------------------------------------

INSERT INTO product(id, description, price, category_id, producer_id)
VALUES(3, 'Pamięć HyperX Fury RGB, DDR4', 4300, 4, 8);

INSERT INTO translation (id, lang, value, product_id)
VALUES (3, 'pl','Pamięć dla zaawansowanych graczy! Możliwości podkręcania wraz ze świetnym chłodzeniem to osiągi których wymagasz. Najwyższa jakość w świetnej cenie.', 3);

INSERT INTO product_property (id, name, value, product_id)
VALUES (7, 'MEMORY_CL', '15', 3);

INSERT INTO product_property (id, name, value, product_id)
VALUES (8, 'MEMORY_COUNT', '32 GB', 3);

-------------------------------------------------------------------------------------

INSERT INTO product(id, description, price, category_id, producer_id)
VALUES(4, 'Procesor Intel Core i5-10400F', 1600, 2, 1);

INSERT INTO translation (id, lang, value, product_id)
VALUES (4, 'pl','Odblokowany mnożnik i atrakcyjna cena, czyni model tego procesora idealnym wyborem dla graczy oraz streamerów. 6 rdzeni i 12 wątków zapewnią płynne strumieniowanie oraz grę w najnowsze wydane tytuły!', 4);

INSERT INTO product_property (id, name, value, product_id)
VALUES (9, 'SOCKET', '2066', 4);

INSERT INTO product_property (id, name, value, product_id)
VALUES (10, 'CORE_COUNT', '6', 4);

INSERT INTO product_property (id, name, value, product_id)
VALUES (11, 'CLOCK_SPEED', '3 Ghz', 4);

-------------------------------------------------------------------------------------

INSERT INTO product(id, description, price, category_id, producer_id)
VALUES(5, 'Procesor AMD Ryzen 5950x', 4600, 2, 2);

INSERT INTO translation (id, lang, value, product_id)
VALUES (5, 'pl','Mocny i tani procesor do grania prosto od AMD! Ryzen 5 2600 mimo niskiej ceny wyróżnia się mocą na tle konkurencji, idealne rozwiązanie dla każdego gracza!', 5);

INSERT INTO product_property (id, name, value, product_id)
VALUES (12, 'SOCKET', 'AM4', 5);

INSERT INTO product_property (id, name, value, product_id)
VALUES (13, 'CORE_COUNT', '12', 5);

INSERT INTO product_property (id, name, value, product_id)
VALUES (14, 'CLOCK_SPEED', '5 Ghz', 5);

-------------------------------------------------------------------------------------

INSERT INTO product(id, description, price, category_id, producer_id)
VALUES(6, 'Pamięć ADATA Gammix D10,', 4600, 4, 9);

INSERT INTO translation (id, lang, value, product_id)
VALUES (6, 'pl', 'Pamięć dla zaawansowanych graczy! Możliwości podkręcania wraz ze świetnym chłodzeniem to osiągi których wymagasz. Najwyższa jakość w świetnej cenie.', 6);

INSERT INTO product_property (id, name, value, product_id) VALUES (15, 'MEMORY_CL', '18', 6);

INSERT INTO product_property (id, name, value, product_id) VALUES (16, 'MEMORY_COUNT', '16 GB', 6);
-------------------------------------------------------------------------------------
