const menu = {

    getRandomDishFromCourse(courseName) {
    Math.floor(Math.random() * dish.length);
    
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        price: this.dishPrice,
        name: this.dishName
      }
      this._courses[courseName].push(dish);
      },
      _courses: {
        get get_Courses(){
          return this.appetizers;
          return this.mains;
          return this.desserts;
        },
          appetizers: {
            get getAppetizers(){
              return this.appetizers;
              },
            set changeAppetizers(newAppetizers){
              this.appetizers = newAppetizers;
              }
          },
    
          mains: {
            get getMains() {
              return this.mains;
              },
            set changeMains(newMains){
              this.mains = newMains;
              }
          },
    
          desserts: {
            get getDesserts(){
              return this.desserts;
              },
            set changeDesserts(newDesserts){
              this.desserts = newDesserts;
              }
          }
    
      }
    
    }




