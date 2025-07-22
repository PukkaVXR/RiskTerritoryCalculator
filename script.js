// Map data from MapInfo.txt
const mapsData = {
    "[REDACTED]": {
        "territory_count": 47,
        "continent_count": 11,
        "blizzards": 3,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "28 Turns Later": {
        "territory_count": 50,
        "continent_count": 10,
        "blizzards": 4,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Africa": {
        "territory_count": 37,
        "continent_count": 7,
        "blizzards": 2,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Africa Advanced": {
        "territory_count": 50,
        "continent_count": 9,
        "blizzards": 4,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Alcatraz": {
        "territory_count": 39,
        "continent_count": 5,
        "blizzards": 2,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Artic Stronghold": {
        "territory_count": 47,
        "continent_count": 6,
        "blizzards": 3,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Arkeanos": {
        "territory_count": 69,
        "continent_count": 10,
        "blizzards": 6,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Arrakeen": {
        "territory_count": 39,
        "continent_count": 9,
        "blizzards": 2,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Arrakeen Residence": {
        "territory_count": 30,
        "continent_count": 9,
        "blizzards": 2,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Arrakis": {
        "territory_count": 36,
        "continent_count": 9,
        "blizzards": 2,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Asia 1800s": {
        "territory_count": 48,
        "continent_count": 9,
        "blizzards": 4,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Atlantis": {
        "territory_count": 57,
        "continent_count": 8,
        "blizzards": 4,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Battle for the United States": {
        "territory_count": 42,
        "continent_count": 9,
        "blizzards": 3,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Battle of Lübeck": {
        "territory_count": 43,
        "continent_count": 9,
        "blizzards": 3,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Battle of Svolder": {
        "territory_count": 44,
        "continent_count": 12,
        "blizzards": 3,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Blackbeard's Wrath": {
        "territory_count": 44,
        "continent_count": 6,
        "blizzards": 3,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Bohus Fortress": {
        "territory_count": 65,
        "continent_count": 10,
        "blizzards": 6,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Brazil": {
        "territory_count": 23,
        "continent_count": 5,
        "blizzards": 2,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Brazil Advanced": {
        "territory_count": 56,
        "continent_count": 8,
        "blizzards": 5,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Britannia": {
        "territory_count": 20,
        "continent_count": 4,
        "blizzards": 2,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Britannia [Advanced]": {
        "territory_count": 49,
        "continent_count": 4,
        "blizzards": 4,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Canada": {
        "territory_count": 53,
        "continent_count": 10,
        "blizzards": 4,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Canada [Advanced]": {
        "territory_count": 91,
        "continent_count": 13,
        "blizzards": 9,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Castle": {
        "territory_count": 31,
        "continent_count": 6,
        "blizzards": 2,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Central America": {
        "territory_count": 61,
        "continent_count": 10,
        "blizzards": 5,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Classic": {
        "territory_count": 42,
        "continent_count": 6,
        "blizzards": 3,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Classic Europe": {
        "territory_count": 44,
        "continent_count": 7,
        "blizzards": 3,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Classic Frozen": {
        "territory_count": 42,
        "continent_count": 6,
        "blizzards": 3,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Command and Controller": {
        "territory_count": 47,
        "continent_count": 7,
        "blizzards": 3,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Command Base C1X": {
        "territory_count": 100,
        "continent_count": 11,
        "blizzards": 10,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Conquest of Stockholm": {
        "territory_count": 73,
        "continent_count": 13,
        "blizzards": 7,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Conwy Castle": {
        "territory_count": 63,
        "continent_count": 9,
        "blizzards": 5,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Deutschland!": {
        "territory_count": 57,
        "continent_count": 9,
        "blizzards": 5,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Dicey Trajectories": {
        "territory_count": 39,
        "continent_count": 8,
        "blizzards": 2,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Dino Canyon": {
        "territory_count": 44,
        "continent_count": 8,
        "blizzards": 3,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Dino World": {
        "territory_count": 39,
        "continent_count": 9,
        "blizzards": 2,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Dracon Fortress": {
        "territory_count": 44,
        "continent_count": 14,
        "blizzards": 3,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Dracula's Castle": {
        "territory_count": 51,
        "continent_count": 7,
        "blizzards": 4,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Earth 2209 A.D.": {
        "territory_count": 86,
        "continent_count": 11,
        "blizzards": 8,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Emergency Calls Only": {
        "territory_count": 52,
        "continent_count": 9,
        "blizzards": 4,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Enchanted Lands": {
        "territory_count": 32,
        "continent_count": 7,
        "blizzards": 2,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "End of the King": {
        "territory_count": 37,
        "continent_count": 11,
        "blizzards": 2,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Europe Advanced": {
        "territory_count": 84,
        "continent_count": 14,
        "blizzards": 8,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Forsaken Lands": {
        "territory_count": 46,
        "continent_count": 7,
        "blizzards": 3,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "French Revolution": {
        "territory_count": 26,
        "continent_count": 6,
        "blizzards": 2,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "General Processing Unit": {
        "territory_count": 50,
        "continent_count": 11,
        "blizzards": 4,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Greece": {
        "territory_count": 64,
        "continent_count": 14,
        "blizzards": 6,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Greenland Saga": {
        "territory_count": 35,
        "continent_count": 9,
        "blizzards": 2,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Grip of the North": {
        "territory_count": 44,
        "continent_count": 9,
        "blizzards": 3,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Ibailand": {
        "territory_count": 58,
        "continent_count": 8,
        "blizzards": 5,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Icelandic Skirmish": {
        "territory_count": 21,
        "continent_count": 4,
        "blizzards": 2,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Italian Conquest": {
        "territory_count": 36,
        "continent_count": 7,
        "blizzards": 2,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Japan": {
        "territory_count": 50,
        "continent_count": 9,
        "blizzards": 4,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Jules Verne's Mysterious Island": {
        "territory_count": 42,
        "continent_count": 8,
        "blizzards": 3,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Koenigsberg Siege": {
        "territory_count": 43,
        "continent_count": 10,
        "blizzards": 3,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Las Vegas, Nevada": {
        "territory_count": 58,
        "continent_count": 10,
        "blizzards": 5,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Lindisfarne Raid": {
        "territory_count": 35,
        "continent_count": 9,
        "blizzards": 2,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Los Angeles": {
        "territory_count": 41,
        "continent_count": 7,
        "blizzards": 3,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Lost Temple": {
        "territory_count": 45,
        "continent_count": 7,
        "blizzards": 3,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Lunar Mining Facility": {
        "territory_count": 42,
        "continent_count": 10,
        "blizzards": 5,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Machu Pichu": {
        "territory_count": 38,
        "continent_count": 8,
        "blizzards": 2,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Mall of the Dead": {
        "territory_count": 72,
        "continent_count": 8,
        "blizzards": 7,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "MIRA HQ": {
        "territory_count": 52,
        "continent_count": 11,
        "blizzards": 4,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Modern Boston": {
        "territory_count": 42,
        "continent_count": 11,
        "blizzards": 3,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Modern Spain": {
        "territory_count": 47,
        "continent_count": 12,
        "blizzards": 3,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Mont-Saint-Michel": {
        "territory_count": 88,
        "continent_count": 14,
        "blizzards": 9,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Moonstone Forest": {
        "territory_count": 47,
        "continent_count": 9,
        "blizzards": 3,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Mother of all Boards": {
        "territory_count": 31,
        "continent_count": 8,
        "blizzards": 2,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Nan Madol": {
        "territory_count": 42,
        "continent_count": 7,
        "blizzards": 3,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "New York, New York!": {
        "territory_count": 34,
        "continent_count": 5,
        "blizzards": 2,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "New Zealand and Australia": {
        "territory_count": 38,
        "continent_count": 8,
        "blizzards": 2,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "New Zealand and Australia Advanced": {
        "territory_count": 72,
        "continent_count": 14,
        "blizzards": 7,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Operation A.D.A.M.": {
        "territory_count": 52,
        "continent_count": 13,
        "blizzards": 4,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Orbital Objectives": {
        "territory_count": 55,
        "continent_count": 13,
        "blizzards": 4,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Ottoman Empire": {
        "territory_count": 38,
        "continent_count": 5,
        "blizzards": 2,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Ottoman Empire Advanced": {
        "territory_count": 59,
        "continent_count": 7,
        "blizzards": 5,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Overworld": {
        "territory_count": 74,
        "continent_count": 6,
        "blizzards": 7,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Pangaea": {
        "territory_count": 65,
        "continent_count": 7,
        "blizzards": 6,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Polus": {
        "territory_count": 59,
        "continent_count": 12,
        "blizzards": 5,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Qing Dynasty": {
        "territory_count": 35,
        "continent_count": 8,
        "blizzards": 2,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Ratatoskr and Friends": {
        "territory_count": 42,
        "continent_count": 8,
        "blizzards": 3,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Red Sands Fort": {
        "territory_count": 64,
        "continent_count": 9,
        "blizzards": 6,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Reverse World": {
        "territory_count": 66,
        "continent_count": 10,
        "blizzards": 6,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "River Town": {
        "territory_count": 24,
        "continent_count": 7,
        "blizzards": 2,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "River Town [Advanced]": {
        "territory_count": 68,
        "continent_count": 12,
        "blizzards": 5,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Roman Empire": {
        "territory_count": 43,
        "continent_count": 7,
        "blizzards": 3,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Roman Empire Advanced": {
        "territory_count": 62,
        "continent_count": 12,
        "blizzards": 5,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Roots of Yggdrasil": {
        "territory_count": 47,
        "continent_count": 13,
        "blizzards": 4,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Seagrog's Fortress": {
        "territory_count": 76,
        "continent_count": 7,
        "blizzards": 7,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Seaport": {
        "territory_count": 41,
        "continent_count": 8,
        "blizzards": 3,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Sietch Tabr": {
        "territory_count": 59,
        "continent_count": 14,
        "blizzards": 5,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Simple World": {
        "territory_count": 19,
        "continent_count": 6,
        "blizzards": 2,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Skull & Crossbones": {
        "territory_count": 44,
        "continent_count": 7,
        "blizzards": 3,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "SMG Spaceport": {
        "territory_count": 45,
        "continent_count": 12,
        "blizzards": 3,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Spaceport Sigma": {
        "territory_count": 96,
        "continent_count": 10,
        "blizzards": 10,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Stairs of Knowledge & Power": {
        "territory_count": 41,
        "continent_count": 12,
        "blizzards": 3,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Supermax Prison": {
        "territory_count": 42,
        "continent_count": 7,
        "blizzards": 3,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "The Airship": {
        "territory_count": 104,
        "continent_count": 20,
        "blizzards": 11,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "The Fungle": {
        "territory_count": 65,
        "continent_count": 13,
        "blizzards": 6,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "The Imperium": {
        "territory_count": 36,
        "continent_count": 9,
        "blizzards": 2,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "The Pirate's Bay": {
        "territory_count": 83,
        "continent_count": 11,
        "blizzards": 8,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "The Skeld": {
        "territory_count": 69,
        "continent_count": 14,
        "blizzards": 6,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "The Younger Scrolls": {
        "territory_count": 66,
        "continent_count": 9,
        "blizzards": 6,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Trigon's Labyrinth": {
        "territory_count": 80,
        "continent_count": 10,
        "blizzards": 8,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Troy": {
        "territory_count": 67,
        "continent_count": 13,
        "blizzards": 6,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Turkey": {
        "territory_count": 63,
        "continent_count": 7,
        "blizzards": 5,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "United States Advanced": {
        "territory_count": 77,
        "continent_count": 12,
        "blizzards": 7,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "US Midwest": {
        "territory_count": 64,
        "continent_count": 12,
        "blizzards": 5,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "US Northeast": {
        "territory_count": 34,
        "continent_count": 9,
        "blizzards": 2,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "US South": {
        "territory_count": 54,
        "continent_count": 15,
        "blizzards": 4,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "US West": {
        "territory_count": 55,
        "continent_count": 11,
        "blizzards": 4,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Way to Valhalla": {
        "territory_count": 69,
        "continent_count": 13,
        "blizzards": 6,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "World Conquest": {
        "territory_count": 47,
        "continent_count": 6,
        "blizzards": 3,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Yggdrasil, The World Tree": {
        "territory_count": 42,
        "continent_count": 9,
        "blizzards": 3,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Battle for Plancenoit": {
        "territory_count": 79,
        "continent_count": 14,
        "blizzards": 7,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Battle of Waterloo": {
        "territory_count": 97,
        "continent_count": 19,
        "blizzards": 10,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Battle of Ligny": {
        "territory_count": 79,
        "continent_count": 15,
        "blizzards": 7,
        "territories": [],
        "continents": [],
        "release_year": 0,
    },
    "Battle of Charleroi": {
        "territory_count": 88,
        "continent_count": 14,
        "blizzards": 9,
        "territories": [],
        "continents": [],
        "release_year": 0,
    }
};

// Available game colors
const gameColors = [
    { name: 'Black', class: 'color-black' },
    { name: 'Blue', class: 'color-blue' },
    { name: 'Yellow', class: 'color-yellow' },
    { name: 'Pink', class: 'color-pink' },
    { name: 'Purple', class: 'color-purple' },
    { name: 'Green', class: 'color-green' },
    { name: 'Red', class: 'color-red' },
    { name: 'White', class: 'color-white' },
    { name: 'Orange', class: 'color-orange' }
];

// Funny alternate titles
const alternateTitles = [
    "Return to Capital",
    "Risky troop count",
    "Rolling takes courage",
    "Really trash communication",
    "Risky Troop Clash",
    "Roll To Conquer",
    "Reinforce Territory Control",
    "Rush Their Capital",
    "Retreat Then Counter",
    "Revenge Tactic Calculator",
    "Rage Troop Combo",
    "Ruthless Territory Conquest",
    "Rise To Command",
    "Rapid Territory Change",
    "Region Threat Chart",
    "Risk Troop Checker",
    "Resource Tracker Console",
    "Range Threat Counter",
    "Real-Time Conquest",
    "Region Takeover Counter",
    "Really Terrible Choices",
    "Roll That Cap",
    "Reckless Troop Commitment",
    "Rage-Tap Capital",
    "Reckon That's Clever?",
    "Regret That Conquest",
    "Roll Then Cry",
    "Repeat The Cycle",
    "Ruin Their Chances",
    "Rambo Took Control"
];

// Game state
let currentGame = {
    mapName: '',
    playerCount: 0,
    blizzardsEnabled: false,
    players: []
};

// DOM elements
const mapSelect = document.getElementById('mapSelect');
const playerCountSelect = document.getElementById('playerCount');
const blizzardsCheckbox = document.getElementById('blizzardsEnabled');
const startGameBtn = document.getElementById('startGameBtn');
const resetGameBtn = document.getElementById('resetGameBtn');
const setupSection = document.getElementById('setupSection');
const gameSection = document.getElementById('gameSection');
const playersContainer = document.getElementById('playersContainer');
const animatedTitle = document.getElementById('animatedTitle');

// Initialize the app
function init() {
    populateMapSelect();
    setupEventListeners();
    startTitleAnimation();
}

// Start the animated title
function startTitleAnimation() {
    let currentIndex = 0;
    
    function animateTitle() {
        // Fade out
        animatedTitle.classList.add('fade-out');
        
        setTimeout(() => {
            // Change text
            animatedTitle.textContent = alternateTitles[currentIndex];
            
            // Fade in
            animatedTitle.classList.remove('fade-out');
            animatedTitle.classList.add('fade-in');
            
            // Move to next title
            currentIndex = (currentIndex + 1) % alternateTitles.length;
            
            // Schedule next animation
            setTimeout(() => {
                animatedTitle.classList.remove('fade-in');
            }, 500);
            
        }, 500);
    }
    
    // Start the first animation after a delay
    setTimeout(animateTitle, 2000);
    
    // Set up recurring animation
    setInterval(animateTitle, 4000);
}

// Populate map select dropdown
function populateMapSelect() {
    const mapNames = Object.keys(mapsData).sort();
    mapNames.forEach(mapName => {
        const option = document.createElement('option');
        option.value = mapName;
        option.textContent = mapName;
        mapSelect.appendChild(option);
    });
}

// Setup event listeners
function setupEventListeners() {
    startGameBtn.addEventListener('click', startGame);
    resetGameBtn.addEventListener('click', resetGame);
}

// Start the game
function startGame() {
    const mapName = mapSelect.value;
    const playerCount = parseInt(playerCountSelect.value);
    const blizzardsEnabled = blizzardsCheckbox.checked;

    if (!mapName || !playerCount) {
        alert('Please select a map and number of players.');
        return;
    }

    // Calculate territory distribution
    const mapData = mapsData[mapName];
    const availableTerritories = blizzardsEnabled ? 
        mapData.territory_count - mapData.blizzards : 
        mapData.territory_count;

    const baseTerritoriesPerPlayer = Math.floor(availableTerritories / playerCount);
    const remainingTerritories = availableTerritories % playerCount;

    // Create players
    currentGame = {
        mapName: mapName,
        playerCount: playerCount,
        blizzardsEnabled: blizzardsEnabled,
        players: []
    };

    for (let i = 0; i < playerCount; i++) {
        const territories = baseTerritoriesPerPlayer + (i < remainingTerritories ? 1 : 0);
        currentGame.players.push({
            id: i + 1,
            name: `Player ${i + 1}`,
            color: gameColors[i], // Default color assignment
            territories: territories
        });
    }

    // Update UI
    updateGameInfo();
    renderPlayers();
    setupSection.style.display = 'none';
    gameSection.style.display = 'block';
}

// Update game info display
function updateGameInfo() {
    const mapData = mapsData[currentGame.mapName];
    document.getElementById('currentMap').textContent = currentGame.mapName;
    document.getElementById('currentPlayers').textContent = currentGame.playerCount;
    document.getElementById('currentBlizzards').textContent = 
        currentGame.blizzardsEnabled ? `${mapData.blizzards} (Enabled)` : 'Disabled';
}

// Render players
function renderPlayers() {
    playersContainer.innerHTML = '';
    
    currentGame.players.forEach((player, index) => {
        const playerCard = document.createElement('div');
        playerCard.className = 'player-card';
        playerCard.innerHTML = `
            <div class="player-header">
                <div class="player-info">
                    <div class="player-color ${player.color.class}"></div>
                    <div class="player-name">${player.name}</div>
                </div>
                <div class="territory-count">${player.territories}</div>
            </div>
            <div class="color-selection">
                <label>Color:</label>
                <select class="color-select" data-player-index="${index}">
                    ${generateColorOptions(player.color)}
                </select>
            </div>
            <div class="attack-buttons">
                ${generateAttackButtons(player, index)}
            </div>
        `;
        
        playersContainer.appendChild(playerCard);
    });

    // Add event listeners
    addAttackButtonListeners();
    addColorSelectionListeners();
}

// Generate color options for dropdown
function generateColorOptions(selectedColor) {
    return gameColors.map(color => 
        `<option value="${color.class}" ${color.class === selectedColor.class ? 'selected' : ''}>
            ${color.name}
        </option>`
    ).join('');
}

// Generate attack buttons for a player
function generateAttackButtons(attackingPlayer, attackingPlayerIndex) {
    return currentGame.players
        .filter((player, index) => index !== attackingPlayerIndex && player.territories > 0)
        .map((targetPlayer, index) => `
            <button class="attack-btn ${targetPlayer.color.class}" 
                    data-attacker="${attackingPlayerIndex}" 
                    data-target="${currentGame.players.indexOf(targetPlayer)}"
                    title="Attack ${targetPlayer.name}">
            </button>
        `).join('');
}

// Add event listeners to attack buttons
function addAttackButtonListeners() {
    const attackButtons = document.querySelectorAll('.attack-btn');
    attackButtons.forEach(button => {
        button.addEventListener('click', handleAttack);
    });
}

// Add event listeners to color selection dropdowns
function addColorSelectionListeners() {
    const colorSelects = document.querySelectorAll('.color-select');
    colorSelects.forEach(select => {
        select.addEventListener('change', handleColorChange);
    });
}

// Handle color change
function handleColorChange(event) {
    const playerIndex = parseInt(event.target.dataset.playerIndex);
    const newColorClass = event.target.value;
    const newColor = gameColors.find(color => color.class === newColorClass);
    
    if (newColor) {
        currentGame.players[playerIndex].color = newColor;
        renderPlayers(); // Re-render to update all attack buttons
    }
}

// Handle attack
function handleAttack(event) {
    const attackerIndex = parseInt(event.target.dataset.attacker);
    const targetIndex = parseInt(event.target.dataset.target);
    
    const attacker = currentGame.players[attackerIndex];
    const target = currentGame.players[targetIndex];
    
    if (target.territories > 0) {
        // Transfer territory
        attacker.territories += 1;
        target.territories -= 1;
        
        // Update UI
        renderPlayers();
        
        // Check if target is eliminated
        if (target.territories === 0) {
            setTimeout(() => {
                alert(`${target.name} has been eliminated!`);
            }, 100);
        }
    }
}

// Reset game
function resetGame() {
    currentGame = {
        mapName: '',
        playerCount: 0,
        blizzardsEnabled: false,
        players: []
    };
    
    // Reset form
    mapSelect.value = '';
    playerCountSelect.value = '';
    blizzardsCheckbox.checked = false;
    
    // Show setup section
    gameSection.style.display = 'none';
    setupSection.style.display = 'block';
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init); 