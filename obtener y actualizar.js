//en este caso primero obtendremos el archivo de la coleccion mediante un avariable
//despues se procede a hacer el cambio en el atributo que se desea
//y para terminar se persiste el elemento en la base de datos
// Recordar que el metodo save() recibe un objeto y si este tiene el atributo 
// id lo actualiza de lo contrario crea un nuevo registro en la coleccion
var rafael = db.user.findOne({
	name:'Rafael'
})

rafael.support = false

db.user.save(rafael)

//ahora agreagr un nuevo atributo para el objeto rafael 

rafael.age = 27
db.user.save(rafael)

****************************************************************************
		updateOne()			--> Actualiza un documento
		updateMany()		--> Actualiza mas de un documento
		$set				--> Crea o amodifica el atributo
		$unset				--> Elimina el atributo
****************************************************************************
//Actualizar todos nuestros documentos fon el atributo support

db.user.updateMany({
		support:{
			$exists:false
		}
},{
		$set:{
			support:false
		}
})
//Actualizar un solo documento en este caso erick

db.user.updateOne({
		name:'Erick'
},{
		$set:{
			support:true
		}
})

//Eliminar el atributo createAt para el documento de rafael
db.user.updateOne({
	ceateAt:{
		$exists:true
	}
},{
	$unset:{
		ceateAt:true
	}

})

****************************************************************************
		$inc				--> Incrementar
****************************************************************************

//incrementar en uno la edad de Rafael

db.user.updateOne({
	name:'Rafael'
},{
	$inc:{
		age: 1
	}
})
//Ahora decrementar la edad de Rafael pero ahora le quitaremos 10 años

db.user.updateOne({
	name:'Rafael'
},{
	$inc:{
		age: -10
	}
})
****************************************************************************
		upsert()	--> Actualiza o inserta un documento si no lo encuentra
****************************************************************************
//Actualizar el documento cuyo nombre sea luis y establece su edad en 27
//Si no se encuentra el documento tiene que ser creado

db.user.updateOne({
		name:'Luis'
},{
	$set:{
		age:28
	}
},{
	upsert:true
})









