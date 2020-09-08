export const uniqueCountries = (items) => {
	const uniqueLocation = items.reduce((values, currItem, index) => {
		if (!values.includes(currItem.location) && currItem.location !== null) {
			values.push(currItem.location);
		}
		return values;
	}, []);

	// function countLocOccur(loc) {
	// 	let count = 0;
	// 	items.forEach((item) => {
	// 		if (item.location === loc) {
	// 			count++;
	// 		}
	// 	});
	// 	return count;
	// }

	// const topLocation = uniqueLocation.map((loc, index) => {

	// 	const totalLoca = countLocOccur(loc);
	// 	return { totalLoca };
	// });
	// console.log(topLocation.sort((a, b) => b - a));
	return uniqueLocation;
};
