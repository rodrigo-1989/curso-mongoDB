************************************************************************************************
		$slice
		$size		-->Obtener por el tamaño de la lista
************************************************************************************************

//Cambiaremos las calificaciones de Santiago  y de Yuridia en su primera calificacion les pondremos 5
//Recordar que este ejemplo es cuado conocemos el indice
db.user.updateMany({
	scores:{ $exists: true }
},{
	$set: {
		'scores.3':4
	}
})
//Ahora vamos a cabiar la calificacion de los los pero donde tengan el 4
//Recordar que solo se se modificara un elemento de la lista, es decir 
//si tuvieramos mas de un cuatro en la lista solo se modificara el primero que se encuentre
db.user.updateMany({
	 scores:{ $exists:true},
	 scores:9
},
{
	$set:{
		'scores.$':8
	}
})
//Obtenber el todos  los cursos que tenga Erick 

db.user.findOne({
	name:'Erick'
},
{
	_id:false,
	name:true,
	courses:true
})
//ahora solo obtener el el primer  curso que tenga Erick 
db.user.findOne({
	name:'Erick'
},
{
	_id:false,
	name:true,
	courses:{
		$slice:1
	}
})
//obtener los tres  primeros  curso que tenga Erick 
db.user.findOne({
	name:'Erick'
},
{
	_id:false,
	name:true,
	courses:{
		$slice:[0,3]
	}
})

//Obtener totod los usuarios que tengan 5 cusrsos

db.user.find({
	courses:{
		$size:5
	}
}).pretty()
//Obtener todos los usuarios que tengan mas de 3 cursos
//En este caso se ante pone el operador and ya que al momenot de hacer la busqueda
// se hace elemento por elemento, pero como no todos los elemento contienen el 
//atributo courses se especifica que la busqueda se ara solo en estos
db.user.find({
	$and:[
		{ courses:{ $exists:true }
		 },
		{
			$where:'this.courses.length > 3'
		}
	]
	
})













