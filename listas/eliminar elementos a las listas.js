************************************************************************************************
			$pull			--> Elimina un elemento de la lista 
			$pop 			--> Elimina un elemento de la lista
************************************************************************************************

//Eliminar el curso Python para los elemenos Erick y Rafael

db.user.updateMany({
	courses: { $exists:true}
},{
	$pull:{
		courses:'Python'
	}
})
//Ahora vamos a Eliminar los cursos python y Base de Datos para Rafael para los elemenos Erick y Rafael
db.user.updateMany({
	courses:{ $exists:true }
},{
	$pull:{
		courses:{
			$in:['python', 'Base de Datos']
		}
	}
}) 
//Ahora vamos a eliminar el curso Sql de rafael y el curso Rust de erick
db.user.updateMany({
	courses:{ $exists:true }
},{
	$pull:{
		courses:{
			$in:['Sql', 'Rust']
		}
	}
}) 




