************************************************************************************************
			$push			--> Introduce un elemento al final de la lista
			$each			--> Hace la funcion de un ciclo
************************************************************************************************
//Agregarle el curso python a sus cursos de rafael

db.user.updateOne({
	name:'Rafael'
},{
	$push:{
		courses:'python'

	}
})
//Ahora hay aque agregarle mas de un curso a la lista de cursos de Erick
db.user.updateOne({
	name:'Erick'
},{
	$push:{ courses:{
		$each:['Django','Rails','Rust']
		}
	}
})
************************************************************************************************
			$position		--> indica la posision en la que quieres insertar un nuevo elemento
			$sort			--> Ordena las listas
************************************************************************************************
//Ahora le agregaremos un curso mas a Rafael pero indicando que sea en la posision 0
db.user.updateOne({
	name:'Rafael'
},{
	$push:{
		courses:{
			$each:['Base de Datos'],
			$position:1
		}
	}
})
//Ahora insertar dos elemento mas apartir de la seguna posision

db.user.updateOne({
	name:'Rafael'
},{
	$push:{
		courses:{
			$each:['C#','Python'],
			$position:1
		}
	}
})
//ahora vamos actualizar primero las calificaciones de y procederemos a ordenarlas Yuridia y santiago
db.user.updateOne({
	name:'Santiago'
},
{
	$push:{
		scores:{
			$each:[10,10],
			$sort:1
		}
	}
})
db.user.updateOne({
	name:'Yuridia'
},
{
	$push:{
		scores:{
			$each:[7,7],
			$sort:-1
		}
	}
})
