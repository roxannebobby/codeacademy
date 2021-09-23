const team = {
	_players: [
		{
			firstName: 'Pablo',
			lastName: 'Sanchez',
			age: 11,
		},
	], // end _players array
	_games: [
		{
			opponent: 'Broncos',
			teamPoints: 42,
			opponentPoints: 27,
		},
	], // end _games array
	get somePlayer() {
		return this._players;
	}, // end get somePlayer
	get someGame() {
		return this._games;
	}, // end get someGame
	addPlayer(firstName, lastName, age) {
		let player = {
			firstName: firstName,
			lastName: lastName,
			age: age,
		};
		this.somePlayer.push(player);
	}, // end addPlayer
	addGame(opponent, teamPoints, opponentPoints) {
		let game = {
			opponent: opponent,
			teamPoints: teamPoints,
			opponentPoints: opponentPoints,
		};
		this.someGame.push(game);
	}, // end addGame
}; // end team

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Cowboys', 33, 24,)

console.log(team);
