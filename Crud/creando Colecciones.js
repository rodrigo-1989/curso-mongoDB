//insert one

var user2 = {
	name:'julio',
	last_name:'Lopez',
	age:31,
	email:'juilo@codigofacilito.com'
}

//ahora vamos a insertar el segistro
db.users.insertOne(user2)

//insertMany() para insertar mas de un usuario a la vez

var user3 = {
	name:'Santiago',
	last_name:'Mendez',
	age:32,
	email:'santiago@codigofacilito.com'
}
var user4 = {
	name:'Yuridia',
	last_name:'Sanchez',
	age:25,
	email:'juilo@codigofacilito.com'
}
var user5 = {
	name:'Erick',
	last_name:'Lopez',
	age:30,
	email:'erick@codigofacilito.com'
}
db.user.insertMany([user3,user4,user5]);

//Insertando una nueva colleccion
db.books.insertMany(
    [
        {title: "Don Quijote de la Mancha", sales: 500},
        {title: "Historia de dos ciudades", sales: 200},
        {title: "El señor de los anillo", sales: 150},
        {title: "El principito", sales: 140},
        {title: "El hobbit", sales: 100},
        {title: "Alicia en el país de las maravillas", sales: 100},
        {title: "El codigo Da Vinci", sales: 80},
        {title: "El alquimista", sales: 65}
    ]
)