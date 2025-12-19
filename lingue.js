// --- CONFIGURAZIONE LINGUE E TESTI (CAPYBARA EDITION) ---
const texts = {
    it: {
        // --- SITO PRINCIPALE ---
        mainTitle: "🦫 Capy Arcade",
        subTitle: "Rilassati, fatti un bagno e gioca",
        sectionArcade: "Azione & Relax",
        sectionLogic: "Mente & Zen",
        
        // Card Testi (Tematizzati)
        gameMarioTitle: "Super Capy", gameMarioDesc: "Salta sui prati e raccogli arance!",
        game1Title: "Capy Run", game1Desc: "Corri libero nella natura!",
        game2Title: "Astro Capy", game2Desc: "Capibara nello spazio profondo.",
        game3Title: "Capy Memory", game3Desc: "Trova le coppie di amici.",
        game4Title: "Mistero Termale", game4Desc: "Risolvi il mistero della spa.",
        gameTetrisTitle: "Stacky-Bara", gameTetrisDesc: "Incastra i blocchi zen.",
        
        // Bottoni Sito
        playBtn: "🍊 Gioca Ora",
        footerText: "&copy; 2025 Capy Arcade. Stay Chill.",
        
        // Generici Desktop
        startMsgDesktop: "Premi SPAZIO o ⬆ per saltare",
        placeholderName: "Il tuo nome...",

        // --- AVVENTURA GRAFICA ---
        // (Ho mantenuto i testi originali per non rompere il gioco, ma cambiato titolo)
        chooseChar: "Scegli il tuo Capibara", enterName: "Nome del Capibara", startAdv: "Inizia",
        roomLiving: "Salotto", roomKitchen: "Cucina", roomGarden: "Giardino", roomLab: "Lab Segreto", roomAttic: "Soffitta",
        interactParams: "Premi SPAZIO per interagire",
        lockedDoor: "Chiusa.", lockedElec: "Serve corrente.",
        bookshelfHint: "Un libro strano... Click!",
        fridgeDesc: "Post-it sul latte: 'Codice: 1234'.",
        chestLocked: "Serve codice.", chestOpen: "Codice ok! Trovata CHIAVE.",
        shovelPick: "Hai preso la PALA.", dirtDesc: "Terra smossa...", dirtDig: "Trovata TESSERA!",
        fountainDesc: "Acqua termale calda. Che relax.", generatorOff: "Generatore spento.", generatorOn: "VROOOM! Luce!",
        pcDesc: "PC: 'Soffitta APERTA'.", finalChest: "TESORO TROVATO! Tante arance per tutti!",
        itemFound: "Oggetto preso!", nothing: "Niente qui.",
        sofaDesc: "Un divano morbidissimo.", tableDesc: "Briciole.",

        // --- IN-GAME ---
        score: "Punti: ", lives: "Vite: ", moves: "Mosse: ", time: "Tempo: ",
        gameOver: "GAME OVER", youWin: "VITTORIA!",
        startMsg: "Premi per Iniziare", restartMsg: "Rigioca", level: "Livello: "
    },
    en: {
        mainTitle: "🦫 Capy Arcade", subTitle: "Chill out and play",
        sectionArcade: "Action & Chill", sectionLogic: "Mind & Zen",
        
        gameMarioTitle: "Super Capy", gameMarioDesc: "Jump on fields, get oranges!",
        game1Title: "Capy Run", game1Desc: "Run wild in nature!",
        game2Title: "Astro Capy", game2Desc: "Capybaras in deep space.",
        game3Title: "Capy Memory", game3Desc: "Find the matching friends.",
        game4Title: "Hot Spring Mystery", game4Desc: "Solve the spa mystery.",
        gameTetrisTitle: "Stacky-Bara", gameTetrisDesc: "Stack blocks seamlessly.",
        
        playBtn: "🍊 Play Now", footerText: "&copy; 2025 Capy Arcade. Stay Chill.",
        startMsgDesktop: "Press SPACE or ⬆ to jump", placeholderName: "Your name...",

        // Adventure
        chooseChar: "Choose Capy", enterName: "Enter Name", startAdv: "Start",
        roomLiving: "Living Room", roomKitchen: "Kitchen", roomGarden: "Garden", roomLab: "Lab", roomAttic: "Attic",
        interactParams: "Press SPACE", lockedDoor: "Locked.", lockedElec: "No power.",
        bookshelfHint: "Odd book... Click!", fridgeDesc: "Note: 'Code 1234'.",
        chestLocked: "Need code.", chestOpen: "Code ok! Got KEY.",
        shovelPick: "Got SHOVEL.", dirtDesc: "Dirt...", dirtDig: "Got KEYCARD!",
        fountainDesc: "Hot spring water. Nice.", generatorOff: "Gen is off.", generatorOn: "Power ON!",
        pcDesc: "PC: 'Attic OPEN'.", finalChest: "TREASURE! Oranges for everyone!",
        itemFound: "Item get!", nothing: "Nothing.", sofaDesc: "Comfy sofa.", tableDesc: "Crumbs.",

        score: "Score: ", lives: "Lives: ", moves: "Moves: ", time: "Time: ",
        gameOver: "GAME OVER", youWin: "YOU WIN!",
        startMsg: "Press to Start", restartMsg: "Play Again", level: "Level: "
    },
    sk: {
        mainTitle: "🦫 Capy Arkáda", subTitle: "Oddychuj a hraj",
        sectionArcade: "Akcia & Relax", sectionLogic: "Myseľ & Zen",
        
        gameMarioTitle: "Super Capy", gameMarioDesc: "Skáč po lúkach!",
        game1Title: "Capy Run", game1Desc: "Bež v prírode!",
        game2Title: "Astro Capy", game2Desc: "Kapybara vo vesmíre.",
        game3Title: "Capy Pexeso", game3Desc: "Nájdi páry.",
        game4Title: "Záhada Kúpeľov", game4Desc: "Vyrieš záhadu.",
        gameTetrisTitle: "Stacky-Bara", gameTetrisDesc: "Ukladaj bloky.",
        
        playBtn: "🍊 Hrať", footerText: "&copy; 2025 Capy Arkáda.",
        startMsgDesktop: "Stlač MEDZERNÍK", placeholderName: "Tvoje meno...",

        // Adventure
        chooseChar: "Vyber postavu", enterName: "Zadaj meno", startAdv: "Štart",
        roomLiving: "Obývačka", roomKitchen: "Kuchyňa", roomGarden: "Záhrada", roomLab: "Lab", roomAttic: "Podkrovie",
        interactParams: "Stlač MEDZERNÍK", lockedDoor: "Zamknuté.", lockedElec: "Bez elektriny.",
        bookshelfHint: "Kniha... Klik!", fridgeDesc: "Kód: 1234.",
        chestLocked: "Kód?", chestOpen: "Kód ok! Máš KĽÚČ.",
        shovelPick: "Máš LOPATU.", dirtDesc: "Hlina...", dirtDig: "Máš KARTU!",
        fountainDesc: "Teplá voda. Super.", generatorOff: "Vypnuté.", generatorOn: "Elektrina ide!",
        pcDesc: "Podkrovie OTVORENÉ.", finalChest: "POKLAD! Pomaranče pre všetkých!",
        itemFound: "Máš to!", nothing: "Nič.", sofaDesc: "Pohodlné.", tableDesc: "Omrvinky.",

        score: "Skóre: ", lives: "Životy: ", moves: "Ťahy: ", time: "Čas: ",
        gameOver: "KONIEC", youWin: "VÝHRA!",
        startMsg: "Štart", restartMsg: "Znova", level: "Úroveň: "
    }
};

let currentLang = localStorage.getItem('selectedLang') || 'it';

function t(key) {
    if (texts[currentLang] && texts[currentLang][key]) return texts[currentLang][key];
    return key;
}

function updatePageLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (texts[currentLang][key]) el.innerHTML = texts[currentLang][key];
    });
    const input = document.getElementById('playerNameInput');
    if(input) input.placeholder = t('placeholderName');
    document.documentElement.lang = currentLang;
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('selectedLang', lang);
    updatePageLanguage();
    if (window.isGamePage) location.reload();
}

document.addEventListener('DOMContentLoaded', updatePageLanguage);
