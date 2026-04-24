// Artwork Data
const artworks = [
    {
        title: "(Nie)zwyciężony",
        image: "(Nie)zwyciężony/(Nie)zwyciężony.png",
        description: "W tej kompozycji ukryte jest pytanie o naszą pamięć i empatię w świecie, który zbyt łatwo zapomina o sprawach najważniejszych. Czy w tej nieustannej walce z entropią i śmiercią, ostatecznie zwyciężamy, czy tylko kopiemy dołek, w który sami kiedyś wpadniemy?\n\nŻyjemy w zawieszeniu, w przestrzeni w której prędzej czy później każde światło zgaśnie. \"(Nie)zwyciężony\" to studium kruchości – lekarza, który może stać się ofiarą, i pacjenta, który ginie w chorobie. To hołd dla tych, którzy mimo bezradności i lęku, decydują się osłaniać płomień do samego końca."
    },
    {
        title: "Bicie Serca",
        image: "Bicie Serca/Bicie Serca.png",
        description: "Ta grafika to dowód na obecność. Bez tego pulsu każda inna forma komunikacji traci rację bytu. To fundament, na którym budujemy całą resztę naszej rzeczywistości. Najprostszy sygnał, że maszyna wciąż pracuje."
    },
    {
        title: "BRAF 1799",
        image: "BRAF 1799/BRAF 1799.png",
        description: "Nowotwór nie jest obcą siłą – to wewnętrzna awaria systemu. To historia o tym, jak precyzyjnie dostrojona maszyneria potrafi obrócić się przeciwko sobie przez jedną, mikroskopijną pomyłkę.\n\nKażdego roku nowotwory wypowiadają wojnę niezliczonym rzeszom ludzi – statystyka przestaje być tylko suchym zbiorem danych, a staje się zbiorowym doświadczeniem lęku i nadziei. Choć dysponujemy coraz potężniejszymi narzędziami do naprawy tego biologicznego błędu, wciąż stoimy w obliczu kruchości istnienia.\n\nJeśli nasze życie jest zapisanym w genach procesem, to czy potrafimy zaakceptować fakt, że jego największe zagrożenie nie przychodzi z zewnątrz, lecz jest nierozerwalnie wpisane w naszą własną naturę?"
    },
    {
        title: "Cremona",
        image: "Cremona/Cremona.png",
        description: "Gdy biologia przestaje być naszym przeznaczeniem, a staje się jedynie plastycznym surowcem – gliną w rękach cyfrowego demiurga – rodzi się fundamentalne pytanie: co ocaleje z rozpadającego się człowieka, gdy jego ciało i umysł zostaną poddane bezwzględnej optymalizacji?\n\nW tkance kompozycji pulsuje egzystencjalny lęk o przyszłość gatunku. W miarę jak technomedycyna zaciera ślady między materią organiczną, a syntetycznym zapisem, definicja człowieczeństwa ulega rozmyciu w cyfrowej mgle. Cremona to wizualny manifest lęku przed jutrem, w którym ludzka unikalność traci swój kształt. To studium świata, w którym stajemy się reliktami własnej cywilizacji, a nasza dusza zostaje ostatecznie rozpuszczona w bezkresnym oceanie danych."
    },
    {
        title: "Fibonacci 333",
        image: "Fibonacci 333/Fibonacci 333.png",
        description: "Dzieło stanowi wizualną medytację nad zasadą antropiczną – koncepcją, o której pisało tak wielu uczonych, sugerującą, że wszechświat wydaje się być niemalże precyzyjnie \"dostrojony\", by umożliwić nasze istnienie. W tym ujęciu rzeczywistość przestaje być dziełem przypadku, a staje się matematycznym cudem. Wykorzystany w kompozycji ciąg Fibonacciego to genetyczny odcisk palca natury. Jego \"boska proporcja\", obecna zarówno w galaktykach, jak i ludzkich tkankach, staje się impulsem do poszukiwania wyższego porządku.\n\nW tym układzie biologia nie jest błędem w obliczeniach, lecz ich kulminacją. To wizualny dowód na to, że nawet w skali mikro – wewnątrz komórki czy nici DNA – odbija się ta sama potężna architektura, która trzyma w ryzach gwiazdy. Jesteśmy splotem liczb, które nauczyły się czuć i pytać o własnego twórcę."
    },
    {
        title: "Leki",
        image: "Leki/Leki.png",
        description: "To, co na pierwszy rzut oka wydaje się abstrakcyjną kompozycją barw, w rzeczywistości jest przedziwną mapą substancji, które codziennie modyfikują biologię milionów ludzi. Jesteśmy przecież cywilizacją, która ból, lęk i chorobę nauczyła się przeliczać na miligramy i dawki. Dzięki temu znajdujemy ulgę w zapomnieniu, a dopóki lek działa – ocieramy się o pokusę nieskończoności.\n\nSpójrz na to zestawienie jeszcze raz i zastanów się: czy ten obraz czegoś Ci nie przypomina?"
    },
    {
        title: "Przysięga Hipokratesa",
        image: "Przysięga Hipokartesa/Przysięga Hipokratesa.png",
        description: "To spojrzenie wstecz na fundamenty, od których wszystko się zaczęło. Przysięga przypomina o czasach, gdy medycyna była czystą intuicją i prostym kodeksem honorowym. Zestawienie tego antycznego zapisu z nowoczesną formą graficzną pokazuje, jak ogromną drogę przeszliśmy – od ziół i modlitw do precyzyjnej inżynierii genetycznej i algorytmów.\n\nTo fascynacja postępem. Choć współczesna technologia bywa niebezpieczna i wymyka się nam z rąk, jest jednocześnie niesamowitym narzędziem, które daje lekarzowi niemal \"boskie\" możliwości. Dzieło celebruje ten moment: jesteśmy w miejscu, o którym Hipokrates nie mógł nawet śnić."
    },
    {
        title: "Pustka Pełna",
        image: "Pustka Pełna/Pustka Pełna.png",
        description: "\"Pustka Pełna\" to wizualizacja konceptu niemożliwego. W świecie rządzonym przez mechanikę kwantową absolutna nicość nie istnieje – nawet w najgłębszej próżni kosmicznej tętnią nieustanne fluktuacje energii, a cząstki wirtualne pojawiają się i znikają w ułamkach sekund. Wszechświat, w swojej najbardziej pierwotnej naturze, nie znosi próżni – jest nasycony potencjałem.\n\nDzieło stanowi próbę uchwycenia tego paradoksu. To artystyczny zapis zbliżania się do matematycznej nieskończoności – granicy, której przekroczenie jest fizycznie niemożliwe. Każda warstwa obrazu, każdy szum i każda \"pusta\" przestrzeń są w rzeczywistości wypełnione informacją, której nie da się wyeliminować. \"Pustka Pełna\" to studium stanu, który nigdy nie nadejdzie: idealnego zera, będącego w istocie punktem szczytowym nasycenia.\n\nCzy to właśnie nasz potencjał oddziela nas od absolutu?"
    }
];

let currentArtworkIndex = 0;

// Navigation - scroll smooth only
document.addEventListener('keydown', (e) => {
    if (document.getElementById('artworkModal').classList.contains('active')) {
        if (e.key === 'ArrowRight') nextArtwork();
        if (e.key === 'ArrowLeft') previousArtwork();
        if (e.key === 'Escape') closeArtwork();
    }
});

// Set current year
document.getElementById('year').textContent = new Date().getFullYear();


// Gallery Interactions
function openArtwork(element) {
    const title = element.querySelector('.artwork-info h3').textContent;
    const index = artworks.findIndex(a => a.title === title);
    if (index !== -1) {
        currentArtworkIndex = index;
        displayArtwork();
        document.getElementById('artworkModal').classList.add('active');
    }
}

function displayArtwork() {
    const artwork = artworks[currentArtworkIndex];
    document.getElementById('modalImage').src = artwork.image;
    document.getElementById('modalTitle').textContent = artwork.title;
    
    // Podziel opis na akapity i sformatuj je
    const descriptionEl = document.getElementById('modalDescription');
    const paragraphs = artwork.description.split('\n\n').filter(p => p.trim());
    descriptionEl.innerHTML = paragraphs.map(p => `<p>${p.trim()}</p>`).join('');
}

function closeArtwork() {
    document.getElementById('artworkModal').classList.remove('active');
}

function closeArtworkIfClickedOutside(event) {
    if (event.target === document.getElementById('artworkModal')) {
        closeArtwork();
    }
}

function nextArtwork() {
    currentArtworkIndex = (currentArtworkIndex + 1) % artworks.length;
    displayArtwork();
}

function previousArtwork() {
    currentArtworkIndex = (currentArtworkIndex - 1 + artworks.length) % artworks.length;
    displayArtwork();
}

// Set current year
document.getElementById('year').textContent = new Date().getFullYear();
