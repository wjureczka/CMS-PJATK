INSERT INTO producer(producer_id, producer_name) VALUES(1, 'INTEL');
INSERT INTO producer(producer_id, producer_name) VALUES(2, 'AMD');
INSERT INTO producer(producer_id, producer_name) VALUES(3, 'NVIDIA');
INSERT INTO producer(producer_id, producer_name) VALUES(4, 'GIGABYTE');
INSERT INTO producer(producer_id, producer_name) VALUES(5, 'ASUS');
INSERT INTO producer(producer_id, producer_name) VALUES(6, 'MSI');
INSERT INTO producer(producer_id, producer_name) VALUES(7, 'PALTI');
INSERT INTO producer(producer_id, producer_name) VALUES(8, 'GOODRAM');
INSERT INTO producer(producer_id, producer_name) VALUES(9, 'CORSAIR');


INSERT INTO product(id, description, price, category_id, producer_id, long_description)
VALUES(2, 'Karta graficzna Gigabyte GeForce RTX 3070 Gaming', 3200, 3, 4,
 'Dwa wentylatory w połączeniu z wydajnym chłodzeniem + osiągi których oczekujesz! Najlepsza w swojej cenie!'
);

INSERT INTO product(id, description, price, category_id, producer_id, long_description)
VALUES(3, 'Karta graficzna XFX Radeon RX 580 GTS', 2600, 3, 6,
 'Dwa wentylatory w połączeniu z wydajnym chłodzeniem + osiągi których oczekujesz! Najlepsza w swojej cenie!'
);

INSERT INTO product(id, description, price, category_id, producer_id, long_description)
VALUES(4, 'Pamięć HyperX Fury RGB, DDR4', 4300, 4, 8,
 'Pamięć dla zaawansowanych graczy! Możliwości podkręcania wraz ze świetnym chłodzeniem to osiągi których wymagasz. Najwyższa jakość w świetnej cenie.'
);

INSERT INTO product(id, description, price, category_id, producer_id, long_description)
VALUES(5, 'Procesor Intel Core i5-10400F', 1600, 2, 1,
 'Odblokowany mnożnik i atrakcyjna cena, czyni model tego procesora idealnym wyborem dla graczy oraz streamerów. 6 rdzeni i 12 wątków zapewnią płynne strumieniowanie oraz grę w najnowsze wydane tytuły!'
);

INSERT INTO product(id, description, price, category_id, producer_id, long_description)
VALUES(6, 'Procesor AMD Ryzen %950x', 4600, 2, 2,
 'Mocny i tani procesor do grania prosto od AMD! Ryzen 5 2600 mimo niskiej ceny wyróżnia się mocą na tle konkurencji, idealne rozwiązanie dla każdego gracza!'
);

INSERT INTO product(id, description, price, category_id, producer_id, long_description)
VALUES(7, 'Pamięć ADATA Gammix D10,', 4600, 4, 9,
 'Pamięć dla zaawansowanych graczy! Możliwości podkręcania wraz ze świetnym chłodzeniem to osiągi których wymagasz. Najwyższa jakość w świetnej cenie.'
);
