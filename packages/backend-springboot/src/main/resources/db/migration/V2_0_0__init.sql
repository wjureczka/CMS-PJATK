INSERT INTO product(id, description, price, category_id, producer_id)
VALUES(1, 'Karta graficzna Gigabyte GeForce RTX 3070 Gaming', 3200, 3, 4);

INSERT INTO translation (id, lang, value, product_id)
VALUES (1, 'pl', 'Dwa wentylatory w połączeniu z wydajnym chłodzeniem + osiągi których oczekujesz! Najlepsza w swojej cenie!', 1);

INSERT INTO translation (id, lang, value, product_id)
VALUES (2, 'en', 'Two fans combined with efficient cooling + the performance you expect! Best for its price!', 1);

INSERT INTO translation (id, lang, value, product_id)
VALUES (3, 'de', 'Zwei Lüfter kombiniert mit effizienter Kühlung + der Leistung, die Sie erwarten! Am besten für seinen Preis!', 1);

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
VALUES (4, 'pl', 'Dwa wentylatory w połączeniu z wydajnym chłodzeniem + osiągi których oczekujesz! Najlepsza w swojej cenie!', 2);

INSERT INTO translation (id, lang, value, product_id)
VALUES (5, 'en', 'Two fans combined with efficient cooling + the performance you expect! Best for its price!', 2);

INSERT INTO translation (id, lang, value, product_id)
VALUES (6, 'de', 'Zwei Lüfter kombiniert mit effizienter Kühlung + der Leistung, die Sie erwarten! Am besten für seinen Preis!', 2);

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
VALUES (7, 'pl','Pamięć dla zaawansowanych graczy! Możliwości podkręcania wraz ze świetnym chłodzeniem to osiągi których wymagasz. Najwyższa jakość w świetnej cenie.', 3);

INSERT INTO translation (id, lang, value, product_id)
VALUES (8, 'en','Memory for advanced players! Overclocking with great cooling is the performance you demand. Top quality at a great price.', 3);

INSERT INTO translation (id, lang, value, product_id)
VALUES (9, 'de','Speicher für fortgeschrittene Spieler! Übertakten mit hervorragender Kühlung ist die Leistung, die Sie verlangen. Top Qualität zu einem günstigen Preis!', 3);

INSERT INTO product_property (id, name, value, product_id)
VALUES (7, 'MEMORY_CL', '15', 3);

INSERT INTO product_property (id, name, value, product_id)
VALUES (8, 'MEMORY_COUNT', '32 GB', 3);

-------------------------------------------------------------------------------------

INSERT INTO product(id, description, price, category_id, producer_id)
VALUES(4, 'Procesor Intel Core i5-10400F', 1600, 2, 1);

INSERT INTO translation (id, lang, value, product_id)
VALUES (10, 'pl','Odblokowany mnożnik i atrakcyjna cena, czyni model tego procesora idealnym wyborem dla graczy oraz streamerów. 6 rdzeni i 12 wątków zapewnią płynne strumieniowanie oraz grę w najnowsze wydane tytuły!', 4);

INSERT INTO translation (id, lang, value, product_id)
VALUES (11, 'en','The unlocked multiplier and attractive price make this processor model an ideal choice for players and streamers. 6 cores and 12 threads ensure smooth streaming and play the latest released titles!', 4);

INSERT INTO translation (id, lang, value, product_id)
VALUES (12, 'de','Der freigeschaltete Multiplikator und der attraktive Preis machen dieses Prozessormodell zu einer idealen Wahl für Spieler und Streamer. 6 Kerne und 12 Threads sorgen für reibungsloses Streaming und spielen die neuesten veröffentlichten Titel ab!', 4);

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
VALUES (13, 'pl','Mocny i tani procesor do grania prosto od AMD! Ryzen 5 2600 mimo niskiej ceny wyróżnia się mocą na tle konkurencji, idealne rozwiązanie dla każdego gracza!', 5);

INSERT INTO translation (id, lang, value, product_id)
VALUES (14, 'pl','A powerful and cheap gaming processor straight from AMD! Ryzen 5 2600, despite its low price, stands out with its power from the competition, the perfect solution for every player!', 5);

INSERT INTO translation (id, lang, value, product_id)
VALUES (15, 'pl','Ein leistungsstarker und billiger Gaming-Prozessor direkt von AMD! Trotz seines niedrigen Preises hebt sich Ryzen 5 2600 durch seine Konkurrenz ab und ist die perfekte Lösung für jeden Spieler!', 5);

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
VALUES (16, 'pl', 'Pamięć dla zaawansowanych graczy! Możliwości podkręcania wraz ze świetnym chłodzeniem to osiągi których wymagasz. Najwyższa jakość w świetnej cenie.', 6);

INSERT INTO translation (id, lang, value, product_id)
VALUES (17, 'pl', 'Memory for advanced players! Overclocking with great cooling is the performance you demand. Top quality at a great price.', 6);

INSERT INTO translation (id, lang, value, product_id)
VALUES (18, 'pl', 'Speicher für fortgeschrittene Spieler! Übertakten mit hervorragender Kühlung ist die Leistung, die Sie verlangen. Top Qualität zu einem günstigen Preis.', 6);

INSERT INTO product_property (id, name, value, product_id) VALUES (15, 'MEMORY_CL', '18', 6);

INSERT INTO product_property (id, name, value, product_id) VALUES (16, 'MEMORY_COUNT', '16 GB', 6);
-------------------------------------------------------------------------------------
