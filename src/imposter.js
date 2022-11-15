const solution = (players) => {
	const imposters = players.filter(item => item.includes('imposter'))
	const impostersArr = imposters.map(i => i[0]);
	if (impostersArr.length === 0) {
		return ["there are no imposters here!"];
	}
	if (impostersArr.length === players.length) {
		return ["imposters are everywhere!"];
	}
	return impostersArr;
};