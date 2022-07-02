let tries = 6;
let dynamicList = [];
let secretWordClue;
let secretWordSorted;
const words = [

    word001={
        name: "UVA",
        clue: "FRUTA"
    },

    word002={
        name: "MORANGO",
        clue: "FRUTA"
    },

    word003={
        name: "LARANJA",
        clue: "FRUTA"
    },

    word004={
        name: "BANANA",
        clue: "FRUTA"
    },

    word005={
        name: "MELANCIA",
        clue: "FRUTA"
    },

    word006={
        name: "URSO",
        clue: "ANIMAL"
    },

    word007={
        name: "CACHORRO",
        clue: "ANIMAL"
    },

    word008={
        name: "GATO",
        clue: "ANIMAL"
    },

    word009={
        name: "ELEFANTE",
        clue: "ANIMAL"
    },

    word010={
        name: "PANDA",
        clue: "ANIMAL"
    },

    word011={
        name: "GIRAFA",
        clue: "ANIMAL"
    },

    word012={
        name: "CABECA",
        clue: "PARTES DO CORPO"
    },

    word013={
        name: "BRACOS",
        clue: "PARTES DO CORPO"
    },

    word014={
        name: "BOCA",
        clue: "PARTES DO CORPO"
    },

    word015={
        name: "PERNAS",
        clue: "PARTES DO CORPO"
    },

    word016={
        name: "ORELHAS",
        clue: "PARTES DO CORPO"
    },

    word017={
        name: "NARIZ",
        clue: "PARTES DO CORPO"
    },

    word018={
        name: "DEDOS",
        clue: "PARTES DO CORPO"
    },

    word019={
        name: "ESCOVA DE DENTES",
        clue: "OBJETO"
    },

    word020={
        name: "LAPIS",
        clue: "OBJETO"
    },

    word021={
        name: "CHAPEU",
        clue: "OBJETO"
    },

    word022={
        name: "NOTEBOOK",
        clue: "OBJETO"
    },

    word023={
        name: "BOTAO",
        clue: "OBJETO"
    },

    word024={
        name: "LANTERNA",
        clue: "OBJETO"
    },

    word025={
        name: "RODA",
        clue: "OBJETO"
    },

    word026={
        name: "MAPA",
        clue: "OBJETO"
    },

    word027={
        name: "SAIA",
        clue: "ROUPAS"
    },

    word028={
        name: "CAMISA",
        clue: "ROUPAS"
    },

    word029={
        name: "VESTIDO",
        clue: "ROUPAS"
    },

    word030={
        name: "CALCA",
        clue: "ROUPAS"
    },

    word031={
        name: "BONE",
        clue: "ROUPAS"
    },

    word032={
        name: "JEANS",
        clue: "ROUPAS"
    },

    word033={
        name: "MEIAS",
        clue: "ROUPAS"
    },

    word034={
        name: "BOTAS",
        clue: "ROUPAS"
    },

    word035={
        name: "BANHEIRO",
        clue: "CASA"
    },

    word036={
        name: "CAMA",
        clue: "CASA"
    },

    word037={
        name: "QUARTO",
        clue: "CASA"
    },

    word038={
        name: "LAVANDERIA",
        clue: "CASA"
    },

    word039={
        name: "COZINHA",
        clue: "CASA"
    },

    word040={
        name: "SALA",
        clue: "CASA"
    },

    word041={
        name: "NORUEGA",
        clue: "PAÍS"
    },

    word042={
        name: "PORTUGAL",
        clue: "PAÍS"
    },

    word043={
        name: "BRASIL",
        clue: "PAÍS"
    },

    word044={
        name: "CHINA",
        clue: "PAÍS"
    },

    word045={
        name: "MALDIVAS",
        clue: "PAÍS"
    },

    word046={
        name: "ITALIA",
        clue: "PAÍS"
    },

    word047={
        name: "DUBAI",
        clue: "PAÍS"
    },

    word048={
        name: "NOVAYORK",
        clue: "PAÍS"
    },

    word049={
        name: "AMSTERDÃ",
        clue: "PAÍS"
    },

    word050={
        name: "JAPAO",
        clue: "PAÍS"
    },

    word051={
        name: "FUTEBOL",
        clue: "ESPORTES"
    },

    word052={
        name: "VOLEI",
        clue: "ESPORTES"
    },

    word053={
        name: "BASQUETE",
        clue: "ESPORTES"
    },

    word054={
        name: "HANDBALL",
        clue: "ESPORTES"
    },

    word055={
        name: "BADMINTON",
        clue: "ESPORTES"
    },

    word056={
        name: "CARRO",
        clue: "TRANSPORTE"
    },

    word057={
        name: "ONIBUS",
        clue: "TRANSPORTE"
    },

    word058={
        name: "TREM",
        clue: "TRANSPORTE"
    },

    word059={
        name: "METRO",
        clue: "TRANSPORTE"
    },

    word060={
        name: "BICICLETA",
        clue: "TRANSPORTE"
    },
];

function createSecretWord(){
    const indexWord = parseInt(Math.random() * words.length);

    secretWordSorted = words[indexWord].name;
    secretWordClue = words[indexWord].clue;

}; createSecretWord();

function appearWordInScreen(){
    const clue = document.getElementById("clue");
    clue.innerHTML = secretWordClue;

    const wordScreen = document.getElementById("secret-word");
    wordScreen.innerHTML = "";

    for (i = 0; i < secretWordSorted.length; i++) {
        if (dynamicList[i] == undefined) {
            dynamicList[i] = "&nbsp;" //generates espaco
            wordScreen.innerHTML = wordScreen.innerHTML + "<div class='letters'>"+ dynamicList[i] + "</div>"
        } else {
            wordScreen.innerHTML = wordScreen.innerHTML + "<div class='letters'>"+ dynamicList[i] + "</div>"
        }
    }
}; appearWordInScreen();

function verifyChoosedLetter(letter){
    document.getElementById("key-" + letter).disabled = true;
    if(tries > 0) {
        changeLetterStyle("key-" + letter);
        comparelists(letter);
        appearWordInScreen();
    }
};

function changeLetterStyle(key){
    document.getElementById(key).style.background = "#622525";
    document.getElementById(key).style.color = "#000000";
}

function comparelists(letter){
    const pos = secretWordSorted.indexOf(letter);
    if(pos < 0){ //if the user make a mistake
        tries--
        loadImageHangman();
        
        if(tries == 0){
            openModal("Ah, Você Perdeu!", "A palavra secreta era: " + secretWordSorted + "<br> <br> Mais sorte na próxima");
        }

    } else { //if the user makes a hit
        for(i = 0; i < secretWordSorted.length; i++) {
            if(secretWordSorted[i] == letter) {
                dynamicList[i] = letter;
            }
        }
    }

    let victory = true;
    for(i = 0; i < secretWordSorted.length; i++){
        if(secretWordSorted[i] != dynamicList[i]){
            victory = false;
        }
    }

    if(victory == true) {
        openModal("Parabéns!", "Você ganhou o jogo!");
        tries = 0;
    }
};

function loadImageHangman(){
    switch(tries){
        case 5:
            document.getElementById("images").style.background = "url('./img/strange1.png')";
            break;

        case 4:
            document.getElementById("images").style.background = "url('./img/strange2.png')";
            break;

        case 3:
            document.getElementById("images").style.background = "url('./img/strange3.png')";
            break;

        case 2:
            document.getElementById("images").style.background = "url('./img/strange4.png')";
            break;

        case 1:
            document.getElementById("images").style.background = "url('./img/strange5.png')";
            break;

        case 0:
            document.getElementById("images").style.background = "url('./img/strange.png')";
            break;

        default:
            document.getElementById("images").style.background = "url('./img/hangman.png')";
            break;
    }
};

function openModal(title, message){
    let modalTitle = document.getElementById("exampleModalLabel");
    modalTitle.innerText = title;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = message;

    $("#myModal").modal({
        show: true
    });
}

let btnNewGame = document.querySelector("#btnNewGame");
btnNewGame.addEventListener("click", function(){
    location.reload();
});

function refreshPage(){
    window.location.reload();
}