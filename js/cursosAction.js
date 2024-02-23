// MENUES

//<iframe width="560" height="315" src="https://www.youtube.com/embed/nHakTezQiao?si=uVlh60-Swc9FR_yJ" 
//title="YouTube video player" frameborder="0" 
//allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
//allowfullscreen></iframe>

function changeWindow() {

    const menuContainer = document.getElementById("menuContainer");
  
    while (menuContainer.firstChild) {
        menuContainer.removeChild(menuContainer.firstChild);
    }
    return menuContainer;
  
}
  
const menuContainer = document.getElementById("menuContainer");
  
const menuInto = document.getElementById("menuInto");
const menuDesc = document.getElementById("menuDesc");
const menuObj = document.getElementById("menuObj");
const menuTitu = document.getElementById("menuTitu");
const menuCrt = document.getElementById("menuCrt");

// Genero el video de intoduccion
menuInto.addEventListener("click", () => { 
    
    const menuContainer = changeWindow();

    const iframe = document.createElement("iframe");
    iframe.setAttribute("width", "560");
    iframe.setAttribute("height", "315");
    iframe.setAttribute("src", "https://www.youtube.com/embed/nHakTezQiao?si=uVlh60-Swc9FR_yJ");
    iframe.setAttribute("title", "YouTube video player");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
    iframe.setAttribute("allowfullscreen", "");

    menuContainer.appendChild(iframe);

});

//Genero un texto informativo del curso
menuDesc.addEventListener("click", () => { 
    
    const menuContainer = changeWindow();

    const text = document.createElement("p");

    text.textContent = "Descubre el potencial oculto dentro de ti y aprende a convertir tus habilidades en una fuente de éxito empresarial. En nuestra plataforma de cursos online vanguardista y moderna, nos enfocamos en potenciar tus capacidades para que no solo vendas, ¡sino que también emprendas con confianza! Desde estrategias innovadoras de ventas hasta técnicas emprendedoras probadas, este curso te brindará las herramientas esenciales para destacarte en el mundo de los negocios actual. Prepárate para transformar tu talento en emprendimiento de la mano de expertos y métodos actualizados. ¡Tu viaje hacia el éxito comienza aquí!"
    
    menuContainer.appendChild(text);

});

//Genero una lista de objetivos para el curso
menuObj.addEventListener("click", () => { 
    
    const menuContainer = changeWindow();

    const br = document.createElement("br");
    const br2 = document.createElement("br");
    const br3 = document.createElement("br");
    const br4 = document.createElement("br");

    const item1 = document.createElement("h4");
    item1.textContent = "1.Módulos de Autodescubrimiento";

    const item2 = document.createElement("h4");
    item2.textContent = "2.Estrategias de Ventas Innovadoras";

    const item3 = document.createElement("h4");
    item3.textContent = "3.Desarrollo de Marca Personal";

    const item4 = document.createElement("h4");
    item4.textContent = "4.Técnicas de Marketing Digital de Última Generación";

    const item5 = document.createElement("h4");
    item5.textContent = "5.Sesiones de Mentoría en Vivo";
    
    menuContainer.appendChild(item1);
    menuContainer.appendChild(br);
    menuContainer.appendChild(item2);
    menuContainer.appendChild(br2);
    menuContainer.appendChild(item3);
    menuContainer.appendChild(br3);
    menuContainer.appendChild(item4);
    menuContainer.appendChild(br4);
    menuContainer.appendChild(item5);

});

//Genero cards con los titulares del curso
menuTitu.addEventListener("click", () => { 
    
    const menuContainer = changeWindow();

    const card = document.createElement("div");
    const row = document.createElement("div");
    const img = document.createElement("img");
    const col1 = document.createElement("div");
    const col2 = document.createElement("div");
    const body = document.createElement("div");
    const title = document.createElement("h5");
    const text = document.createElement("p");
    const small = document.createElement("p");
    const small2 = document.createElement("small");

    card.classList.add("card");
    card.classList.add("mb-3");

    row.classList.add("row");
    row.classList.add("g-0");

    img.classList.add("img-fluid");
    img.classList.add("rounded-start");
    img.setAttribute("src", "./image/feli_formal.jpeg");
    img.setAttribute("width", "500");

    col1.classList.add("col-md-4");
    col2.classList.add("col-md-8");

    body.classList.add("card-body");

    title.classList.add("card-title");
    title.textContent = "Felipe Gomez Flores"

    text.classList.add("card-text");
    text.textContent = "Felipe Gómez Flores, reconocido líder en el campo del emprendimiento, cuenta con una destacada trayectoria como instructor de un innovador curso para emprendedores de vanguardia. Con una sólida formación académica y una amplia experiencia práctica en el mundo empresarial, el Profesor Gómez Flores ha desarrollado una metodología única que fusiona teoría y práctica para inspirar a sus estudiantes."

    small.classList.add("card-text");

    small2.classList.add("text-muted");
    small2.textContent = "Docente titular"


    menuContainer.appendChild(card);
    card.appendChild(row);
    row.appendChild(col1);
    col1.appendChild(img);
    row.appendChild(col2);
    col2.appendChild(body);
    body.appendChild(title);
    body.appendChild(text);
    body.appendChild(small);
    small.appendChild(small2);

});

//Imagen del certificado del curso
menuCrt.addEventListener("click", () => { 
    
    const menuContainer = changeWindow();

    
    const img = document.createElement("img");
    

    img.classList.add("img-fluid");
    img.classList.add("rounded-start");
    img.setAttribute("src", "./image/certificado.jpg");
    img.setAttribute("width", "500");

    

    menuContainer.appendChild(img);
    

});

/*
<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
*/