function sum(a, b) {
	return a + b;
}

//named export
//ter varios  exports
//precisa de chaves {sub}
//so pode chamar pelo nome
export function sub(a, b){
	return a - b;
}


function mult(a,b){
	return a * b;
}

function div(a,b){
	return a/b;
}

export { mult , div};

//metodo principal
//so pode ter um default por arquivo
//importar com qualquer nome
//nao precisa utilizar chaves
export default sum;