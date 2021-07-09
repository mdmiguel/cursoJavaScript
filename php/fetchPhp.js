
let pruebaPhp = () => 
fetch (`http://localhost/php/prueba.php`)
.then(response => response.json())
.then(json => console.log(json[0]))
.catch(error => console.error(error))

let result = async () => {
	await pruebaPhp()
}

result()