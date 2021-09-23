const menu = {
	_courses: {
		appetizers: [],
		mains: [],
		desserts: []
	},

	get someCourses() {
		return {
			appetizers: this.appetizers,
			mains: this.mains,
			desserts: this.desserts,
		};
	},
	get appetizers() {
		return this._courses.appetizers;
	},

	set appetizers(appetizers) {
		return (this._courses.appetizers = appetizers);
	},

	get mains() {
		return this._courses.mains;
	},

	set mains(mains) {
		return (this._courses.mains = mains);
	},

	get desserts() {
		return this._courses.desserts;
	},

	set desserts(desserts) {
		return (this._courses.desserts = desserts);
	},

	addDishToCourse(courseName, dishName, dishPrice) {
		const dish = {
			name: dishName,
			price: dishPrice,
		};
		return this._courses[courseName].push(dish);
	}, // end add dishtocourses

	getRandomDishFromCourse(courseName) {
		const dishes = this._courses[courseName];
		const randomIndex = Math.floor(Math.random() * dishes.length);
		return dishes[randomIndex];
	},
	generateRandomMeal() {
		const appetizer = this.getRandomDishFromCourse('appetizers');
		const main = this.getRandomDishFromCourse('mains');
		const dessert = this.getRandomDishFromCourse('desserts');
		const totalPrice = appetizer.price + main.price + dessert.price;

		return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is ${totalPrice}.`;
	}, // end generateRandomMeal function
}; // end menu

menu.addDishToCourse('desserts', 'Red Apple Pie', 8.75);
console.log(menu._courses)
