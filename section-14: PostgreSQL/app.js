const pgp = require('pg-promise')()
const connectionString = 'postfres://localhost:5432/nailasgarden'
const db = pgp(connectionString);

console.log(db);

//if not returning db.none is used
/*db.none('INSERT INTO dishes(name,course,price,imageURL) VALUES($1,$2,$3,$4)',['Ceasar Salad','Entrees', 8.50,'salad.png'])
.then(()=> {
    console.log("SUCCESS")
}).catch(error => console.log(error));*/



// HOW TO CREATE AN ENTRY
// db.one('INSERT INTO dishes(name,course,price,imageURL) VALUES($1,$2,$3,$4) RETURNING dishid',['Hot Soup','Entrees', 11.0,'pizza.png'])
// .then((data)=> {
//     console.log(data.dishid)
// }).catch(error => console.log(error));



// HOW TO RECEIVE RECORDS
// db.any('SELECT name,course,price,imageURL FROM dishes;')
// .then((dishes) => {
//     console.log(dishes)
// }).catch(error => console.log(error))




// HOW TO UPDATE RECORDS
db.none('UPDATE dishes SET price = $1, course = $2, imageURL = $3 WHERE dishid = $4', [6.50, 'Starter', 'soup.png', 7])
.then(() => {
    console.log("UPDATED")
}).catch(error => console.log(error))

// HOW TO DELETE RECORDS
db.none('DELETE FROM dishes WHERE dishid = $1', [6])
.then(() => {
    console.log("DELETED")
}).catch(error => console.log(error))