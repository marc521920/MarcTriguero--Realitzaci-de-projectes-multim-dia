let titulo = document.getElementById("titulo");
        
        let elemento = document.getElementById("importante");
ejercicio()
{
       let titulo = document.getElementById("titulo");
        
        let elemento = document.getElementById("importante");
        console.log("nodeName: " + elemento.nodeName);
        console.log("textContent: " + elemento.textContent);
        console.log("innerHTML: " + elemento.innerHTML);
        console.log("outerHTML: " + elemento.outerHTML);
        console.log("Elemento con Id=titulo: "+ titulo );
        titulo.textContent = "Esta página es increíblemente simple";
        document.getElementById("caracas").src = "https://via.placeholder.com/300";
}
ejercicio();