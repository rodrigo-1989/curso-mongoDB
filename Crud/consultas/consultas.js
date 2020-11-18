db.users.find()

//Obtener a todos los usuarios con la edad de 31 años
db.users.find({age:31})

//en la siguiente consulta se busca el mismo elemento pero el metodo pretty le da un mejor formato para mostrarlo
db.users.find({age:31}).pretty()
//Ahora nos interesa extraer solo el nombre y el correo del mismo elemento
db.users.find(
	{age:31},
	{email:true, name:true}
	).pretty()
//El id Siempre se envia en la respuesta por defaul pero si queremos no extraerlo necesitamos
//especificarlo como falso en la consulta
db.users.find(
	{age:31},
	{email:true, name:true,_id:false}
	).pretty()
//Ahora queremos extraer todos los atributos excepto la edad
db.users.find(
	{age:31},
	{age:false}
	).pretty()

****************************************************************************
		$ne  ---> Not Equals   | !=
		$eq  ---> Equals       | ==
****************************************************************************

//Ahora vamos hacer busquedas cuyos atributos sean diferentes ?!= A 
//Obtener todos los usuarios cuya edad sea diferente a 25

db.user.find(
		{
			age:{
				$ne:25
			}
		}
	).pretty()
//Obteber todos los usuarios que tengan una edad igual a 25
db.user.find(
		{
			age:{
				$eq:25
			}
		}
	).pretty()
****************************************************************************
		findOne()  ----> obtener un solo documento
****************************************************************************
//Extraer al primer elemenento que tenga una edad diferente a 25 años
//recordar que conel metodo findOne no se puede utilizar el metodo pretty()
//recordar tambien si mandas findOne() sin argumentos, te resultara el primer elemento de la colleccion
db.user.findOne(
		{
			age:{
				$ne:25
			}
		}
	)



