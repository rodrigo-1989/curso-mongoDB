************************************************************************************************
	findAndModify()			--> Buscar y modificar
************************************************************************************************
//Buscar al usuario con nombre rafael y modificarle su edad incrementandola en 1
//Recordar que query es la consulta y update es el atributo que se modificara

db.user.findAndModify({
	query:{
		name:'Rafael'
	},
	update:{
		$inc:{
			age:1
		}
	}
})//Esto te regresa el ducumento pero antes de su modificacion 
//siq quieres ves ese documento despues de su modificacion hay que agregar lo siguiente
db.user.findAndModify({
	query:{
		name:'Rafael'
	},
	update:{
		$inc:{
			age:1
		}
	},
	new:true
})




