function generateTeams(players) {
	const teamA = [];
	const teamB = [];

	const shuffledParticipants = (players) =>
		[...players].sort(() => Math.random() - 0.5);
	shuffledParticipants(players).forEach((player, index) =>
		index % 2 ? teamA.push(player) : teamB.push(player)
	);

	return [teamA, teamB];
}

export default generateTeams;
