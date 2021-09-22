const FieldsBoard = document.querySelectorAll(".items");
const Writing = document.querySelector(".heading");
const Button = document.querySelector(".reset");

let Fields;

let Player1;

let Active;

const RestartGame = () => {
    
     Fields = ["","","","","","","","",""];

     Player1 = "X";

     Active = true;
};

RestartGame();

let WinningPossible = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

];

function Draw () {
   Writing.innerHTML = "Remisujecie!";
};

function Clearing () {
   Writing.innerHTML = "";
};
const Game = () =>{
    let Winning = false;
   for( let i=0; i<=7; i++){
       let [variant1, variant2, variant3] = WinningPossible[i];
       let possible1 = Fields[variant1];
       let possible2 = Fields[variant2];
       let possible3 = Fields[variant3];
       
       if ( possible1 !== "" && possible1 === possible2 && possible2 === possible3){
          Winning = true;
          break;
       };

       
   }
   if (Winning) {
        Active = false;
        Writing.innerHTML = `Gratuluje ${Player1} wygranej!`;
   } else if (FullBoard()) {
        Active = false;
        Draw();
    }
};

function FullBoard () {

    return Fields.find(Board => Board === "") === undefined;
};

FieldsBoard.forEach(Board => {
    Board.addEventListener("click", (event) => {
        let { variant } = event.target.dataset;

    if (Active && Fields[variant] === ""){
            Fields[variant] = Player1;
            event.target.classList.add(`container_items--${Player1}`);
             Game();
            Player1 = Player1 === "X" ? "O" : "X";
    }

    });

});

const ButtonClick = () =>{
    RestartGame();
    FieldsBoard.forEach(Board => {
        Board.classList.remove("container_items--X", "container_items--O");
        Clearing();

    });  
}

Button.addEventListener("click", ButtonClick);