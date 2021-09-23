const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },

    get _courses () {
      return {
        appetizers,
        mains,
        desserts
      }
    },
    get appetizers() {

    },

    set appetizers() {

    },

    get mains() {

    },

    set mains () {

    },

    get desserts() {

    },

    set desserts() {

    },
    
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: this.dishName,
        price: this.dishPrice
        }
            this._courses[courseName].push(dish);
      }, // end add dishtocourses

    getRandomDishFromCourse(courseName) {
        const dishes = [...menu._courses[courseName]];
        let randomIndex = (Math.floor(Math.random() * dishes.length));
        return dishes[randomIndex]
    }
}; // end menu




const menu = {
    ...
    addDishToCourse (courseName, ...) {
      const dish = {
        ...
      };
   
      this._courses[courseName].push(dish); // also try using your setter method!
    }
  };
  