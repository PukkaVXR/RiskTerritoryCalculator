# Risk Territory Calculator

A clean and simple web application for tracking troop counts and territory distribution in the game of Risk.

## Features

- **Map Selection**: Choose from over 100 different Risk maps
- **Player Configuration**: Support for 2-6 players
- **Blizzard Support**: Toggle blizzard territories on/off
- **Automatic Territory Distribution**: Calculates initial territory distribution based on map data
- **Attack Tracking**: Click colored buttons to simulate attacks and transfer territories
- **Player Elimination**: Automatic detection when a player loses all territories
- **Responsive Design**: Works on desktop and mobile devices

## How to Use

1. **Setup Game**:
   - Select a map from the dropdown menu
   - Choose the number of players (2-6)
   - Check "Blizzards Enabled" if your map uses blizzard territories
   - Click "Start Game"

2. **Territory Distribution**:
   - The app automatically calculates initial territory distribution
   - Formula: `(Total Territories - Blizzards) / Players`
   - Remaining territories are distributed starting with Player 1

3. **Track Attacks**:
   - Each player card shows their current territory count
   - Colored buttons represent other players
   - Click a colored button to simulate an attack
   - One territory transfers from the attacked player to the attacker

4. **Game Management**:
   - Use "Reset Game" to start over
   - Players are automatically eliminated when they reach 0 territories

## Example Calculation

For the "[REDACTED]" map with 6 players and blizzards enabled:
- Total territories: 47
- Blizzards: 3
- Available territories: 47 - 3 = 44
- Base per player: 44 ÷ 6 = 7 (with 2 remaining)
- Distribution: Players 1-2 get 8 territories, Players 3-6 get 7 territories

## Files

- `index.html` - Main HTML structure
- `styles.css` - Modern, responsive styling
- `script.js` - Application logic and map data
- `MapInfo.txt` - Source data for all maps

## Running the Application

Simply open `index.html` in any modern web browser. No server or additional dependencies required.

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Map Data

The application includes data for over 100 Risk maps, including:
- Classic maps (Classic, Classic Europe, Classic Frozen)
- Regional maps (Africa, Brazil, Canada, Japan, etc.)
- Advanced variants (Africa Advanced, Brazil Advanced, etc.)
- Themed maps (Dracula's Castle, The Airship, Dino World, etc.)
- Historical maps (Roman Empire, Ottoman Empire, etc.)

Each map includes:
- Territory count
- Continent count
- Blizzard count
- Release year (when available) 
