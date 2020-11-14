****************************************************************************
		like
****************************************************************************
//Buscar todos los libros cuyo titlo conmience con el
db.books.find({
	title:/^El/
})
//Buscar todos los libros cuyo titlo termine con s
db.books.find({
	title:/s$/
})
//Buscar todos los libros cuyo pea en su titulo la palabra la
db.books.find({
	title:/la/
})
****************************************************************************
		$in
		$nin
****************************************************************************
//ontener a todo slos usuarios con los nombres Yuridia o Santiago o Erick

db.user.find({
	$or:[{
			name:'Yuridia'
		},{
			name:'Santiago'
		},{
			name:'Erick'
		}]
}).pretty()

//Buscar en la lista mas de 10 elementos, para eso usaremos el operador $in
//esta es la misma consulta que la de arriba pero con el operador $in 
db.user.find({
	name:{
		$in:['Yuridia','Santiago','Erick']
	}
}).pretty()

//Ahora buscar todos los nombres que esten en la coleccion pero que no esten dentro de la siguiente lista
//$nin es la contra parte del operdor in
db.user.find({
	name:{
		$nin:['Yuridia','Santiago']
	}
}).pretty()


