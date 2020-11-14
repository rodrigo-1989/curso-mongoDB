****************************************************************************
		remove()     		-->  Eliminar documentos
		dropDatabase()		--> Eliminar una base de datos
		drop()				--> Eliminar un acoleccion
****************************************************************************
//eliminar el documento cuyo nombre es luis

db.user.remove({
	name:'Luis'
})

//Remover todos los documentos de una coleccion

db.users.remove({})

//Eliminar la coleccions usuarios
db.users.drop()

//Eliminar la base de datos
db.dropDatabase()

