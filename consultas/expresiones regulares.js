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


