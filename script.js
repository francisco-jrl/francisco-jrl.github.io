let menuVisible = false;
// Funcio9n que oculta o muestra el menu

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //ocultar el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}



//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("ofimatica");
        habilidades[1].classList.add("photoshop");
        habilidades[2].classList.add("ilustrator");
        habilidades[3].classList.add("afef");
        habilidades[4].classList.add("camtasia");
        habilidades[5].classList.add("davinci");
        habilidades[6].classList.add("computacion");
        habilidades[7].classList.add("trbequipo");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("dedicacion");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 