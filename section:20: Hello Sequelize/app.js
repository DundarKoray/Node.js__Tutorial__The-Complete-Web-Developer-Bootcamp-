const models = require('./models')

//FETCHING ALL DATA FROM THE DISH TABLE
// models.Dish.findAll().then((dishes)=> {
//     console.log(dishes)
// })


// FETCHING ONE ITEM FROM THE DISH TABLE
// models.Dish.findAll({
//     where: {
//         name: 'Inegöl Meatballs'
//     }
// }).then((dish) => {
//     console.log(dish)
// })


// FETCHING ONE ITEM FROM THE DISH TABLE
// models.Dish.findByPk(3)
// .then((dish) => {
//     console.log(dish)
// })

// INSERTING DATA INTO THE DISH TABLE
// let dish = models.Dish.build({
//     name: 'Fresh Spring Rolls',
//     description: 'Healthy version of fried spring rools, made with rice paper',
//     price: 6.00
// })

// dish.save().then((savedDish) => {
//     console.log(savedDish)
// })

// UPDATING AN ENTRY FROM THE DATABASE
// models.Dish.update({
//     name: 'Vietnamese Fresh Spring Rolls',
//     price: 7.50
// }, {
//     where: {
//         id: 3
//     }
// }).then((dish) => console.log(dish))

// DELETE AN ENTRY
models.Dish.destroy({
    where: {
        id: 3
    }
}).then((dish) => console.log(dish))