****************************************************************************
		$gt  ---> Greater than          | >
		$gte ---> Greater than Equal    | >=
		$lt  ---> Less than             | <
		$lt  ---> Less than Equal       | <=
****************************************************************************
//Obtener todos los usuarios cuya edad sea mayor a 20
db.user.find({
	age:{ $gt:20 }
})

//Obtener todos los usuarios cuya edad sea mayor o igual a 30
db.user.find({
	age:{ $gte:30 }
})

//Obtener todos los usuarios cuya edad sea menor o igual a 30
db.user.find({
	age:{ $lt:30 }
})
db.user.find({
	age:{ $lte:30 }
})

****************************************************************************
		$and y $or 
****************************************************************************

//Obtener a todos los usuarios que tengan una edad mayor a 30 y menor a 35
 db.user.find({
 	$and:[ { age:{ $gt:30 } },
	   	   { age:{ $lt:35 } }  ]
 })

//Obtener a todos los usuarios que tengan por nombre Santiago o Erick 
db.user.find({
 	$or: [{ name:'Santiago'  },
	   	   { name: 'Erick' } ]
 })

//Obtener todos los usuarios que cuyo nombre sean Erick o santiago o la edad mayor de 30 y menor a 32

db.user.find( { $or: [{ name:'Santiago' },{ name: 'Erick' },{ $and : [{ age:{gt:20 }}, { age:{ lt:32 }},]}]})




