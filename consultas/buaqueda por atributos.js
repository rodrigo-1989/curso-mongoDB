//]Introducir un nuevo elemento con atributos diferentes a los demas
var user1 = {
	name:'Rafael',
	email:'rafael@codigofacilito.com',
	support:true,
	ceateAt: new Date()
}

****************************************************************************
		$exists
		$type
****************************************************************************
//obtener a todos los usuarios que posean   apellido

db.user.find({
	last_name:{
		$exists: true
	}
})
//Obtener a todos los usuarios cuyo atributo createAt se de tipo Date()

 db.user.find( { ceateAt:{$type:'date' } })


 //Estos son los tipos de datos mas comunes en mongo

Tipo						Número			Alías
Double							1			'double'
String							2			'string'
Object							3			'Object'
Array							4			'array'
ObjectId						7			'objectId'
Boolean							8			'boolean'
Date							9			'date'
Null							10			'null'
Regular Expression				11			'regex'
Timestamp						17			'timestamp'

