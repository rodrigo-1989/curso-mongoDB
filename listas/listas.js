db.user.updateOne({
		name:'Rafael'
},{
	$set:{
		courses:['Mongo','JavaScript','Sql','Java']
	}
})
db.user.updateOne({
		name:'Erick'
},{
	$set:{
		courses:['Python','Git','Redes']
	}
})
//Obtener al usuario que posea los cursos Mongo,JavaScript,Sql,Java

db.user.findOne({
	courses: ['Mongo','JavaScript','Sql','Java']
})
//recuerda que la consulta tambien sepuede realizar con el operador equals 
db.user.findOne({
	courses:{ 
		$eq:['Mongo','JavaScript','Sql','Java']
	}
})
************************************************************************************************
			$all			--> Obtener a todos los items que posean un atributo
************************************************************************************************
//Obtener a todos los usuarios que tengan Mongo en sus cursos

db.user.find({
	courses:{
		$all:['Mongo']
	}
})
//Obtener a todos los usuarios que tengan Mongo y Sql  en sus cursos
//Recordar que all funciona como and 
db.user.find({
	courses:{
		$all:['Sql','Mongo']
	}
}).pretty()
//Obtener todos los usuarios que tengan Mongo  o Sql en sus cursos pero ahora se hara sin necesidad
//de mandarle el operador $all

db.user.find({
	courses: 'Mongo'
}).pretty()
//Ahora hacer lo mismo pero con el operador and

db.user.find({
	$and:[
	{ courses:'Mongo' },
	{ courses:'Sql' }
	]
}).pretty()

//Encontrar a los usuarios que tengan en sus cursos Python o mongo
db.user.find({
	$or:[
	{ courses:'Mongo' },
	{ courses:'Python' }
	]
}).pretty()

//Agregar calificaciones a los elementos Yuridia y santiago
db.user.updateOne({
	name:'Yuridia'
},
{
	$set:{
		scores:[9,8,9,5,10]
	}
})
db.user.updateOne({
	name:'Santiago'
},
{
	$set:{
		scores:[10,9,9,8,10]
	}
})
//obtener a todos los ususarios que posean por lo menos una calificacion de 10
db.user.find({
	scores: 10
})
//Obtener todos los usuarios que hayan reporbado por los menos una calificacion 
db.user.find({
	scores:{
		$lt:6
	}
}).pretty()



