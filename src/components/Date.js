export default function UpcomingMatchday() {
	const upcomingFriday = calculateUpcomingMatchday();

	const day = upcomingFriday.getDate();
	const month = upcomingFriday.getMonth() + 1;
	const year = upcomingFriday.getFullYear();
	const matchday = `Freitag, ${day}.${month}.${year}`;

	return <h2>{matchday}</h2>;
}

export function calculateUpcomingMatchday() {
	const today = new Date();
	// Heute: 3 (Mi), Übermorgen: 5 (Fr)
	// Morgen: 4 (Do), Übermorgen: 5 (Fr)
	// Heute: 6 (Sa), In 6 Tagen Fr
	// Heute: 0 (So), In 5 Tagen Fr
	const upcomingFriday = new Date();
	const daysToAdd = today.getDay() === 6 ? 6 : 5 - today.getDay();
	upcomingFriday.setDate(today.getDate() + daysToAdd);

	return upcomingFriday;
}

export function upcomingMatchdayToISOString() {
	const upcomingMatchday = calculateUpcomingMatchday().toISOString();
	return upcomingMatchday.substring(0, 10);
}
