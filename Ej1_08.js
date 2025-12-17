// Ej1_08.js
        function escribeTecla(letra) {
                console.log(String.fromCharCode(letra));
                let miTexto = document.getElementById("miTexto");
                
                if ( miTexto.textContent.length < 5){
                        miTexto.textContent += String.fromCharCode(letra);
                        
                }
                else {
                        console.log("largo");
                }
                
        }
        function borrarLetra() {
                let miTexto = document.getElementById("miTexto");
                if (miTexto.textContent.length > 0) {
                        miTexto.textContent = miTexto.textContent.substring(0, miTexto.textContent.length - 1);
        }
        }
        let numeroActual = 0;
        function comprobar() {
                let miTexto = document.getElementById("miTexto");
                TextoComprobar = miTexto.textContent.split("");
                
                
                let resultadoComprobacion = document.getElementById("resultadoComprobacion");
                
                console.log("Comprobando la palabra: " + TextoComprobar);
                
                let color = 0;
                if (TextoComprobar.length < 5) {
                        alert("La palabra debe tener 5 letras.");
                        
                }
                else {
                        TextoComprobar.forEach(element => {
                let cuadradoActual = resultadoComprobacion.children[numeroActual];        
                        palabra.split("").forEach(element2 => {
                                if (element === element2 && TextoComprobar.indexOf(element) === palabra.split("").indexOf(element2)) {
                                        cuadradoActual.style.backgroundColor = "green";
                                        color++;
                                        console.log("es verde");
                                } else if(element === element2 && color === 0){
                                        cuadradoActual.style.backgroundColor = "yellow";
                                        color++;
                                        console.log("es amarillo");
                                }
                                
                        });
                        if (color == 0) {
                                cuadradoActual.style.backgroundColor = "red";
                        }
                        
                        cuadradoActual.textContent = element.toString();
                        console.log("element: " + element.toString());
                        color = 0;
                        numeroActual++;
                        
                        console.log("numeroActual: " + numeroActual);
                        

                        
                });
                console.log("ComprobacionEjectutada");
                }
                
        }
        let palabra = "";
        function palabraSecreta() {
                fetch('https://random-word-api.herokuapp.com/word?lang=es&length=5')
                .then(response => response.json())
                .then(data => {
                palabra = data[0]; // La API devuelve un array, ej: ["perro"]
          
                palabra=palabra.toUpperCase();
                console.log("Tu palabra secreta es:", palabra);

         });

        }

document.addEventListener('DOMContentLoaded', () => {
        const titulo = document.getElementById('titulo');
        const elemento = document.getElementById('importante');
        const caracas = document.getElementById('caracas');
        const listaPalabras = [""]


        console.log('Elemento con Id=titulo:', titulo);

        if (titulo) {
                // Tu código: Cambia el texto del título
                titulo.textContent = 'Esta página es increíblemente simple';
        }

        if (caracas) {
                // Tu código: Cambia el src de la imagen
                caracas.src = 'https://via.placeholder.com/300';
        }

        let parrafoSegundo = document.createElement('p');
        parrafoSegundo.textContent = "caraculo";

        document.body.appendChild(parrafoSegundo);

        // --- MOVEMOS numerico() AQUÍ ---

        tecladoFunction();
        palabraSecreta();

        function numerico() {
                let tecladoNumerico = document.getElementById("tecladoNumerico");
                let numero = prompt("Introduce un número (Ej. 10 para crear 10 teclas):");

                // Convertimos el número a entero y validamos
                let limite = parseInt(numero);
                if (isNaN(limite) || limite <= 0) {
                        alert("Entrada inválida. No se creará el teclado.");
                        return;
                }

                for (let i = 1; i <= limite; i++) {
                        let tecla = document.createElement("div");

                        // Tu código: Crea el div y le asigna el número
                        tecla.innerHTML = "<p>" + i + "</p>";
                        tecla.className = "tecla"; // <<-- Esta clase es clave para el CSS

                        // --- AÑADIMOS FUNCIONALIDAD DE CLICK ---
                        cambiarFondoTeclado(i, tecla);
                        tecla.addEventListener('click', function () {
                                // Obtenemos el texto del párrafo interno (el número)
                                const valor = this.querySelector('p').textContent;
                                console.log(`Tecla presionada: ${valor}`);
                                alert(`¡Presionaste la tecla número ${valor}!`);
                        });
                        // ----------------------------------------

                        tecladoNumerico.appendChild(tecla);
                }
        }
        function cambiarFondoTeclado(i, tecla) {
                if (i % 2 === 0) {
                        tecla.style.backgroundColor = "#555";
                } else {
                        tecla.style.backgroundColor = "#777";
                }
        }

        function tecladoFunction() {
                let teclado = document.getElementById("teclado");
                let borrar = document.getElementById("borrarLetra");
                let resultadoComprobacion = document.getElementById("resultadoComprobacion");
               

                for (let i = 65; i <= 90; i++) {
                        let tecla = document.createElement("div");

                        tecla.innerHTML = "<p>" + String.fromCharCode(i) + "</p>";
                        tecla.className = "tecla"; 
                        tecla.setAttribute('onclick', "escribeTecla('" + i + "')");
                        borrar.setAttribute('onclick', "borrarLetra()");

                        comprobarLetra.setAttribute('onclick', "comprobar()");
                        teclado.appendChild(tecla);
                }

                for (let k = 1; k <= 6; k++) {
                        for (let j = 1; j <= 5; j++) {
                        let tecla = document.createElement("div");

                        tecla.innerHTML = "<p>" + String.fromCharCode(j) + "</p>";
                        tecla.id = "casillaRespuesta"; 
                        
                        

                        comprobarLetra.setAttribute('onclick', "comprobar()");
                        resultadoComprobacion.appendChild(tecla);
                        }
                        
                }

        }
      
});