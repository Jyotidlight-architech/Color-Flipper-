const body = document.getElementsByTagName("body") [0];
//Get the body element either typing document.body or just by typing document.getElementsByTagName("body")[0];

const flipButton = document.getElementById("flip");

//Function to generate random RGB values
function makeColors(){
    const red = (Math.random() * 256);
    const green = (Math.random() * 256);
    const blue = (Math.random() * 256);
    
    return `rgb(${red}, ${green}, ${blue})`;
    
};

//Function to change the background color

function changeColors(){
    body.style.backgroundColor = makeColors() ;
};


//Create a button which can trigger the color change

flipButton.addEventListener('click', changeColors);
