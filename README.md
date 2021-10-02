### Undo

When playing the game, the player can undo only its last move. That is, when a card is drawn, the player can undo this
action. The game keeps track of only the previous one card, so if an action is undoed, the game cannot undo another one
directly. First, a new action must be done.

### Edit cards

Cards can be edited. When saved, the game will restart using the new cards. Also, the game will be locally stored.

### Code new games

Game of Life class loads it's game configuration from src/assets/games/gameOfLifeDateEdition.json. Edit this .json file
or add a new one to create a new game. Make sure to create a corresponding class.

### Save game / Local storage

Everytime a card is opened or the edited cards are saved, the game will save the available cards offline using a cookie
called "game". This cookie lives for 30 days, so after 30 days, the game will be lost.

### Restart game

During gameplay, the player can decide to directly restart the game. This will shuffle the cards and place them all back
in the deck. Note that the game won't be saved to the local storage yet.

#### Undo accidental restart of the game

So if a player wants to undo the restart of the game, the player can go back to the main menu and click "Continue
previous game". This will restore the game to its state before the restart.

### Share games

Games cannot be shared between multiple devices. Not yet that is.
