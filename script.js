/*Import para fuente*/
@import url('https://fonts.googleapis.com/css2?family=Righteous&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');

/*Configuracion de estilos generales*/
*{
    box-sizing: border-box;
    font-family: 'Work Sans';
    margin: 0;
    padding: 0;
}

html{
    /*Me permite deslizar cuando hago clic en los links del menu*/
    scroll-behavior: smooth;
}

/*Menu*/
.contenedor-header{
    background: #1e2326;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 99;
}

.contenedor-header header{
    max-width: 1100px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
}

.contenedor-header header .logo a{
    font-family: "Righteous", serif;
    font-size: 36px;
    color: #ffff;
    text-decoration: none;
}

.contenedor-header header ul{
    display: flex;
    list-style: none;
}

.contenedor-header header nav ul li a{
    text-align: none;
    color: #ffff;
    margin: 0 15px;
    padding: 3px;
    transition: .5s;
    text-decoration: none;
}

.contenedor-header header nav ul li a:hover{
    color: #f6cd00;
}

.nav-responsive{
    background-color: #ffff;
    color: #f62100;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    display: none;
}

/*SECCION - INICIO*/

#inicio{
    background: linear-gradient(to top, rgba(30,35,38,.8), rgba(30,35,38,1)),
     url(img/background.jpg);
    background-size: cover;
    height: 100vh;
    color: #ffff;
    display: flex;
    align-items: center;
}

#inicio .contenido-banner{
    padding: 20px;
    background-color: #1e2326;
    max-width: 350px;
    margin: auto;
    text-align: center;
    border-radius: 40px;
}

#inicio .contenido-banner img{
    margin-top: 40px;
    border: 5px solid #1cb698;
    display: block;
    width: 80%;
    margin: auto;
    border-radius: 50%;
}

#inicio .contenido-banner .contenedor-img{
    margin-bottom: 25px;
}

#inicio .contenedor-header h1{
    margin-top: 40px;
    font-size: 42px;
    font-family: 'Righteous';
}

#inicio .contenido-banner h2{
    font-size: 15px;
    font-weight: normal;
}

#inicio .contenido-banner .redes a{
    color: #ffff;
    display: inline-block;
    text-decoration: none;
    border: 1px solid #ffff;
    border-radius: 100%;
    width: 42px;
    height: 42px;
    line-height: 42px;
    margin:  40px 5px;
    font-size: 20px;
    transition: .3s;
}

#inicio .contenido-banner .redes a:hover{
    background-color: #1cb698;
}

/*SECCION - SOBRE MI*/

.sobremi{
    background-color: #1e2326;
    color: #ffff;
    padding: 50px 20px;
}

.sobremi .contenido-seccion{
    max-width: 1100px;
    margin: auto;
}

.sobremi h2{
    font-size: 48px;
    font-family: 'Righteous';
    text-align: center;
    padding: 20px 0;
}

.sobremi .contenido-seccion p{
    font: 18px;
    line-height: 22px;
    margin-bottom: 20px;
}

.sobremi .contenido-seccion p span{
    color: #1cb698;
    font-weight: bold;
}

.sobremi .fila{
    display: flex;
}

.sobremi .fila .col{
    width: 50%;
}



.sobremi .fila .col h3{
    font-size: 28px;
    font-family: 'Righteous';
    margin-bottom: 25px;
}

.sobremi .fila .col ul{
    list-style: none;
}

.sobremi .fila .col ul li{
    margin: 12px 0px;
}

.sobremi .fila .col ul li strong{
    display: inline-block;    
    color: #1cb698;
    width: 130px;
}

.sobremi .fila .col ul li span{
    background-color: #1cb698;
    padding: 3px;
    font-weight: bold;
    border-radius: 5px;
}

.sobremi .fila .col .contenedor-intereses{
    display: flex;
    flex-wrap: wrap;
}

@media screen and (max-width: 700px) {
    .sobremi .fila .col .contenedor-intereses{
        display: flex;
        justify-content: center;
    }

    .sobremi .fila .col h3{
        font-size: 28px;
        font-family: 'Righteous';
        margin-bottom: 25px;
        text-align: center;
    }
}

.sobremi .fila .col .contenedor-intereses .intereses{
    width: 100px;
    height: 100px;
    background-color: #252a2e;
    border-radius: 10px;
    margin: 0 15px 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: .3s;
}

.sobremi .fila .col .contenedor-intereses .intereses:hover{
    background-color: #1cb698;
}

.sobremi .fila .col .contenedor-intereses .intereses i{
    font-size: 30px;
    margin-bottom: 10px;
}

.sobremi .fila .col .contenedor-intereses .intereses span{
    font-size: 14px;
    text-align: center;
}

.sobremi button{
    cursor: pointer;
    background-color: transparent;
    border: 2px solid #ffff;
    width: fit-content;
    display: block;
    margin: 20px auto;
    padding: 10px 22px;
    font-size: 16px;
    color: #ffff;
    position: relative;
    z-index: 10;
}

.sobremi button .overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #1cb698;
    z-index: -1;
    transition: 1s;
}

.sobremi button:hover .overlay{
    width: 100%;
}


/*SECCION - Skills*/

.skills{
    background-color: #252a2e;
    color: #ffff;
    padding: 50px 20px;
}

.skills .contenido-seccion{
    max-width: 1100px;
    margin: auto;
}

.skills h2{
    font-size: 48px;
    font-family: 'Righteous';
    text-align: center;
    padding: 20px 0;
}

.skills .fila{
    display: flex;
}

.skills .fila .col{
    width: 50%;
    padding: 0 20px;
}

.skills .fila .col h3{
    font-size: 28px;
    font-family: 'Righteous';
    margin-bottom: 25px;
}

.skills .skill > span{
    font-weight: bold;
    display: block;
    margin-bottom: 10px;
}

.skills .skill .barra-skill{
    height: 8px;
    width: 80%;
    background-color: #131517;
    position: relative;
    margin-bottom: 30px;
}

.skills .skill .progreso{
    background-color: #1cb698;
    position: absolute;
    top: 0;
    left: 0;
    height: 8px;
}

.skills .skill .barra-skill span{
    position: absolute;
    height: 40px;
    width: 40px;
    background-color: #1cb698;
    border-radius: 50px;
    line-height: 40px;
    text-align: center;
    top: -17px;
    right: -15px;
    font-size: 14px;
}

/*SECCION - Barras Skills*/
.skills .skill .ofimatica{
    width: 0%;
    animation: 2s ofimatica forwards;
}

@keyframes ofimatica {
    0%{width: 0%;}
    100%{width: 85%;}
}

.skills .skill .photoshop{
    width: 0%;
    animation: 2s photoshop forwards;
}

@keyframes photoshop {
    0%{width: 0%;}
    100%{width: 65%;}
}

.skills .skill .ilustrator{
    width: 0%;
    animation: 2s ilustrator forwards;
}

@keyframes ilustrator {
    0%{width: 0%;}
    100%{width: 45%;}
}

.skills .skill .afef{
    width: 0%;
    animation: 2s afef forwards;
}

@keyframes afef {
    0%{width: 0%;}
    100%{width: 45%;}
}

.skills .skill .camtasia{
    width: 0%;
    animation: 2s camtasia forwards;
}

@keyframes camtasia {
    0%{width: 0%;}
    100%{width: 85%;}
}

.skills .skill .davinci{
    width: 0%;
    animation: 2s davinci forwards;
}

@keyframes davinci {
    0%{width: 0%;}
    100%{width: 25%;}
}

.skills .skill .computacion{
    width: 0%;
    animation: 2s computacion forwards;
}

@keyframes computacion {
    0%{width: 0%;}
    100%{width: 65%;}
}

.skills .skill .trbequipo{
    width: 0%;
    animation: 2s trbequipo forwards;
}

@keyframes trbequipo {
    0%{width: 0%;}
    100%{width: 70%;}
}

.skills .skill .creatividad{
    width: 0%;
    animation: 2s creatividad forwards;
}

@keyframes creatividad {
    0%{width: 0%;}
    100%{width: 75%;}
}

.skills .skill .dedicacion{
    width: 0%;
    animation: 2s dedicacion forwards;
}

@keyframes dedicacion {
    0%{width: 0%;}
    100%{width: 65%;}
}

/* Seccion Curriculum */

.curriculum{
    background-color: #1e2326;
    color: #ffff;
    padding: 50px 20px;
}

.curriculum .contenido-section{
    max-width: 1100px;
    margin: auto;
}

.curriculum h2{
    font-size: 48px;
    font-family: 'Righteous';
    text-align: center;
    padding: 20px 0;
}

.curriculum .fila{
    display: flex;
    justify-content: space-between;
}

.curriculum .fila .col{
    width: 49%;
    padding: 0 20px;
}

.curriculum .fila .col h3{
    font-size: 28px;
    font-family: 'Righteous';
    margin-bottom: 25px;
}

.curriculum .fila .izquierda{
    border-right: 2px solid #252a2E;

}

.curriculum .fila .derecha{
    border-left: 2px solid #252a2E;   
}

.curriculum .fila .item{
    padding: 25px;
    margin-bottom: 30px;
    background-color: #252A2E;
    position: relative;
}

.curriculum .fila .item h4{
    font-size: 20px;
    margin-bottom: 10px;
}

.curriculum .fila .item .casa{
    color: #1cb698;
    font-size: 22px;
    font-weight: bold;
    display: block;
}

.curriculum .fila .item .fecha{
    display: block;
    color: #1CB698;
    margin-bottom: 10px;
}

.curriculum .fila .item p{
    line-height: 24px;
}

.curriculum .fila .izq{
    border-right: 2px solid #1CB698;
    margin-right: 20px;
}

.curriculum .fila .drch{
    border-left: 2px solid #1CB698;
    margin-left: 20px;
}

.curriculum .fila .item .conectori{
    height: 2px;
    background-color: #1CB698;
    width: 47px;
    position: absolute;
    top: 50%;
    right: -47px;
    z-index: 5;
}

.curriculum .fila .item .conectori .circuloi{
    display: block;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: #1CB698;
    float: right;
    position: relative;
    bottom: 4px;
}

.curriculum .fila .item .conectord{
    height: 2px;
    background-color: #1CB698;
    width: 47px;
    position: absolute;
    top: 50%;
    left: -47px;
    z-index: 5;
}

.curriculum .fila .item .conectord .circulod{
    display: block;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: #1CB698;
    float: left;
    position: relative;
    bottom: 4px;
}


/*Seccion Portafolio*/
.portafolio{
    background-color: #252A2E;
    color: #ffff;
    padding: 50px 20px;
}

.portafolio .contenido-section{
    max-width: 1200px;
    margin: auto;
}

.portafolio h2{
    font-size: 48px;
    font-family: 'Righteous';
    text-align: center;
    padding: 20px 0;
}

.portafolio h5{
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    padding: 20px 0;
}

.portafolio .galeria .proyecto img{
    width: 340px;
}

.portafolio .galeria{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.portafolio .galeria .proyecto{
    position: relative;
    max-width: 340px;
    height: fit-content;
    margin: 10px;
    cursor: pointer;
}

.portafolio .galeria .proyecto img{
    width: 100%;
    display: block;
}

.portafolio .galeria .proyecto .overlay{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    background: linear-gradient(rgba(20,182,152,.8), rgba(28,182,152,.8));
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 1s;
    font-size: 18px;
    letter-spacing: 3px;
    opacity: 0;
    
}

.portafolio .galeria .proyecto .overlay h3{
    margin-bottom: 25px;
    transition: 0.5s;
}

.portafolio .galeria .proyecto .overlay:hover{
    opacity: 1;
}

.portafolio .galeria .proyecto .overlay:hover h3{
    font-size: 17px;
    margin-bottom: 0;
}

/*Seccion Contacto*/
.contacto{
    background-image: url(img/contact_bg.png);
    background-color: #1e2326;
    color: #ffff;
    padding: 50px 0;

}

.contacto .contenido-section{
    max-width: 1100px;
    margin: auto;
}

.contacto h2{
    font-size: 48px;
    font-family: 'Righteous';
    text-align: center;
    padding: 20px 0;
}

.contacto .fila{
    display: flex;
}

.contacto .col{
    width: 50%;
    padding: 10px;
    position: relative;
}

.contacto .col input, .contacto .col textarea{
    display: block;
    width: 100%;
    padding: 18px;
    border: none;
    margin-bottom: 20px;
    background-color: #252A2E;
    color: #ffff;
    font-size: 18px;
}

.contacto button{
    cursor: pointer;
    background-color: transparent;
    border: 2px solid #ffff;
    width: fit-content;
    display: block;
    margin: 20px auto;
    padding: 10px 22px;
    font-size: 16px;
    color: #ffff;
    position: relative;
    z-index: 10;
}

.contacto button .overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #1CB698;
    z-index: -1;
    transition: 1s;
}

.contacto button:hover .overlay{
    width: 100%;
}

.contacto .col img{
    width: 100%;
}

.contacto .col .info{
    position: absolute;
    top: 40%;
    background-color: #252A2E;
    padding: 20px;
    width: 415px;
    max-width: 390px;
    left: 50%;
    transform: translate(-50%, -50%);
}

.contacto .col .info ul{
    list-style: none;
}

.contacto .col .info ul li{
    margin-bottom: 20px;
}

.contacto .col .info ul li i{
    color: #1CB698;
    display: inline-block;
    margin-right: 20px;
}

/*Footer*/

footer{
    background-color: #252A2E;
    color: #ffff;
    padding: 50px 0 30px 0;
    text-align: center;
    position: relative;
    width: 100%;
}

footer .redes{
    margin-bottom: 20px;
}

footer .redes a{
    color: #ffff;
    display: inline-block;
    text-decoration: none;
    border: 1px solid #ffff;
    border-radius: 100%;
    width: 42px;
    height: 42px;
    line-height: 42px;
    margin:  40px 5px;
    font-size: 20px;
    transition: .3s;
}


footer .redes a:hover{
    background-color: #1cb698;
}

footer .arriba{
    display: block;
    width: 50px;
    height: 50px;
    background-color: #1CB698;
    color: #ffff;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -25px;
    border-radius: 50%;
    line-height: 50px;
    font-size: 18px;
}

/* SECCION RESPONSIVE */
@media screen and (max-width:980px) {
    nav{
        display: none;
    }

    .nav-responsive{
        display: block;
    }

    nav.responsive{
        display: block;
        position: absolute;
        right: 0;
        top: 75px;
        background-color: #252a2E;
        width: 180px;
    }

    nav.responsive ul{
        display: block !important;
    }

    nav.responsive ul li{
        border-bottom: 1px solid #ffff;
        padding: 10px 0;
    }
}

@media screen and (max-width:700px){
    .sobremi .fila{
        display: block;
    }

    .sobremi .fila .col{
        width: fit-content;
    } 

    .skills .fila{
        display: block;
    }
    
    .skills .fila .col{
        width: 100%;
    }

    .skills .fila .col .skill .barra-skill{
        width: 100%;
    }

    .curriculum .fila{
        display: block;
    }

    .curriculum .fila .col{
        width: 90%;
    }

    .curriculum .fila .derecha{
        margin-left: 20px;
    }

    .portafolio .galeria{
        display: block;
        width: 100%;
    }

    .portafolio .galeria .proyecto{
        display: flex;
        justify-content: center;
        max-width: 100%;
        
    }

    .portafolio .galeria .proyecto img{
        width: 60%;
        justify-content: center;
        
    }

    .contacto .fila{
        display: block;
    }

    .contacto .fila .col{
        width: 100%;
    }

}
