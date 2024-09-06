let boxs = document.querySelectorAll(".box");
let msgcont =document.querySelector(".msg-container");
let msg = document.querySelector("h3");
let turnO = true;
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxs.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box clicked");
        box.innerText = "abcd";
        if (turnO === true) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    })
})
const checkwinner = () => {
    for (let pattern of winpatterns) {
        let posval1 = boxs[pattern[0]].innerText;
        let posval2 = boxs[pattern[1]].innerText;
        let posval3 = boxs[pattern[2]].innerText;

        if (posval1 != "" && posval2 != "" && posval3 != "") {
            if (posval1 === posval2 && posval2 === posval3) {
                console.log("winner", posval1);
                disabledbox();
                showwinner(posval1);
            }
            
        }
    
    }
};

let disabledbox = () => {
for(let box of boxs){
    box.disabled=true;
}
}
let showwinner =(winner)=>{
msg.innerText=`congrulation winner is ${winner}`;
msgcont.classList.remove("hide");
}



