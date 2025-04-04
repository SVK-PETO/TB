document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const langSwitch = document.getElementById('lang-switch');
    const disclaimer = document.getElementById('translation-disclaimer');
    const disclaimerText = disclaimer.querySelector('p');
    const translatableElements = document.querySelectorAll('[data-translate]');

    // --- Texty pre preklad ---
    const translations = {
        'en': { // English (Official)
            page_title: "K105 ROE - Total Battle",
            lang_select_label: "Language:",
            dark_mode_toggle: "Toggle Dark Mode",
            translation_warning: "This version is machine translated. The English version is the officially valid one.",
            main_title: "Total Battle – Kingdom K105 – Rules Of Engagement (ROE)",
            effective_date: "ROE EFFECTIVE 2025-04-08",
            section1_title_no_number: "Kingdom and Clans",
            rule1_1: "Always be respectful in chats and PMs with other players. Vulgar, offensive, and racist comments will not be tolerated.",
            rule1_2: "All players are to follow the Rules Of Engagement (ROE), as stated here.",
            rule1_3: "All clans are to be \"ROE Compliant\" and state this on their clan page, in the first line, \"We follow K105-ROE https://svk-peto.github.io/TB/\".",
            rule1_4: "All clans are to have their diplomat listed on their clan page, elsewhere diplomat is clan leader.",
            rule1_5: "All players in ROE compliant clans are protected by this ROE.",
            rule1_6: "This ROE only protects players in human clans that are ROE compliant.",
            rule1_7: "All players with hero level 10 and down are protected regardless of clan status.",
            rule1_8: "The ROE is a \"living document\" and will be updated as needed, by the palace.",
            section2_title_no_number: "Clan Territory and Resources",
            rule2_1: "All resources in a clan's territory, belong exclusively to that clan. This includes Dragon Mounds (DM) and Well Springs (WS). A clan can defend their resources, as they see fit.",
            rule2_2: "Monsters, Citadels, Crypts, and Arenas belong to the kingdom, regardless of location.",
            rule2_3: "Player built mines belong exclusively to that player. In case of dispute ownership must be proven by: screenshot (\"Created by...\"), inside or toughing clan’s territory.",
            rule2_4: "Game generated mines belong to the player that occupies it, for as long as they occupy it. There is no registration, except DM and WS.",
            rule2_5: "All Dragon Mounds (DM), except those within clan territory, must be registered in K105/DM and Well Springs (WS), except those within clan territory, must be registered at K105/WS.",
            rule2_6: "The first player to register DM or WS owns it and must occupy within 10 minutes or loses ownership.",
            rule2_7: "You may only occupy 1 DM and 1 WS at a time and may only occupy 2 of each from reset to reset.",
            rule2_8: "Illegally occupied DM or WS may be properly registered and attacked by anyone at any time.",
            section3_title_no_number: "Attacks and scouting",
            rule3_1: "This kingdom is always at peace (including COT).",
            rule3_2: "Players are allowed to agree to exchange attacks, as they see fit, at any time.",
            rule3_3: "No attacking and scouting clan buildings (forts, capitals, etc.) in any kingdom.",
            section4_title_no_number: "Court",
            rule4_1: "All illegal attacks and scouting can either be compensated or retaliated, not both.",
            rule4_2: "If seeking compensation, follow the procedure in section 5. Compensation rules are in section 5), if seeking retaliation see section 4.",
            rule4_2_edited_note: "(Note: Original text referenced 5.3, likely meant 5. Compensation rules are in section 5)",
            rule4_3: "All players are expected to handle compensation between themselves within 24 hours. If the issue can not be resolved, the clan diplomat takes over and if it is still not resolved within the next 24 hours, present the issue to the judge.",
            rule4_4: "All compensation claims for an illegal attack must be submitted within 72 hours or no claim will be honoured.",
            rule4_5: "Not paying court ordered compensation will result in outlaw status until it is paid.",
            rule4_6: "All decisions by the Court are final.",
            rule4_7: "The players <strong>Gandafes</strong> and <strong>KingdomOfGAG</strong> have been appointed as judges for the kingdom. They will take care of the Dragon Mound and Wellspring rooms. They also take care of all issues which cannot be solved between diplomats. Their decisions have to be respected and followed always. Violations of that will lead to bad titles or outlaw status.", // Zvýraznené mená
            section5_title_no_number: "Taxes",
            rule5_1: "All players are expected to pay all of their taxes in a timely manner.",
            rule5_2: "The values listed below are the maximum allowable ingots permitted within your city (over 1-day production). If you exceed these numbers, anyone may attack your city to collect the taxes. If attacker fail to get enough ingots (game may show outdated value, ingots sent before attack...) attack will be considered illegal.",
            tax_header_level: "City Levels",
            tax_header_ingots: "Maximum Allowed Ingots in City",
            tax_range_1: "01 - 24", // Pridané medzery
            tax_ingots_1: "10000 Ingots", // Zmenené písmeno
            tax_range_2: "25 - 34", // Pridané medzery
            tax_ingots_2: "30000 Ingots", // Zmenené písmeno
            tax_range_3: "35 - 39", // Pridané medzery
            tax_ingots_3: "40000 Ingots", // Zmenené písmeno
            tax_range_4: "40 - 45", // Pridané medzery
            tax_ingots_4: "50000 Ingots", // Zmenené písmeno
            chats_title_no_number: "All official kingdom chats",
            chat_roe: "K105-ROE",
            chat_dm: "K105/DM",
            chat_ws: "K105/WS",
        },
        'cs': { // Czech (Machine Translated)
            page_title: "K105 ROE - Total Battle",
            lang_select_label: "Jazyk:",
            dark_mode_toggle: "Přepnout Tmavý Režim",
            translation_warning: "Tato verze je strojově přeložena. Oficiálně platná je anglická verze.",
            main_title: "Total Battle – Království K105 – Pravidla střetnutí (ROE)",
            effective_date: "ROE PLATNÉ OD 2025-04-08",
            section1_title_no_number: "Království a klany",
            rule1_1: "V chatech a soukromých zprávách (PM) s ostatními hráči buďte vždy uctiví. Vulgární, urážlivé a rasistické komentáře nebudou tolerovány.",
            rule1_2: "Všichni hráči musí dodržovat zde uvedená Pravidla střetnutí (ROE).",
            rule1_3: "Všechny klany musí být \"ROE Compliant\" a uvést to na své klanové stránce v prvním řádku: \"Dodržujeme K105-ROE https://svk-peto.github.io/TB/\".",
            rule1_4: "Všechny klany musí mít svého diplomata uvedeného na klanové stránce, jinak je diplomatem vůdce klanu.",
            rule1_5: "Všichni hráči v klanech dodržujících ROE jsou chráněni tímto ROE.",
            rule1_6: "Toto ROE chrání pouze hráče v lidských klanech, které jsou ROE compliant.",
            rule1_7: "Všichni hráči s úrovní hrdiny 10 a nižší jsou chráněni bez ohledu na status klanu.",
            rule1_8: "ROE je \"živý dokument\" a bude podle potřeby aktualizován palácem.",
            section2_title_no_number: "Území klanu a zdroje",
            rule2_1: "Všechny zdroje na území klanu patří výhradně tomuto klanu. To zahrnuje Dragon Mounds (DM) a Well Springs (WS). Klan může bránit své zdroje, jak uzná za vhodné.",
            rule2_2: "Monstra, Citadely, Kryptty a Arény patří království, bez ohledu na umístění.",
            rule2_3: "Doly postavené hráčem patří výhradně tomuto hráči. V případě sporu musí být vlastnictví prokázáno: snímkem obrazovky (\"Vytvořil...\"), uvnitř nebo dotýkající se území klanu.",
            rule2_4: "Hrou generované doly patří hráči, který je obsadí, po dobu, po kterou je obsazuje. Neexistuje žádná registrace, kromě DM a WS.",
            rule2_5: "Všechny Dragon Mounds (DM), kromě těch na území klanu, musí být registrovány v K105/DM a Well Springs (WS), kromě těch na území klanu, musí být registrovány v K105/WS.",
            rule2_6: "První hráč, který zaregistruje DM nebo WS, jej vlastní a musí jej obsadit do 10 minut, jinak ztrácí vlastnictví.",
            rule2_7: "Můžete obsadit pouze 1 DM a 1 WS najednou a můžete obsadit pouze 2 od každého typu od resetu do resetu.",
            rule2_8: "Nelegálně obsazené DM nebo WS mohou být řádně zaregistrovány a napadeny kýmkoli a kdykoli.",
            section3_title_no_number: "Útoky a průzkum",
            rule3_1: "Toto království je vždy v míru (včetně COT).",
            rule3_2: "Hráči se mohou kdykoli dohodnout na výměně útoků, jak uznají za vhodné.",
            rule3_3: "Žádné útočení a průzkum klanových budov (pevnosti, hlavní města atd.) v žádném království.",
            section4_title_no_number: "Soud",
            rule4_1: "Všechny nelegální útoky a průzkumy mohou být buď kompenzovány, nebo může následovat odveta, nikoli obojí.",
            rule4_2: "Pokud žádáte kompenzaci, postupujte podle postupu v sekci 5. Pravidla kompenzace jsou v sekci 5), pokud žádáte odvetu, viz sekci 4.",
            rule4_2_edited_note: "(Poznámka: Původní text odkazoval na 5.3, pravděpodobně míněno 5. Pravidla kompenzace jsou v sekci 5)",
            rule4_3: "Očekává se, že všichni hráči vyřídí kompenzaci mezi sebou do 24 hodin. Pokud problém nelze vyřešit, převezme ho klanový diplomat, a pokud stále není vyřešen během následujících 24 hodin, předložte problém soudci.",
            rule4_4: "Všechny nároky na kompenzaci za nelegální útok musí být podány do 72 hodin, jinak nárok nebude uznán.",
            rule4_5: "Nezaplacení soudem nařízené kompenzace bude mít za následek status psance (outlaw status), dokud nebude zaplacena.",
            rule4_6: "Všechna rozhodnutí Soudu jsou konečná.",
            rule4_7: "Hráči <strong>Gandafes</strong> a <strong>KingdomOfGAG</strong> byli jmenováni soudci království. Postarají se o místnosti Dragon Mound a Wellspring. Starají se také o všechny problémy, které nelze vyřešit mezi diplomaty. Jejich rozhodnutí musí být vždy respektována a dodržována. Porušení tohoto povede ke špatným titulům nebo statusu psance.", // Zvýraznené mená
            section5_title_no_number: "Daně",
            rule5_1: "Očekává se, že všichni hráči zaplatí všechny své daně včas.",
            rule5_2: "Níže uvedené hodnoty představují maximální povolené ingoty ve vašem městě (nad 1denní produkci). Pokud tato čísla překročíte, kdokoli může zaútočit na vaše město, aby vybral daně. Pokud útočník nezíská dostatek ingotů (hra může ukazovat zastaralou hodnotu, ingoty odeslané před útokem...), útok bude považován za nelegální.",
            tax_header_level: "Úrovně města",
            tax_header_ingots: "Maximální povolené ingoty ve městě",
            tax_range_1: "01 - 24", // Pridané medzery
            tax_ingots_1: "10000 Ingotů", // Zmenené písmeno
            tax_range_2: "25 - 34", // Pridané medzery
            tax_ingots_2: "30000 Ingotů", // Zmenené písmeno
            tax_range_3: "35 - 39", // Pridané medzery
            tax_ingots_3: "40000 Ingotů", // Zmenené písmeno
            tax_range_4: "40 - 45", // Pridané medzery
            tax_ingots_4: "50000 Ingotů", // Zmenené písmeno
            chats_title_no_number: "Všechny oficiální chaty království",
            chat_roe: "K105-ROE",
            chat_dm: "K105/DM",
            chat_ws: "K105/WS",
        },
        'pl': { // Polish (Machine Translated)
            page_title: "K105 ROE - Total Battle",
            lang_select_label: "Język:",
            dark_mode_toggle: "Przełącz Tryb Ciemny",
            translation_warning: "Ta wersja jest tłumaczona maszynowo. Oficjalnie ważna jest wersja angielska.",
            main_title: "Total Battle – Królestwo K105 – Zasady Walki (ROE)",
            effective_date: "ROE OBOWIĄZUJĄCE OD 2025-04-08",
            section1_title_no_number: "Królestwo i Klany",
            rule1_1: "Zawsze bądź pełen szacunku na czatach i w prywatnych wiadomościach (PM) z innymi graczami. Wulgarne, obraźliwe i rasistowskie komentarze nie będą tolerowane.",
            rule1_2: "Wszyscy gracze muszą przestrzegać Zasad Walki (ROE), jak podano tutaj.",
            rule1_3: "Wszystkie klany muszą być \"Zgodne z ROE\" (ROE Compliant) i podać to na swojej stronie klanu, w pierwszej linii: \"Przestrzegamy K105-ROE https://svk-peto.github.io/TB/\".",
            rule1_4: "Wszystkie klany muszą mieć swojego dyplomatę wymienionego na stronie klanu, w przeciwnym razie dyplomatą jest lider klanu.",
            rule1_5: "Wszyscy gracze w klanach zgodnych z ROE są chronieni przez te ROE.",
            rule1_6: "Te ROE chronią tylko graczy w ludzkich klanach, które są zgodne z ROE.",
            rule1_7: "Wszyscy gracze z poziomem bohatera 10 i niższym są chronieni niezależnie od statusu klanu.",
            rule1_8: "ROE to \"żywy dokument\" i będzie aktualizowany w razie potrzeby przez pałac.",
            section2_title_no_number: "Terytorium Klanu i Zasoby",
            rule2_1: "Wszystkie zasoby na terytorium klanu należą wyłącznie do tego klanu. Obejmuje to Smocze Kopce (DM) i Źródła (WS). Klan może bronić swoich zasobów, jak uzna za stosowne.",
            rule2_2: "Potwory, Cytadele, Krypty i Areny należą do królestwa, niezależnie od lokalizacji.",
            rule2_3: "Kopalnie zbudowane przez graczy należą wyłącznie do tego gracza. W przypadku sporu własność musi zostać udowodniona przez: zrzut ekranu (\"Stworzone przez...\"), wewnątrz lub dotykając terytorium klanu.",
            rule2_4: "Kopalnie generowane przez grę należą do gracza, który je zajmuje, tak długo, jak je zajmuje. Nie ma rejestracji, z wyjątkiem DM i WS.",
            rule2_5: "Wszystkie Smocze Kopce (DM), z wyjątkiem tych na terytorium klanu, muszą być zarejestrowane w K105/DM, a Źródła (WS), z wyjątkiem tych na terytorium klanu, muszą być zarejestrowane w K105/WS.",
            rule2_6: "Pierwszy gracz, który zarejestruje DM lub WS, jest jego właścicielem i musi go zająć w ciągu 10 minut, w przeciwnym razie traci własność.",
            rule2_7: "Możesz zajmować tylko 1 DM i 1 WS na raz i możesz zająć tylko 2 z każdego od resetu do resetu.",
            rule2_8: "Nielegalnie zajęte DM lub WS mogą zostać prawidłowo zarejestrowane i zaatakowane przez kogokolwiek w dowolnym momencie.",
            section3_title_no_number: "Ataki i zwiad",
            rule3_1: "To królestwo jest zawsze w pokoju (w tym COT).",
            rule3_2: "Gracze mogą w dowolnym momencie uzgodnić wymianę ataków, jak uznają za stosowne.",
            rule3_3: "Zakaz atakowania i zwiadu budynków klanowych (forty, stolice itp.) w jakimkolwiek królestwie.",
            section4_title_no_number: "Sąd",
            rule4_1: "Wszystkie nielegalne ataki i zwiady mogą być albo zrekompensowane, albo odwetowe, nie oba.",
            rule4_2: "Jeśli ubiegasz się o odszkodowanie, postępuj zgodnie z procedurą w sekcji 5. Zasady odszkodowania znajdują się w sekcji 5), jeśli szukasz odwetu, zobacz sekcję 4.",
            rule4_2_edited_note: "(Uwaga: Oryginalny tekst odnosił się do 5.3, prawdopodobnie chodziło o 5. Zasady odszkodowania znajdują się w sekcji 5)",
            rule4_3: "Oczekuje się, że wszyscy gracze załatwią odszkodowanie między sobą w ciągu 24 godzin. Jeśli problemu nie da się rozwiązać, przejmuje go dyplomata klanu, a jeśli nadal nie zostanie rozwiązany w ciągu następnych 24 godzin, przedstaw sprawę sędziemu.",
            rule4_4: "Wszystkie roszczenia o odszkodowanie za nielegalny atak muszą zostać złożone w ciągu 72 godzin, w przeciwnym razie roszczenie nie zostanie uwzględnione.",
            rule4_5: "Niezapłacenie odszkodowania zarządzonego przez sąd spowoduje status banity (outlaw status), dopóki nie zostanie zapłacone.",
            rule4_6: "Wszystkie decyzje Sądu są ostateczne.",
            rule4_7: "Gracze <strong>Gandafes</strong> i <strong>KingdomOfGAG</strong> zostali mianowani sędziami królestwa. Zajmą się pokojami Dragon Mound i Wellspring. Zajmują się również wszystkimi kwestiami, których nie można rozwiązać między dyplomatami. Ich decyzje muszą być zawsze szanowane i przestrzegane. Naruszenia tego doprowadzą do złych tytułów lub statusu banity.", // Zvýraznené mená
            section5_title_no_number: "Podatki",
            rule5_1: "Oczekuje się, że wszyscy gracze zapłacą wszystkie swoje podatki w odpowiednim czasie.",
            rule5_2: "Poniższe wartości to maksymalne dozwolone sztabki (ingots) dozwolone w Twoim mieście (ponad 1-dniową produkcję). Jeśli przekroczysz te liczby, każdy może zaatakować Twoje miasto, aby zebrać podatki. Jeśli atakujący nie zdobędzie wystarczającej ilości sztabek (gra może pokazywać nieaktualną wartość, sztabki wysłane przed atakiem...), atak zostanie uznany za nielegalny.",
            tax_header_level: "Poziomy miasta",
            tax_header_ingots: "Maksymalna dozwolona ilość sztabek w mieście",
            tax_range_1: "01 - 24", // Pridané medzery
            tax_ingots_1: "10000 Sztabek", // Zmenené písmeno
            tax_range_2: "25 - 34", // Pridané medzery
            tax_ingots_2: "30000 Sztabek", // Zmenené písmeno
            tax_range_3: "35 - 39", // Pridané medzery
            tax_ingots_3: "40000 Sztabek", // Zmenené písmeno
            tax_range_4: "40 - 45", // Pridané medzery
            tax_ingots_4: "50000 Sztabek", // Zmenené písmeno
            chats_title_no_number: "Wszystkie oficjalne czaty królestwa",
            chat_roe: "K105-ROE",
            chat_dm: "K105/DM",
            chat_ws: "K105/WS",
        },
         'it': { // Italian (Machine Translated)
            page_title: "K105 ROE - Total Battle",
            lang_select_label: "Lingua:",
            dark_mode_toggle: "Attiva/disattiva Modalità Scura",
            translation_warning: "Questa versione è tradotta automaticamente. La versione inglese è quella ufficialmente valida.",
            main_title: "Total Battle – Regno K105 – Regole di Ingaggio (ROE)",
            effective_date: "ROE IN VIGORE DAL 2025-04-08",
            section1_title_no_number: "Regno e Clan",
            rule1_1: "Sii sempre rispettoso nelle chat e nei PM con altri giocatori. Commenti volgari, offensivi e razzisti non saranno tollerati.",
            rule1_2: "Tutti i giocatori devono seguire le Regole di Ingaggio (ROE), come qui indicato.",
            rule1_3: "Tutti i clan devono essere \"Conformi alle ROE\" (ROE Compliant) e dichiararlo sulla pagina del proprio clan, nella prima riga: \"Seguiamo K105-ROE https://svk-peto.github.io/TB/\".",
            rule1_4: "Tutti i clan devono avere il loro diplomatico elencato sulla pagina del clan, altrimenti il diplomatico è il capo clan.",
            rule1_5: "Tutti i giocatori nei clan conformi alle ROE sono protetti da queste ROE.",
            rule1_6: "Queste ROE proteggono solo i giocatori nei clan umani che sono conformi alle ROE.",
            rule1_7: "Tutti i giocatori con livello eroe 10 e inferiore sono protetti indipendentemente dallo stato del clan.",
            rule1_8: "Le ROE sono un \"documento vivente\" e saranno aggiornate secondo necessità, dal palazzo.",
            section2_title_no_number: "Territorio del Clan e Risorse",
            rule2_1: "Tutte le risorse nel territorio di un clan appartengono esclusivamente a quel clan. Ciò include i Dragon Mounds (DM) e le Well Springs (WS). Un clan può difendere le proprie risorse come meglio crede.",
            rule2_2: "Mostri, Cittadelle, Cripte e Arene appartengono al regno, indipendentemente dalla posizione.",
            rule2_3: "Le miniere costruite dai giocatori appartengono esclusivamente a quel giocatore. In caso di disputa, la proprietà deve essere provata tramite: screenshot (\"Creato da...\"), all'interno o toccando il territorio del clan.",
            rule2_4: "Le miniere generate dal gioco appartengono al giocatore che le occupa, per tutto il tempo in cui le occupa. Non c'è registrazione, eccetto DM e WS.",
            rule2_5: "Tutti i Dragon Mounds (DM), eccetto quelli all'interno del territorio del clan, devono essere registrati in K105/DM e le Well Springs (WS), eccetto quelle all'interno del territorio del clan, devono essere registrate in K105/WS.",
            rule2_6: "Il primo giocatore a registrare DM o WS ne diventa proprietario e deve occuparlo entro 10 minuti o ne perde la proprietà.",
            rule2_7: "Puoi occupare solo 1 DM e 1 WS alla volta e puoi occuparne solo 2 di ciascuno da reset a reset.",
            rule2_8: "DM o WS occupati illegalmente possono essere registrati correttamente e attaccati da chiunque in qualsiasi momento.",
            section3_title_no_number: "Attacchi e scouting",
            rule3_1: "Questo regno è sempre in pace (incluso COT).",
            rule3_2: "I giocatori sono autorizzati a concordare scambi di attacchi, come ritengono opportuno, in qualsiasi momento.",
            rule3_3: "Nessun attacco e scouting di edifici del clan (forti, capitali, ecc.) in nessun regno.",
            section4_title_no_number: "Corte",
            rule4_1: "Tutti gli attacchi e lo scouting illegali possono essere compensati o soggetti a ritorsione, non entrambi.",
            rule4_2: "Se si cerca un risarcimento, seguire la procedura nella sezione 5. Le regole di risarcimento sono nella sezione 5), se si cerca una ritorsione vedere la sezione 4.",
            rule4_2_edited_note: "(Nota: il testo originale faceva riferimento a 5.3, probabilmente intendeva 5. Le regole di risarcimento sono nella sezione 5)",
            rule4_3: "Ci si aspetta che tutti i giocatori gestiscano il risarcimento tra di loro entro 24 ore. Se il problema non può essere risolto, subentra il diplomatico del clan e se non viene ancora risolto entro le successive 24 ore, presentare il problema al giudice.",
            rule4_4: "Tutte le richieste di risarcimento per un attacco illegale devono essere presentate entro 72 ore o nessuna richiesta sarà onorata.",
            rule4_5: "Il mancato pagamento del risarcimento ordinato dal tribunale comporterà lo status di fuorilegge (outlaw status) fino al pagamento.",
            rule4_6: "Tutte le decisioni della Corte sono definitive.",
            rule4_7: "I giocatori <strong>Gandafes</strong> e <strong>KingdomOfGAG</strong> sono stati nominati giudici per il regno. Si occuperanno delle stanze Dragon Mound e Wellspring. Si occupano anche di tutte le questioni che non possono essere risolte tra diplomatici. Le loro decisioni devono essere rispettate e seguite sempre. Le violazioni di ciò porteranno a titoli negativi o allo status di fuorilegge.", // Zvýraznené mená
            section5_title_no_number: "Tasse",
            rule5_1: "Ci si aspetta che tutti i giocatori paghino tutte le loro tasse in modo tempestivo.",
            rule5_2: "I valori elencati di seguito sono i lingotti (ingots) massimi consentiti all'interno della tua città (oltre la produzione di 1 giorno). Se superi questi numeri, chiunque può attaccare la tua città per riscuotere le tasse. Se l'attaccante non riesce a ottenere abbastanza lingotti (il gioco potrebbe mostrare un valore obsoleto, lingotti inviati prima dell'attacco...) l'attacco sarà considerato illegale.",
            tax_header_level: "Livelli città",
            tax_header_ingots: "Lingotti massimi consentiti in città",
            tax_range_1: "01 - 24", // Pridané medzery
            tax_ingots_1: "10000 Lingotti", // Zmenené písmeno
            tax_range_2: "25 - 34", // Pridané medzery
            tax_ingots_2: "30000 Lingotti", // Zmenené písmeno
            tax_range_3: "35 - 39", // Pridané medzery
            tax_ingots_3: "40000 Lingotti", // Zmenené písmeno
            tax_range_4: "40 - 45", // Pridané medzery
            tax_ingots_4: "50000 Lingotti", // Zmenené písmeno
            chats_title_no_number: "Tutte le chat ufficiali del regno",
            chat_roe: "K105-ROE",
            chat_dm: "K105/DM",
            chat_ws: "K105/WS",
         },
         'es': { // Spanish (Machine Translated)
            page_title: "K105 ROE - Total Battle",
            lang_select_label: "Idioma:",
            dark_mode_toggle: "Alternar Modo Oscuro",
            translation_warning: "Esta versión está traducida automáticamente. La versión en inglés es la oficialmente válida.",
            main_title: "Total Battle – Reino K105 – Reglas de Enfrentamiento (ROE)",
            effective_date: "ROE EFECTIVAS DESDE 2025-04-08",
            section1_title_no_number: "Reino y Clanes",
            rule1_1: "Sé siempre respetuoso en los chats y mensajes privados (PM) con otros jugadores. No se tolerarán comentarios vulgares, ofensivos ni racistas.",
            rule1_2: "Todos los jugadores deben seguir las Reglas de Enfrentamiento (ROE), como se indica aquí.",
            rule1_3: "Todos los clanes deben cumplir con las ROE (\"ROE Compliant\") y declararlo en la página de su clan, en la primera línea: \"Seguimos K105-ROE https://svk-peto.github.io/TB/\".",
            rule1_4: "Todos los clanes deben tener a su diplomático listado en la página de su clan, de lo contrario, el diplomático es el líder del clan.",
            rule1_5: "Todos los jugadores en clanes que cumplen con las ROE están protegidos por estas ROE.",
            rule1_6: "Estas ROE solo protegen a los jugadores en clanes humanos que cumplen con las ROE.",
            rule1_7: "Todos los jugadores con nivel de héroe 10 o inferior están protegidos independientemente del estado del clan.",
            rule1_8: "Las ROE son un \"documento vivo\" y serán actualizadas según sea necesario por el palacio.",
            section2_title_no_number: "Territorio del Clan y Recursos",
            rule2_1: "Todos los recursos en el territorio de un clan pertenecen exclusivamente a ese clan. Esto incluye Montículos de Dragón (DM) y Fuentes de Pozo (WS). Un clan puede defender sus recursos como mejor le parezca.",
            rule2_2: "Monstruos, Ciudadelas, Criptas y Arenas pertenecen al reino, independientemente de la ubicación.",
            rule2_3: "Las minas construidas por jugadores pertenecen exclusivamente a ese jugador. En caso de disputa, la propiedad debe demostrarse mediante: captura de pantalla (\"Creado por...\"), dentro o tocando el territorio del clan.",
            rule2_4: "Las minas generadas por el juego pertenecen al jugador que las ocupa, mientras las ocupe. No hay registro, excepto para DM y WS.",
            rule2_5: "Todos los Montículos de Dragón (DM), excepto los que se encuentran dentro del territorio del clan, deben registrarse en K105/DM y las Fuentes de Pozo (WS), excepto las que se encuentran dentro del territorio del clan, deben registrarse en K105/WS.",
            rule2_6: "El primer jugador en registrar un DM o WS lo posee y debe ocuparlo en 10 minutos o pierde la propiedad.",
            rule2_7: "Solo puedes ocupar 1 DM y 1 WS a la vez y solo puedes ocupar 2 de cada uno desde un reinicio hasta el siguiente.",
            rule2_8: "Los DM o WS ocupados ilegalmente pueden ser registrados correctamente y atacados por cualquiera en cualquier momento.",
            section3_title_no_number: "Ataques y exploración",
            rule3_1: "Este reino siempre está en paz (incluido COT).",
            rule3_2: "Los jugadores pueden acordar intercambiar ataques como mejor les parezca, en cualquier momento.",
            rule3_3: "No atacar ni explorar edificios de clanes (fuertes, capitales, etc.) en ningún reino.",
            section4_title_no_number: "Corte",
            rule4_1: "Todos los ataques y exploraciones ilegales pueden ser compensados o respondidos con represalias, no ambos.",
            rule4_2: "Si busca compensación, siga el procedimiento de la sección 5. Las reglas de compensación están en la sección 5), si busca represalias, consulte la sección 4.",
            rule4_2_edited_note: "(Nota: el texto original hacía referencia a 5.3, probablemente significaba 5. Las reglas de compensación están en la sección 5)",
            rule4_3: "Se espera que todos los jugadores gestionen la compensación entre ellos en un plazo de 24 horas. Si el problema no puede resolverse, el diplomático del clan se hace cargo y si aún no se resuelve en las siguientes 24 horas, presente el problema al juez.",
            rule4_4: "Todas las reclamaciones de compensación por un ataque ilegal deben presentarse en un plazo de 72 horas o no se aceptará ninguna reclamación.",
            rule4_5: "No pagar la compensación ordenada por la corte resultará en estado de proscrito (outlaw status) hasta que se pague.",
            rule4_6: "Todas las decisiones de la Corte son finales.",
            rule4_7: "Los jugadores <strong>Gandafes</strong> y <strong>KingdomOfGAG</strong> han sido nombrados jueces del reino. Se encargarán de las salas de Dragon Mound y Wellspring. También se ocupan de todos los asuntos que no pueden resolverse entre diplomáticos. Sus decisiones deben ser respetadas y seguidas siempre. Las violaciones de esto conducirán a malos títulos o estado de proscrito.", // Zvýraznené mená
            section5_title_no_number: "Impuestos",
            rule5_1: "Se espera que todos los jugadores paguen todos sus impuestos de manera oportuna.",
            rule5_2: "Los valores que se enumeran a continuación son los lingotes (ingots) máximos permitidos en su ciudad (sobre la producción de 1 día). Si excede estos números, cualquiera puede atacar su ciudad para cobrar los impuestos. Si el atacante no logra obtener suficientes lingotes (el juego puede mostrar un valor desactualizado, lingotes enviados antes del ataque...) el ataque se considerará ilegal.",
            tax_header_level: "Niveles de ciudad",
            tax_header_ingots: "Máximo de lingotes permitidos en la ciudad",
            tax_range_1: "01 - 24", // Pridané medzery
            tax_ingots_1: "10000 Lingotes", // Zmenené písmeno
            tax_range_2: "25 - 34", // Pridané medzery
            tax_ingots_2: "30000 Lingotes", // Zmenené písmeno
            tax_range_3: "35 - 39", // Pridané medzery
            tax_ingots_3: "40000 Lingotes", // Zmenené písmeno
            tax_range_4: "40 - 45", // Pridané medzery
            tax_ingots_4: "50000 Lingotes", // Zmenené písmeno
            chats_title_no_number: "Todos los chats oficiales del reino",
            chat_roe: "K105-ROE",
            chat_dm: "K105/DM",
            chat_ws: "K105/WS",
         },
         'fr': { // French (Machine Translated)
            page_title: "K105 ROE - Total Battle",
            lang_select_label: "Langue:",
            dark_mode_toggle: "Basculer en Mode Sombre",
            translation_warning: "Cette version est traduite automatiquement. La version anglaise est la version officiellement valide.",
            main_title: "Total Battle – Royaume K105 – Règles d'Engagement (ROE)",
            effective_date: "ROE EFFECTIVES LE 2025-04-08",
            section1_title_no_number: "Royaume et Clans",
            rule1_1: "Soyez toujours respectueux dans les chats et les messages privés (MP) avec les autres joueurs. Les commentaires vulgaires, offensants et racistes ne seront pas tolérés.",
            rule1_2: "Tous les joueurs doivent suivre les Règles d'Engagement (ROE), telles qu'énoncées ici.",
            rule1_3: "Tous les clans doivent être \"Conformes aux ROE\" (ROE Compliant) et l'indiquer sur la page de leur clan, à la première ligne : \"Nous suivons K105-ROE https://svk-peto.github.io/TB/\".",
            rule1_4: "Tous les clans doivent avoir leur diplomate listé sur la page de leur clan, sinon le diplomate est le chef de clan.",
            rule1_5: "Tous les joueurs des clans conformes aux ROE sont protégés par ces ROE.",
            rule1_6: "Ces ROE ne protègent que les joueurs des clans humains qui sont conformes aux ROE.",
            rule1_7: "Tous les joueurs ayant un niveau de héros de 10 ou moins sont protégés quel que soit le statut du clan.",
            rule1_8: "Les ROE sont un \"document vivant\" et seront mises à jour au besoin par le palais.",
            section2_title_no_number: "Territoire du Clan et Ressources",
            rule2_1: "Toutes les ressources sur le territoire d'un clan appartiennent exclusively à ce clan. Cela inclut les Monticules de Dragon (DM) et les Puits de Source (WS). Un clan peut défendre ses ressources comme il l'entend.",
            rule2_2: "Les Monstres, Citadelles, Cryptes et Arènes appartiennent au royaume, quel que soit leur emplacement.",
            rule2_3: "Les mines construites par les joueurs appartiennent exclusively à ce joueur. En cas de litige, la propriété doit être prouvée par : capture d'écran (\"Créé par...\"), à l'intérieur ou touchant le territoire du clan.",
            rule2_4: "Les mines générées par le jeu appartiennent au joueur qui les occupe, tant qu'il les occupe. Il n'y a pas d'enregistrement, sauf pour les DM et WS.",
            rule2_5: "Tous les Monticules de Dragon (DM), sauf ceux situés sur le territoire du clan, doivent être enregistrés dans K105/DM et les Puits de Source (WS), sauf ceux situés sur le territoire du clan, doivent être enregistrés dans K105/WS.",
            rule2_6: "Le premier joueur à enregistrer un DM ou un WS en devient propriétaire et doit l'occuper dans les 10 minutes sous peine d'en perdre la propriété.",
            rule2_7: "Vous ne pouvez occuper qu'1 DM et 1 WS à la fois et ne pouvez occuper que 2 de chaque type d'une réinitialisation à l'autre.",
            rule2_8: "Les DM ou WS occupés illégalement peuvent être correctement enregistrés et attaqués par n'importe qui à tout moment.",
            section3_title_no_number: "Attaques et reconnaissance",
            rule3_1: "Ce royaume est toujours en paix (y compris COT).",
            rule3_2: "Les joueurs sont autorisés à convenir d'échanger des attaques comme bon leur semble, à tout moment.",
            rule3_3: "Pas d'attaque ni de reconnaissance des bâtiments de clan (forts, capitales, etc.) dans aucun royaume.",
            section4_title_no_number: "Cour",
            rule4_1: "Toutes les attaques et reconnaissances illégales peuvent être soit compensées, soit faire l'objet de représailles, mais pas les deux.",
            rule4_2: "Si vous demandez une compensation, suivez la procédure de la section 5. Les règles de compensation se trouvent à la section 5), si vous cherchez des représailles, voir la section 4.",
            rule4_2_edited_note: "(Note : Le texte original faisait référence à 5.3, voulait probablement dire 5. Les règles de compensation se trouvent à la section 5)",
            rule4_3: "Tous les joueurs sont censés régler la compensation entre eux dans les 24 heures. Si le problème ne peut être résolu, le diplomate du clan prend le relais et s'il n'est toujours pas résolu dans les 24 heures suivantes, présentez le problème au juge.",
            rule4_4: "Toutes les demandes de compensation pour une attaque illégale doivent être soumises dans les 72 heures, sinon aucune demande ne sera honorée.",
            rule4_5: "Le non-paiement de la compensation ordonnée par le tribunal entraînera le statut de hors-la-loi (outlaw status) jusqu'à ce qu'elle soit payée.",
            rule4_6: "Toutes les décisions de la Cour sont définitives.",
            rule4_7: "Les joueurs <strong>Gandafes</strong> et <strong>KingdomOfGAG</strong> ont été nommés juges pour le royaume. Ils s'occuperont des salles Dragon Mound et Wellspring. Ils s'occupent également de tous les problèmes qui ne peuvent être résolus entre diplomates. Leurs décisions doivent être respectées et suivies en tout temps. Les violations de cela entraîneront de mauvais titres ou le statut de hors-la-loi.", // Zvýraznené mená
            section5_title_no_number: "Taxes",
            rule5_1: "Tous les joueurs sont censés payer toutes leurs taxes en temps voulu.",
            rule5_2: "Les valeurs indiquées ci-dessous correspondent au nombre maximum de lingots (ingots) autorisés dans votre ville (au-delà de la production d'une journée). Si vous dépassez ces chiffres, n'importe qui peut attaquer votre ville pour collecter les taxes. Si l'attaquant ne parvient pas à obtenir suffisamment de lingots (le jeu peut afficher une valeur obsolète, lingots envoyés avant l'attaque...), l'attaque sera considérée comme illégale.",
            tax_header_level: "Niveaux de ville",
            tax_header_ingots: "Lingots maximum autorisés dans la ville",
            tax_range_1: "01 - 24", // Pridané medzery
            tax_ingots_1: "10000 Lingots", // Zmenené písmeno
            tax_range_2: "25 - 34", // Pridané medzery
            tax_ingots_2: "30000 Lingots", // Zmenené písmeno
            tax_range_3: "35 - 39", // Pridané medzery
            tax_ingots_3: "40000 Lingots", // Zmenené písmeno
            tax_range_4: "40 - 45", // Pridané medzery
            tax_ingots_4: "50000 Lingots", // Zmenené písmeno
            chats_title_no_number: "Tous les chats officiels du royaume",
            chat_roe: "K105-ROE",
            chat_dm: "K105/DM",
            chat_ws: "K105/WS",
         },
         'pt': { // Portuguese (Machine Translated)
            page_title: "K105 ROE - Total Battle",
            lang_select_label: "Idioma:",
            dark_mode_toggle: "Alternar Modo Escuro",
            translation_warning: "Esta versão é traduzida automaticamente. A versão em inglês é a oficialmente válida.",
            main_title: "Total Battle – Reino K105 – Regras de Engajamento (ROE)",
            effective_date: "ROE EFETIVAS A PARTIR DE 2025-04-08",
            section1_title_no_number: "Reino e Clãs",
            rule1_1: "Seja sempre respeitoso nos chats e PMs com outros jogadores. Comentários vulgares, ofensivos e racistas não serão tolerados.",
            rule1_2: "Todos os jogadores devem seguir as Regras de Engajamento (ROE), conforme estabelecido aqui.",
            rule1_3: "Todos os clãs devem ser \"Compatíveis com ROE\" (ROE Compliant) e indicar isso na página do clã, na primeira linha: \"Seguimos K105-ROE https://svk-peto.github.io/TB/\".",
            rule1_4: "Todos os clãs devem ter seu diplomata listado na página do clã; caso contrário, o diplomata é o líder do clã.",
            rule1_5: "Todos os jogadores em clãs compatíveis com ROE são protegidos por estas ROE.",
            rule1_6: "Estas ROE protegem apenas jogadores em clãs humanos que são compatíveis com ROE.",
            rule1_7: "Todos os jogadores com nível de herói 10 ou inferior estão protegidos, independentemente do status do clã.",
            rule1_8: "As ROE são um \"documento vivo\" e serão atualizadas conforme necessário, pelo palácio.",
            section2_title_no_number: "Território do Clã e Recursos",
            rule2_1: "Todos os recursos no território de um clã pertencem exclusivamente a esse clã. Isso inclui Dragon Mounds (DM) e Well Springs (WS). Um clã pode defender seus recursos como achar melhor.",
            rule2_2: "Monstros, Cidadelas, Criptas e Arenas pertencem ao reino, independentemente da localização.",
            rule2_3: "Minas construídas por jogadores pertencem exclusivamente a esse jogador. Em caso de disputa, a propriedade deve ser comprovada por: captura de tela (\"Criado por...\"), dentro ou tocando o território do clã.",
            rule2_4: "Minas geradas pelo jogo pertencem ao jogador que as ocupa, enquanto as ocupar. Não há registro, exceto para DM e WS.",
            rule2_5: "Todos os Dragon Mounds (DM), exceto aqueles dentro do território do clã, devem ser registrados em K105/DM e Well Springs (WS), exceto aqueles dentro do território do clã, devem ser registrados em K105/WS.",
            rule2_6: "O primeiro jogador a registrar DM ou WS o possui e deve ocupá-lo em 10 minutos ou perde a propriedade.",
            rule2_7: "Você só pode ocupar 1 DM e 1 WS por vez e só pode ocupar 2 de cada de reset a reset.",
            rule2_8: "DM ou WS ocupados ilegalmente podem ser devidamente registrados e atacados por qualquer pessoa a qualquer momento.",
            section3_title_no_number: "Ataques e exploração",
            rule3_1: "Este reino está sempre em paz (incluindo COT).",
            rule3_2: "Os jogadores podem concordar em trocar ataques como acharem melhor, a qualquer momento.",
            rule3_3: "Não atacar ou explorar edifícios de clãs (fortes, capitais, etc.) em nenhum reino.",
            section4_title_no_number: "Tribunal",
            rule4_1: "Todos os ataques e explorações ilegais podem ser compensados ou retaliados, não ambos.",
            rule4_2: "Se buscar compensação, siga o procedimento na seção 5. As regras de compensação estão na seção 5), se buscar retaliação, veja a seção 4.",
            rule4_2_edited_note: "(Nota: O texto original fazia referência a 5.3, provavelmente significava 5. As regras de compensação estão na seção 5)",
            rule4_3: "Espera-se que todos os jogadores resolvam a compensação entre si dentro de 24 horas. Se o problema não puder ser resolvido, o diplomata do clã assume e, se ainda não for resolvido nas próximas 24 horas, apresente o problema ao juiz.",
            rule4_4: "Todas as reivindicações de compensação por um ataque ilegal devem ser enviadas dentro de 72 horas ou nenhuma reivindicação será honrada.",
            rule4_5: "Não pagar a compensação ordenada pelo tribunal resultará em status de fora da lei (outlaw status) até que seja paga.",
            rule4_6: "Todas as decisões do Tribunal são finais.",
            rule4_7: "Os jogadores <strong>Gandafes</strong> e <strong>KingdomOfGAG</strong> foram nomeados juízes do reino. Eles cuidarão das salas Dragon Mound e Wellspring. Eles também cuidam de todas as questões que não podem ser resolvidas entre diplomatas. Suas decisões devem ser respeitadas e seguidas sempre. Violações disso levarão a títulos ruins ou status de fora da lei.", // Zvýraznené mená
            section5_title_no_number: "Impostos",
            rule5_1: "Espera-se que todos os jogadores paguem todos os seus impostos em tempo hábil.",
            rule5_2: "Os valores listados abaixo são os lingotes (ingots) máximos permitidos em sua cidade (acima da produção de 1 dia). Se você exceder esses números, qualquer pessoa pode atacar sua cidade para coletar os impostos. Se o atacante falhar em obter lingotes suficientes (o jogo pode mostrar valor desatualizado, lingotes enviados antes do ataque...), o ataque será considerado ilegal.",
            tax_header_level: "Níveis da cidade",
            tax_header_ingots: "Lingotes máximos permitidos na cidade",
            tax_range_1: "01 - 24", // Pridané medzery
            tax_ingots_1: "10000 Lingotes", // Zmenené písmeno
            tax_range_2: "25 - 34", // Pridané medzery
            tax_ingots_2: "30000 Lingotes", // Zmenené písmeno
            tax_range_3: "35 - 39", // Pridané medzery
            tax_ingots_3: "40000 Lingotes", // Zmenené písmeno
            tax_range_4: "40 - 45", // Pridané medzery
            tax_ingots_4: "50000 Lingotes", // Zmenené písmeno
            chats_title_no_number: "Todos os chats oficiais do reino",
            chat_roe: "K105-ROE",
            chat_dm: "K105/DM",
            chat_ws: "K105/WS",
         },
         'ru': { // Russian (Machine Translated)
            page_title: "K105 ROE - Total Battle",
            lang_select_label: "Язык:",
            dark_mode_toggle: "Переключить темный режим",
            translation_warning: "Эта версия переведена машинным способом. Официально действительной является английская версия.",
            main_title: "Total Battle – Королевство K105 – Правила ведения боя (ROE)",
            effective_date: "ROE ДЕЙСТВУЕТ С 2025-04-08",
            section1_title_no_number: "Королевство и Кланы",
            rule1_1: "Всегда будьте уважительны в чатах и личных сообщениях (ЛС) с другими игроками. Вульгарные, оскорбительные и расистские комментарии недопустимы.",
            rule1_2: "Все игроки должны следовать Правилам ведения боя (ROE), изложенным здесь.",
            rule1_3: "Все кланы должны соответствовать ROE («ROE Compliant») и указать это на странице своего клана в первой строке: «Мы следуем K105-ROE https://svk-peto.github.io/TB/».",
            rule1_4: "Все кланы должны указать своего дипломата на странице клана, в противном случае дипломатом является лидер клана.",
            rule1_5: "Все игроки в кланах, соответствующих ROE, защищены этими ROE.",
            rule1_6: "Эти ROE защищают только игроков в человеческих кланах, которые соответствуют ROE.",
            rule1_7: "Все игроки с уровнем героя 10 и ниже защищены независимо от статуса клана.",
            rule1_8: "ROE — это «живой документ», который будет обновляться по мере необходимости дворцом.",
            section2_title_no_number: "Территория клана и ресурсы",
            rule2_1: "Все ресурсы на территории клана принадлежат исключительно этому клану. Сюда входят Драконьи Курганы (DM) и Источники (WS). Клан может защищать свои ресурсы по своему усмотрению.",
            rule2_2: "Монстры, Цитадели, Крипты и Арены принадлежат королевству, независимо от местоположения.",
            rule2_3: "Шахты, построенные игроками, принадлежат исключительно этому игроку. В случае спора право собственности должно быть подтверждено: скриншотом («Создано...»), внутри или касаясь территории клана.",
            rule2_4: "Шахты, сгенерированные игрой, принадлежат игроку, который их занимает, до тех пор, пока он их занимает. Регистрация не требуется, кроме DM и WS.",
            rule2_5: "Все Драконьи Курганы (DM), кроме тех, что находятся на территории клана, должны быть зарегистрированы в K105/DM, а Источники (WS), кроме тех, что находятся на территории клана, должны быть зарегистрированы в K105/WS.",
            rule2_6: "Первый игрок, зарегистрировавший DM или WS, владеет им и должен занять его в течение 10 минут, иначе теряет право собственности.",
            rule2_7: "Вы можете занимать только 1 DM и 1 WS одновременно и можете занимать только по 2 каждого типа от сброса до сброса.",
            rule2_8: "Незаконно занятые DM или WS могут быть должным образом зарегистрированы и атакованы кем угодно в любое время.",
            section3_title_no_number: "Атаки и разведка",
            rule3_1: "В этом королевстве всегда мир (включая COT).",
            rule3_2: "Игроки могут договариваться об обмене атаками по своему усмотрению в любое время.",
            rule3_3: "Запрещено атаковать и разведывать клановые здания (форты, столицы и т. д.) в любом королевстве.",
            section4_title_no_number: "Суд",
            rule4_1: "Все незаконные атаки и разведка могут быть либо компенсированы, либо отмщены, но не то и другое вместе.",
            rule4_2: "Если вы ищете компенсацию, следуйте процедуре в разделе 5. Правила компенсации находятся в разделе 5), если вы ищете возмездия, см. раздел 4.",
            rule4_2_edited_note: "(Примечание: В оригинальном тексте была ссылка на 5.3, вероятно, имелся в виду раздел 5. Правила компенсации находятся в разделе 5)",
            rule4_3: "Ожидается, что все игроки урегулируют компенсацию между собой в течение 24 часов. Если проблема не может быть решена, ее берет на себя дипломат клана, и если она все еще не решена в течение следующих 24 часов, представьте проблему судье.",
            rule4_4: "Все претензии на компенсацию за незаконную атаку должны быть поданы в течение 72 часов, иначе претензия не будет удовлетворена.",
            rule4_5: "Неуплата компенсации, назначенной судом, приведет к статусу преступника (outlaw status) до тех пор, пока она не будет выплачена.",
            rule4_6: "Все решения Суда являются окончательными.",
            rule4_7: "Игроки <strong>Gandafes</strong> и <strong>KingdomOfGAG</strong> назначены судьями королевства. Они будут заниматься комнатами Драконьих Курганов и Источников. Они также занимаются всеми вопросами, которые не могут быть решены между дипломатами. Их решения должны всегда уважаться и выполняться. Нарушения этого приведут к плохим титулам или статусу преступника.", // Zvýraznené mená
            section5_title_no_number: "Налоги",
            rule5_1: "Ожидается, что все игроки будут своевременно платить все свои налоги.",
            rule5_2: "Указанные ниже значения представляют собой максимально допустимое количество слитков (ingots) в вашем городе (сверх 1-дневного производства). Если вы превысите эти цифры, любой может атаковать ваш город, чтобы собрать налоги. Если атакующий не сможет получить достаточно слитков (игра может показывать устаревшее значение, слитки отправлены до атаки...), атака будет считаться незаконной.",
            tax_header_level: "Уровни города",
            tax_header_ingots: "Максимально допустимое количество слитков в городе",
            tax_range_1: "01 - 24", // Pridané medzery
            tax_ingots_1: "10000 слитков", // Zmenené písmeno (ingots -> слитков)
            tax_range_2: "25 - 34", // Pridané medzery
            tax_ingots_2: "30000 слитков", // Zmenené písmeno
            tax_range_3: "35 - 39", // Pridané medzery
            tax_ingots_3: "40000 слитков", // Zmenené písmeno
            tax_range_4: "40 - 45", // Pridané medzery
            tax_ingots_4: "50000 слитков", // Zmenené písmeno
            chats_title_no_number: "Все официальные чаты королевства",
            chat_roe: "K105-ROE",
            chat_dm: "K105/DM",
            chat_ws: "K105/WS",
         },
         'zh': { // Chinese (Simplified) (Machine Translated)
            page_title: "K105 ROE - Total Battle",
            lang_select_label: "语言:",
            dark_mode_toggle: "切换深色模式",
            translation_warning: "此版本为机器翻译。 英文版本为官方有效版本。",
            main_title: "Total Battle – K105 王国 – 交战规则 (ROE)",
            effective_date: "ROE 生效日期 2025-04-08",
            section1_title_no_number: "王国与部落",
            rule1_1: "在与其他玩家的聊天和私信 (PM) 中始终保持尊重。 不容忍粗俗、冒犯和种族主义言论。",
            rule1_2: "所有玩家都必须遵守此处规定的交战规则 (ROE)。",
            rule1_3: "所有部落都必须“符合 ROE” (ROE Compliant)，并在其部落页面的第一行说明：“我们遵循 K105-ROE https://svk-peto.github.io/TB/”。",
            rule1_4: "所有部落都必须在其部落页面上列出外交官，否则外交官即为部落首领。",
            rule1_5: "所有符合 ROE 的部落中的玩家均受此 ROE 保护。",
            rule1_6: "此 ROE 仅保护符合 ROE 的人类部落中的玩家。",
            rule1_7: "英雄等级为 10 级及以下的所有玩家，无论部落状态如何，均受到保护。",
            rule1_8: "ROE 是一份“活文件”，将根据需要由王宫更新。",
            section2_title_no_number: "部落领地与资源",
            rule2_1: "部落领地内的所有资源专属于该部落。 这包括龙丘 (DM) 和泉水 (WS)。 部落可以自行决定如何保卫其资源。",
            rule2_2: "怪物、城堡、地穴和竞技场属于王国，无论其位置如何。",
            rule2_3: "玩家建造的矿山专属于该玩家。 如有争议，必须通过以下方式证明所有权：截图（“创建者...”），位于部落领地内部或接触部落领地。",
            rule2_4: "游戏生成的矿山属于占领它的玩家，只要他们占领着它。 除 DM 和 WS 外，没有登记。",
            rule2_5: "所有龙丘 (DM)（部落领地内的除外）必须在 K105/DM 中登记，所有泉水 (WS)（部落领地内的除外）必须在 K105/WS 中登记。",
            rule2_6: "第一个登记 DM 或 WS 的玩家拥有它，并且必须在 10 分钟内占领，否则失去所有权。",
            rule2_7: "您一次只能占领 1 个 DM 和 1 个 WS，并且从重置到重置只能占领每种类型的 2 个。",
            rule2_8: "非法占领的 DM 或 WS 可以由任何人在任何时候进行适当登记和攻击。",
            section3_title_no_number: "攻击与侦察",
            rule3_1: "这个王国始终处于和平状态（包括 COT）。",
            rule3_2: "玩家可以随时自行决定同意交换攻击。",
            rule3_3: "禁止在任何王国攻击和侦察部落建筑（堡垒、首都等）。",
            section4_title_no_number: "法庭",
            rule4_1: "所有非法攻击和侦察可以获得补偿或进行报复，但不能两者兼得。",
            rule4_2: "如果寻求补偿，请遵循第 5 节中的程序。补偿规则在第 5 节中），如果寻求报复，请参见第 4 节。",
            rule4_2_edited_note: "（注意：原始文本引用了 5.3，可能意指 5。补偿规则在第 5 节）",
            rule4_3: "所有玩家应在 24 小时内自行处理补偿事宜。 如果问题无法解决，则由部落外交官接管，如果在接下来的 24 小时内仍未解决，则将问题提交给法官。",
            rule4_4: "所有非法攻击的补偿索赔必须在 72 小时内提交，否则索赔将不予受理。",
            rule4_5: "不支付法院命令的补偿将导致被列为不法之徒 (outlaw status)，直到付清为止。",
            rule4_6: "法庭的所有判决均为最终判决。",
            rule4_7: "玩家 <strong>Gandafes</strong> 和 <strong>KingdomOfGAG</strong> 已被任命为王国的法官。 他们将负责龙丘和泉水房间。 他们还负责处理外交官之间无法解决的所有问题。 必须始终尊重并遵守他们的决定。 违反规定将导致不良头衔或不法之徒身份。", // Zvýraznené mená
            section5_title_no_number: "税收",
            rule5_1: "所有玩家都应按时缴纳所有税款。",
            rule5_2: "下面列出的值是您城市中允许的最大铸锭 (ingots) 数量（超过 1 天的产量）。 如果您超过这些数字，任何人都可以攻击您的城市以征收税款。 如果攻击者未能获得足够的铸锭（游戏可能显示过时的值，攻击前发送的铸锭...），攻击将被视为非法。",
            tax_header_level: "城市等级",
            tax_header_ingots: "城市中允许的最大铸锭数量",
            tax_range_1: "01 - 24", // Pridané medzery
            tax_ingots_1: "10000 铸锭", // Ponechané (bez veľkého/malého písmena)
            tax_range_2: "25 - 34", // Pridané medzery
            tax_ingots_2: "30000 铸锭", // Ponechané
            tax_range_3: "35 - 39", // Pridané medzery
            tax_ingots_3: "40000 铸锭", // Ponechané
            tax_range_4: "40 - 45", // Pridané medzery
            tax_ingots_4: "50000 铸锭", // Ponechané
            chats_title_no_number: "所有王国官方聊天室",
            chat_roe: "K105-ROE",
            chat_dm: "K105/DM",
            chat_ws: "K105/WS",
         },
         'hi': { // Hindi (Machine Translated)
            page_title: "K105 ROE - Total Battle",
            lang_select_label: "भाषा:",
            dark_mode_toggle: "डार्क मोड टॉगल करें",
            translation_warning: "यह संस्करण मशीन द्वारा अनुवादित है। अंग्रेजी संस्करण आधिकारिक रूप से मान्य है।",
            main_title: "Total Battle – किंगडम K105 – सगाई के नियम (ROE)",
            effective_date: "ROE प्रभावी 2025-04-08",
            section1_title_no_number: "किंगडम और क्लैन",
            rule1_1: "अन्य खिलाड़ियों के साथ चैट और पीएम में हमेशा सम्मानजनक रहें। अश्लील, अपमानजनक और नस्लवादी टिप्पणियां बर्दाश्त नहीं की जाएंगी।",
            rule1_2: "सभी खिलाड़ियों को यहां बताए गए सगाई के नियमों (ROE) का पालन करना है।",
            rule1_3: "सभी क्लैन को \"ROE Compliant\" होना चाहिए और इसे अपनी क्लैन पेज पर पहली पंक्ति में बताना चाहिए, \"हम K105-ROE https://svk-peto.github.io/TB/ का पालन करते हैं\"।",
            rule1_4: "सभी क्लैन को अपने क्लैन पेज पर अपने राजनयिक को सूचीबद्ध करना होगा, अन्यथा राजनयिक क्लैन लीडर होता है।",
            rule1_5: "ROE कंप्लेंट क्लैन के सभी खिलाड़ी इस ROE द्वारा सुरक्षित हैं।",
            rule1_6: "यह ROE केवल उन मानव क्लैन के खिलाड़ियों की सुरक्षा करता है जो ROE कंप्लेंट हैं।",
            rule1_7: "हीरो लेवल 10 और उससे नीचे के सभी खिलाड़ी क्लैन की स्थिति के बावजूद सुरक्षित हैं।",
            rule1_8: "ROE एक \"जीवित दस्तावेज़\" है और महल द्वारा आवश्यकतानुसार अद्यतन किया जाएगा।",
            section2_title_no_number: "क्लैन क्षेत्र और संसाधन",
            rule2_1: "एक क्लैन के क्षेत्र में सभी संसाधन, विशेष रूप से उसी क्लैन के हैं। इसमें ड्रैगन माउंड्स (DM) और वेल स्प्रिंग्स (WS) शामिल हैं। एक क्लैन अपने संसाधनों की रक्षा कर सकता है, जैसा वे उचित समझें।",
            rule2_2: "मॉन्स्टर्स, सिटाडेल्स, क्रिप्ट्स और एरेनास किंगडम के हैं, स्थान की परवाह किए बिना।",
            rule2_3: "खिलाड़ी द्वारा निर्मित खदानें विशेष रूप से उस खिलाड़ी की हैं। विवाद के मामले में स्वामित्व को साबित किया जाना चाहिए: स्क्रीनशॉट (\"द्वारा बनाया गया...\"), क्लैन के क्षेत्र के अंदर या छूता हुआ।",
            rule2_4: "गेम द्वारा उत्पन्न खदानें उस खिलाड़ी की हैं जो इसे कब्जा करता है, जब तक वे इसे कब्जा करते हैं। DM और WS को छोड़कर कोई पंजीकरण नहीं है।",
            rule2_5: "सभी ड्रैगन माउंड्स (DM), क्लैन क्षेत्र के भीतर वालों को छोड़कर, K105/DM में पंजीकृत होना चाहिए और वेल स्प्रिंग्स (WS), क्लैन क्षेत्र के भीतर वालों को छोड़कर, K105/WS पर पंजीकृत होना चाहिए।",
            rule2_6: "DM या WS को पंजीकृत करने वाला पहला खिलाड़ी इसका मालिक होता है और इसे 10 मिनट के भीतर कब्जा करना चाहिए अन्यथा स्वामित्व खो देता है।",
            rule2_7: "आप एक समय में केवल 1 DM और 1 WS पर कब्जा कर सकते हैं और रीसेट से रीसेट तक प्रत्येक में से केवल 2 पर कब्जा कर सकते हैं।",
            rule2_8: "अवैध रूप से कब्जा किए गए DM या WS को किसी भी समय किसी के द्वारा ठीक से पंजीकृत और हमला किया जा सकता है।",
            section3_title_no_number: "हमले और स्काउटिंग",
            rule3_1: "यह किंगडम हमेशा शांति में है (COT सहित)।",
            rule3_2: "खिलाड़ियों को किसी भी समय, जैसा वे उचित समझें, हमलों का आदान-प्रदान करने के लिए सहमत होने की अनुमति है।",
            rule3_3: "किसी भी किंगडम में क्लैन भवनों (किलों, राजधानियों, आदि) पर कोई हमला और स्काउटिंग नहीं।",
            section4_title_no_number: "न्यायालय",
            rule4_1: "सभी अवैध हमलों और स्काउटिंग को या तो मुआवजा दिया जा सकता है या बदला लिया जा सकता है, दोनों नहीं।",
            rule4_2: "यदि मुआवजा मांग रहे हैं, तो धारा 5 में प्रक्रिया का पालन करें। मुआवजे के नियम धारा 5 में हैं), यदि प्रतिशोध चाहते हैं तो धारा 4 देखें।",
            rule4_2_edited_note: "(नोट: मूल पाठ में 5.3 का संदर्भ दिया गया था, संभवतः इसका मतलब 5 था। मुआवजे के नियम धारा 5 में हैं)",
            rule4_3: "सभी खिलाड़ियों से अपेक्षा की जाती है कि वे 24 घंटे के भीतर आपस में मुआवजे का निपटारा करें। यदि मुद्दा हल नहीं किया जा सकता है, तो क्लैन राजनयिक कार्यभार संभालता है और यदि अगले 24 घंटों के भीतर यह अभी भी हल नहीं होता है, तो न्यायाधीश के समक्ष मुद्दा प्रस्तुत करें।",
            rule4_4: "एक अवैध हमले के लिए सभी मुआवजे के दावों को 72 घंटों के भीतर प्रस्तुत किया जाना चाहिए अन्यथा किसी भी दावे का सम्मान नहीं किया जाएगा।",
            rule4_5: "अदालत द्वारा आदेशित मुआवजे का भुगतान न करने पर गैरकानूनी स्थिति (outlaw status) होगी जब तक कि इसका भुगतान नहीं किया जाता।",
            rule4_6: "न्यायालय के सभी निर्णय अंतिम हैं।",
            rule4_7: "खिलाड़ी <strong>Gandafes</strong> और <strong>KingdomOfGAG</strong> को किंगडम के लिए न्यायाधीश नियुक्त किया गया है। वे ड्रैगन माउंड और वेलस्प्रिंग कमरों का ध्यान रखेंगे। वे उन सभी मुद्दों का भी ध्यान रखते हैं जिन्हें राजनयिकों के बीच हल नहीं किया जा सकता है। उनके निर्णयों का हमेशा सम्मान और पालन किया जाना चाहिए। इसका उल्लंघन करने पर खराब खिताब या गैरकानूनी स्थिति होगी।", // Zvýraznené mená
            section5_title_no_number: "कर",
            rule5_1: "सभी खिलाड़ियों से अपेक्षा की जाती है कि वे अपने सभी करों का समय पर भुगतान करें।",
            rule5_2: "नीचे सूचीबद्ध मान आपके शहर में अनुमत अधिकतम सिल्लियां (ingots) हैं (1-दिन के उत्पादन से अधिक)। यदि आप इन नंबरों से अधिक हैं, तो कोई भी कर एकत्र करने के लिए आपके शहर पर हमला कर सकता है। यदि हमलावर पर्याप्त सिल्लियां प्राप्त करने में विफल रहता है (गेम पुराना मान दिखा सकता है, हमले से पहले भेजी गई सिल्लियां...) तो हमला अवैध माना जाएगा।",
            tax_header_level: "शहर के स्तर",
            tax_header_ingots: "शहर में अनुमत अधिकतम सिल्लियां",
            tax_range_1: "01 - 24", // Pridané medzery
            tax_ingots_1: "10000 सिल्लियां", // Ponechané (bez veľkého/malého písmena)
            tax_range_2: "25 - 34", // Pridané medzery
            tax_ingots_2: "30000 सिल्लियां", // Ponechané
            tax_range_3: "35 - 39", // Pridané medzery
            tax_ingots_3: "40000 सिल्लियां", // Ponechané
            tax_range_4: "40 - 45", // Pridané medzery
            tax_ingots_4: "50000 सिल्लियां", // Ponechané
            chats_title_no_number: "सभी आधिकारिक किंगडम चैट",
            chat_roe: "K105-ROE",
            chat_dm: "K105/DM",
            chat_ws: "K105/WS",
         }
    };

    // --- Funkcie ---

    // Funkcia na nastavenie jazyka
    function setLanguage(lang) {
        const langData = translations[lang] || translations['en'];

        translatableElements.forEach(el => {
            const key = el.getAttribute('data-translate');
            const translatedText = langData[key] !== undefined ? langData[key] : (translations['en'][key] !== undefined ? translations['en'][key] : `[${key}]`);

            if (el.tagName === 'TITLE') {
                el.textContent = translatedText;
            } else {
                 const ruleNumberSpan = el.querySelector('span.rule-number');
                 if (ruleNumberSpan) {
                     let currentTextNode = ruleNumberSpan.nextSibling;
                     while(currentTextNode && currentTextNode.nodeType !== Node.TEXT_NODE) {
                         currentTextNode = currentTextNode.nextSibling;
                     }
                     if(currentTextNode) {
                         currentTextNode.textContent = ' ' + translatedText;
                     } else {
                         el.appendChild(document.createTextNode(' ' + translatedText));
                     }
                     let nextNode = ruleNumberSpan.nextSibling?.nextSibling;
                      while(nextNode) {
                          if(nextNode.nodeType === Node.TEXT_NODE) {
                              let toRemove = nextNode;
                              nextNode = nextNode.nextSibling;
                              el.removeChild(toRemove);
                          } else {
                               // Ak narazíme na iný element (napr. <strong>), preskočíme ho
                               nextNode = nextNode.nextSibling;
                          }
                      }
                       // Špeciálna úprava pre pravidlo 4.7, aby sa HTML tagy v preklade aplikovali
                      if (key === 'rule4_7') {
                           el.innerHTML = ruleNumberSpan.outerHTML + ' ' + translatedText;
                      }

                 } else if (key === 'rule4_7') { // Aj pre pravidlo 4.7 bez čísla (ak by bolo mimo <ol>)
                      el.innerHTML = translatedText; // Aplikuj HTML tagy
                 }
                 else {
                      el.innerHTML = translatedText; // Pre ostatné elementy
                 }
            }

            // Nastavenie data-label pre mobilnú tabuľku
            if (el.tagName === 'TD') {
                let labelKey = '';
                if (key.startsWith('tax_range_')) labelKey = 'tax_header_level';
                else if (key.startsWith('tax_ingots_')) labelKey = 'tax_header_ingots';

                if (labelKey) {
                     const labelText = langData[labelKey] !== undefined ? langData[labelKey] : (translations['en'][labelKey] !== undefined ? translations['en'][labelKey] : `[${labelKey}]`);
                     el.setAttribute('data-label', labelText + ': ');
                 } else {
                     el.setAttribute('data-label', '');
                 }
            }
        });

        document.documentElement.lang = lang;

        if (lang === 'en') {
            disclaimer.style.display = 'none';
        } else {
            disclaimerText.innerHTML = langData.translation_warning || translations['en'].translation_warning;
            disclaimer.style.display = 'block';
        }

        localStorage.setItem('preferredLanguage', lang);
    }

    // Funkcia na prepnutie tmaveho rezimu
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
    }

    // --- Event Listeners ---
    langSwitch.addEventListener('change', (event) => {
        setLanguage(event.target.value);
    });
    darkModeToggle.addEventListener('click', toggleDarkMode);

    // --- Inicializacia ---
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        document.body.classList.add('dark-mode');
    }

    const savedLanguage = localStorage.getItem('preferredLanguage');
    const availableLangs = Object.keys(translations);
    const initialLang = (savedLanguage && availableLangs.includes(savedLanguage)) ? savedLanguage : 'en';
    langSwitch.value = initialLang;
    setLanguage(initialLang);

});