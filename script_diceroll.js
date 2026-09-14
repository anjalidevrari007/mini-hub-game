let rollButton =document.getElementById("rollButton");
let dice =document.getElementById("dice");
let result =document.getElementById("result");

rollButton.addEventListener("click",function()
{
    let number = Math.floor(Math.random()*6)+1;

    let diceFaces = [
        "⚀",
        "⚁",
        "⚂",
        "⚃",
        "⚄",
        "⚅",
    ];

    dice.classList.remove("roll");
    void dice.offsetWidth;
    dice.classList.add("roll");

    dice.innerText = diceFaces[number - 1];

    result.innerText=number;
});