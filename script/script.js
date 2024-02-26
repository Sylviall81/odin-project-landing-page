

document.addEventListener("DOMContentLoaded", function() {

     // Datos de ejemplo para los tiles
 const tileData = [
    { title: "Tile 1", subtext: "This is some subtext under an illustration or image" },
    { title: "Tile 2", subtext: "This is some subtext under an illustration or image" },
    { title: "Tile 3", subtext: "This is some subtext under an illustration or image" },
    { title: "Tile 4", subtext: "This is some subtext under an illustration or image" }
];
   

    // Obtener el contenedor de los tiles
    const infoTilesContainer = document.getElementById("info-tiles");
    console.log(infoTilesContainer)

    
    // Iterar sobre los datos y crear los tiles
    tileData.forEach(function(tile) {
         // Crear un div para el tile
         const tileDiv = document.createElement("div");
         tileDiv.classList.add("info-tile");

        // Crear el contenido del tile (título y subtexto)
        // const title = document.createElement("h3");
        // title.textContent = tileData.title;

        // const subtext = document.createElement("p");
        // subtext.textContent = tileData.subtext;

        // Añadir el contenido al div del tile
        // tileDiv.appendChild(title);
        // tileDiv.appendChild(subtext);

        // Añadir el tile al contenedor principal
  infoTilesContainer.appendChild(tileDiv);
     });
 });


