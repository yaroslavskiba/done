import _ from 'lodash'

const solution = (n) => {
	const arr = [];
	for(let i = 1; i <= n; i++) {
		arr.push(i);
	}
	const sumSquare = _.sum(arr) ** 2;
	const squareSum = arr.reduce((acc, i) => acc + i ** 2)
	return sumSquare - squareSum;
};