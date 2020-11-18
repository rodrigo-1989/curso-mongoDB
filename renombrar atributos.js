************************************************************************************************
	$rename()		--> renombra un atributo de un elemento en una coleccion
************************************************************************************************
//modificar el atributo last_name por lastName en la colleccion user

db.user.updateMany(
	{},
	{
		$rename:{
			last_name:'lastName'
		}
	})




