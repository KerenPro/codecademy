const menu = {
    _course: {
        appetizers:[],
        mains:[],
        desserts:[]
    },

    get appetizers(){
        return this._course.appetizers;
    },
    set appetizers(newAppetizer){
        this._course.appetizers.push(newAppetizer);
    },
    get mains(){
        return this._course.mains;
    },
    set mains(newMain){
        this._course.appetizers.push(newMain);
    },
    get desserts(){
        return this._course.desserts;
    },
    set desserts(newDessert){
        this._course.appetizers.push(newDessert);
    },

    get _courses(){
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },

    addDishToCourse(courseName, dishName, dishPrice){
        const dish = {
            name: dishName,
            price: dishPrice
        };
        return this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse (courseName) {

        const dishes = this._courses[courseName];

        const randomIndex = Math.floor(Math.random()*dishes.length);

        return dishes[randomIndex];

    },

    generateRandomMeal(){
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price+main.price+dessert.price;
        return 'The meal is: Appetizer: ' + this.appetizer + ' Main: '+this.main+' Dessert: '+this.dessert+' Total price: '+this.totalPrice;
    }
};

menu.addDishToCourse('appetizers', ' salad',  5);

menu.addDishToCourse('appetizers', 'ceaser sause', 2);

menu.addDishToCourse('appetizers', 'wings', 10);

menu.addDishToCourse('mains', 'steak', 25);

menu.addDishToCourse('mains', 'pasta', 15.50);

menu.addDishToCourse('mains', 'pizza', 12.30);

menu.addDishToCourse('desserts', 'cake', 13.60);

menu.addDishToCourse('desserts',  'ice cream', 10.50);

menu.addDishToCourse('desserts', 'pudding', 8.30);

let meal = menu.generateRandomMeal();

console.log(meal);