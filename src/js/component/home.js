import React, { useState, useEffect } from "react";
// LOS COMPONENETES SON FUNCIONES QUE RECIBEN COMO PARAMETROS LAS PROPIEDADES props (QUE VIENEN DEL main/index.js)
// ESTOS COMPONENTES CONTIENEN EL CONTENIDO DEL html

export function Home(props) {
	const [counter, setCounter] = useState(0);

	useEffect(
		() => {
			console.log("Entro");
			return function() {
				// FUNCION DE CIERRE
				console.log("Salgo");
			};
		},
		[counter]
	);

	return (
		<main className="page">
			<h1 onClick={() => setCounter(counter + 1)}>Contador: {counter}</h1>
		</main>
	);
}
