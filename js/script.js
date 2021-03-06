const btnMenu = document.getElementById("btn-menu");
const imgMenu =  document.getElementById("img-menu");
const sectionList = document.getElementById("section-list")
const container = document.getElementById("container-proyect");
const numProyect = document.getElementsByClassName("num-proyect");
let isPress = false;

addProyect();
function addProyect (){
    for(let i=0; i<proyects.length; i++){
        container.innerHTML +=`
        <div >
            <div class="center-proyect">
                <h2 class="num-proyect">${proyects[i].num}</h2>
                <img class="preview-proyect" src="${proyects[i].preview}" alt="proyect">
            </div>
            <div class="code-template">
                <h3>${proyects[i].title}</h3>
                <a class="btn-code" href="${proyects[i].view}" target="_blank">
                    <img class="img-size img-center" src="img/another-page.svg" alt="View" tittle="View">
                </a>
                <a class="btn-code" href="${proyects[i].code}" target="_blank">
                    <img class="img-size img-white img-center" src="img/github.svg" alt="Code"  tittle="Code">
                </a> 
            </div>
        </div>
        `;
        switch (i){
            case 0:
                numProyect[i].classList.add("num-blue");
                break;
            case 1:
                numProyect[i].classList.add("num-green");
                break;
            case 2:
                numProyect[i].classList.add("num-red");
                break;
        }
    }  
}

btnMenu.addEventListener("click", function(){
    isPress=!isPress;
    if(isPress){
        imgMenu.src="img/close.png";
    }
    else{
        imgMenu.src="img/menu.svg";
    }
    sectionList.classList.toggle("hidden");
});
