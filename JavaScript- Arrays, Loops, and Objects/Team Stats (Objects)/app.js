const team = {
    _players:[
        {firstName: 'Pablo',lastName: 'Sanchez',age: 11},
        {firstName: 'Betty',lastName: 'Davis',age: 60},
        {firstName: 'Bar',lastName: 'Gilad',age: 27},
        {firstName: 'Poopoo',lastName: 'Peepee',age: 30}
    ],
    _games:[
        {opponent: 'Broncos',teamPoints: 42,opponentPoints: 27},
        {opponent: 'Craps',teamPoints: 69,opponentPoints: 54},
        {opponent: 'Pie',teamPoints: 420,opponentPoints: 240},
        {opponent: 'Chess',teamPoints: 5,opponentPoints: 27}
    ],

    get players(){
        return this._players;
    },
    get games(){
        return this._games;
    },

    addPlayer(firstName, lastName, age){
        const newPlayer = {firstName, lastName, age};
        this._players.push(newPlayer);
    },

    addGame (opponent, teamPoints, opponentPoints){
        const newGame = {opponent, teamPoints, opponentPoints};
        this._games.push(newGame);
    }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

team.addGame('crappers', 25, 65);
team.addGame('Vikings', 28, 78);
team.addGame('Vasabi', 65, 52);
team.addGame('Pixies', 45, 75);
console.log(team.games);
