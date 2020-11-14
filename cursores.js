************************************************************************************************
	find()			--> Retorna un cursor
	pretty()		--> Te mostrara de una mejor manera los documetos para leerlos	
	clount()		--> Te devolvera cuantos documentos hay en una colleccion

	limit()			--> Limitar la obtencion de documetos al momento de consultar
	skip()			--> Saltarse entre elementos de una coleccion
	sort()			--> Regresa una busqueda pero ordenada 1 = ascendente, -1 descendente
************************************************************************************************
//Lo siguiente es lo para crear una coleccion con 100 elementos
for ( i = 0 ; i < 100; i++) {
	db.demo.insert({
		name:'User '+i
	})
}

//Obtener totos cuantos usuarios de la collecion user tienen correo de codigo facilito

db.user.find({
	email:/codigofacilito.com$/
}).count()

//Obtener los primeros 5 usuarios de la coleccion demo

db.demo.find().limit(5)

// Obtener el 3er usuario de la coleccion user

db.user.find().skip(2).limit(1)

//Obtener el nombre de todos los usuarios ordenado alfabeticamente 
db.user.find({

},{
	_id:false,
	name:true
}).sort({
	name: 1
})
//Recuerda que los ultimos 3 retornan nuevos cursores por lo tanto los puedes conbinas

//obtener el tercer usuario ordenado por su nobre de forma descendente

db.user.find().sort({ name:1}).skip(2).limit(1)









