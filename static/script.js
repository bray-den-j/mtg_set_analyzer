// Dictionary mapping set names to their codes
const sets = [
    { name: "Limited Edition Alpha", code: "LEA" },
    { name: "Limited Edition Beta", code: "LEB" },
    { name: "Arabian Nights", code: "ARN" },
    { name: "Unlimited", code: "2ED" },
    { name: "Antiquities", code: "ATQ" },
    { name: "Revised Edition", code: "3ED" },
    { name: "Legends", code: "LEG" },
    { name: "The Dark", code: "DARK" },
    { name: "Fallen Empires", code: "FEM" },
    { name: "Fourth Edition", code: "4ED" },
    { name: "Ice Age", code: "ICE" },
    { name: "Chronicles", code: "CHR" },
    { name: "Homelands", code: "HML" },
    { name: "Alliances", code: "ALL" },
    { name: "Mirage", code: "MIR" },
    { name: "Visions", code: "VIS" },
    { name: "Fifth Edition", code: "5ED" },
    { name: "Weatherlight", code: "WTH" },
    { name: "Tempest", code: "TMP" },
    { name: "Stronghold", code: "STH" },
    { name: "Exodus", code: "EXO" },
    { name: "Unglued", code: "UGL" },
    { name: "Urza's Saga", code: "USG" },
    { name: "Urza's Legacy", code: "ULG" },
    { name: "Sixth Edition", code: "6ED" },
    { name: "Urza's Destiny", code: "UDS" },
    { name: "Mercadian Masques", code: "MMQ" },
    { name: "Nemesis", code: "NEM" },
    { name: "Prophecy", code: "PCR" },
    { name: "Invasion", code: "INV" },
    { name: "Beatdown", code: "BTD" },
    { name: "Planeshift", code: "PLS" },
    { name: "Seventh Edition", code: "7ED" },
    { name: "Apocalypse", code: "APC" },
    { name: "Odyssey", code: "ODY" },
    { name: "Torment", code: "TOR" },
    { name: "Judgment", code: "JUD" },
    { name: "Onslaught", code: "ONS" },
    { name: "Legions", code: "LGN" },
    { name: "Scourge", code: "SCG" },
    { name: "Eighth Edition", code: "8ED" },
    { name: "Mirrodin", code: "MRD" },
    { name: "Darksteel", code: "DST" },
    { name: "Fifth Dawn", code: "5DN" },
    { name: "Champions of Kamigawa", code: "CHK" },
    { name: "Unhinged", code: "UNH" },
    { name: "Betrayers of Kamigawa", code: "BOK" },
    { name: "Saviors of Kamigawa", code: "SOK" },
    { name: "Ninth Edition", code: "9ED" },
    { name: "Ravnica: City of Guilds", code: "RAV" },
    { name: "Guildpact", code: "GPT" },
    { name: "Dissension", code: "DIS" },
    { name: "Coldsnap", code: "CSP" },
    { name: "Time Spiral", code: "TSP" },
    { name: "Planar Chaos", code: "PLC" },
    { name: "Future Sight", code: "FUT" },
    { name: "Tenth Edition", code: "10E" },
    { name: "Masters Edition", code: "MED" },
    { name: "Lorwyn", code: "LRW" },
    { name: "Morningtide", code: "MOR" },
    { name: "Shadowmoor", code: "SHM" },
    { name: "Eventide", code: "EVE" },
    { name: "Shards of Alara", code: "ALA" },
    { name: "Conflux", code: "CON" },
    { name: "Alara Reborn", code: "ARB" },
    { name: "Magic 2010", code: "M10" },
    { name: "Zendikar", code: "ZEN" },
    { name: "Worldwake", code: "WWK" },
    { name: "Rise of the Eldrazi", code: "ROE" },
    { name: "Magic 2011", code: "M11" },
    { name: "Scars of Mirrodin", code: "SOM" },
    { name: "Mirrodin Besieged", code: "MBS" },
    { name: "New Phyrexia", code: "NPH" },
    { name: "Magic 2012", code: "M12" },
    { name: "Innistrad", code: "ISD" },
    { name: "Dark Ascension", code: "DKA" },
    { name: "Avacyn Restored", code: "AVR" },
    { name: "Magic 2013", code: "M13" },
    { name: "Return to Ravnica", code: "RTR" },
    { name: "Gatecrash", code: "GTC" },
    { name: "Dragon's Maze", code: "DGM" },
    { name: "Modern Masters", code: "MMA" },
    { name: "Magic 2014", code: "M14" },
    { name: "Theros", code: "THS" },
    { name: "Born of the Gods", code: "BNG" },
    { name: "Journey into Nyx", code: "JOU" },
    { name: "Conspiracy", code: "CNS" },
    { name: "Magic 2015", code: "M15" },
    { name: "Khans of Tarkir", code: "KTK" },
    { name: "Fate Reforged", code: "FRF" },
    { name: "Dragons of Tarkir", code: "DTK" },
    { name: "Modern Masters 2015", code: "MM2" },
    { name: "Magic Origins", code: "ORI" },
    { name: "Battle for Zendikar", code: "BFZ" },
    { name: "Oath of the Gatewatch", code: "OGW" },
    { name: "Shadows over Innistrad", code: "SOI" },
    { name: "Eternal Masters", code: "EMA" },
    { name: "Eldritch Moon", code: "EMN" },
    { name: "Conspiracy: Take the Crown", code: "CN2" },
    { name: "Kaladesh", code: "KLD" },
    { name: "Aether Revolt", code: "AER" },
    { name: "Modern Masters 2017", code: "MM3" },
    { name: "Amonkhet", code: "AKH" },
    { name: "Hour of Devastation", code: "HOU" },
    { name: "Ixalan", code: "XLN" },
    { name: "Iconic Masters", code: "IMA" },
    { name: "Unstable", code: "UST" },
    { name: "Rivals of Ixalan", code: "RIX" },
    { name: "Masters 25", code: "A25" },
    { name: "Dominaria", code: "DOM" },
    { name: "Battlebond", code: "BBD" },
    { name: "Core Set 2019", code: "M19" },
    { name: "Guilds of Ravnica", code: "GRN" },
    { name: "Ultimate Masters", code: "UMA" },
    { name: "Ravnica Allegiance", code: "RNA" },
    { name: "War of the Spark", code: "WAR" },
    { name: "Modern Horizons", code: "MH1" },
    { name: "Core Set 2020", code: "M20" },
    { name: "Throne of Eldraine", code: "ELD" },
    { name: "Theros: Beyond Death", code: "THB" },
    { name: "Ikoria: Lair of Behemoths", code: "IKO" },
    { name: "Jumpstart", code: "JMP" },
    { name: "Core Set 2021", code: "M21" },
    { name: "Double Masters", code: "2XM" },
    { name: "Zendikar Rising", code: "ZNR" },
    { name: "Commander Legends", code: "CNR" },
    { name: "Kaldheim", code: "KHM" },
    { name: "Time Spiral Remastered", code: "TSR" },
    { name: "Strixhaven: School of Mages", code: "STX" },
    { name: "Modern Horizons 2", code: "MH2" },
    { name: "Dungeons & Dragons: Adventures in the Forgotten Realms", code: "AFR" },
    { name: "Innistrad: Midnight Hunt", code: "MID" },
    { name: "Innistrad: Crimson Vow", code: "VOW" },
    { name: "Kamigawa: Neon Dynasty", code: "NEO" },
    { name: "Streets of New Capenna", code: "SNC" },
    { name: "Double Masters 2022", code: "2X2" },
    { name: "Dominaria United", code: "DMU" },
    { name: "The Brother's War", code: "BRO" },
    { name: "Jumpstart 2022", code: "J22" },
    { name: "Dominaria Remastered", code: "DMR" },
    { name: "Phyrexia: All Will Be One", code: "ONE" },
    { name: "March of the Machine", code: "MOM" },
    { name: "March of the Machine: The Aftermath", code: "MAT" },
    { name: "The Lord of the Rings: Tales of Middle-earth", code: "LTR" },
    { name: "Wilds of Eldraine", code: "WOE" },
    { name: "The Lost Caverns of Ixalan", code: "LCI" },
    { name: "Murders at Karlov Manor", code: "MKM" },
    { name: "Outlaws of Thunder Junction", code: "OTJ" },
    { name: "Modern Horizons III", code: "MH3" },
    { name: "Assassin's Creed", code: "ACR" },
    { name: "Bloomburrow", code: "BLB" }
];

function filterSets() {
    const input = document.getElementById('set-input').value.toLowerCase();
    const suggestions = document.getElementById('autocomplete-container');
    suggestions.innerHTML = '';
    
    if (input === '') {
        suggestions.style.display = 'none'; // Hide suggestions if input is empty
        return;
    }

    const filteredSets = sets.filter(set => set.name.toLowerCase().includes(input));
    
    filteredSets.forEach(set => {
        const div = document.createElement('div');
        div.className = 'autocomplete-suggestion';
        div.textContent = set.name;
        div.onclick = () => {
            document.getElementById('set-input').value = set.name;
            document.getElementById('set_code').value = set.code;
            suggestions.innerHTML = '';
            suggestions.style.display = 'none'; // Hide suggestions after selection
        };
        suggestions.appendChild(div);
    });

    suggestions.style.display = filteredSets.length ? 'block' : 'none'; // Show suggestions if there are matches
}

// Hide suggestions when clicking outside of the input or suggestions container
document.addEventListener('click', (event) => {
    const input = document.getElementById('set-input');
    const suggestions = document.getElementById('autocomplete-container');
    if (!input.contains(event.target) && !suggestions.contains(event.target)) {
        suggestions.style.display = 'none';
    }
});