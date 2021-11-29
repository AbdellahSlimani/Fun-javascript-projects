const images = [
    {
      image_name: "bananas.jpg",
      number_of_items: 6,
    },
    {
      image_name: "birthday candles.jpg",
      number_of_items: 7,
    },
    {
      image_name: "blocks.jpg",
      number_of_items: 6,
    },
    {
      image_name: "brushes.jpg",
      number_of_items: 7,
    },
    {
      image_name: "cakes.jpg",
      number_of_items: 7,
    },
    {
      image_name: "cars.jpg",
      number_of_items: 2,
    },
    {
      image_name: "crayons.jpg",
      number_of_items: 8,
    },
    {
      image_name: "cupcakes.jpg",
      number_of_items: 7,
    },
    {
      image_name: "deer.jpg",
      number_of_items: 3,
    },
    {
      image_name: "donuts.jpg",
      number_of_items: 6,
    },
    {
      image_name: "ducks.jpg",
      number_of_items: 6,
    },
    {
      image_name: "eggs.jpg",
      number_of_items: 8,
    },
    {
      image_name: "elephants.jpg",
      number_of_items: 7,
    },
    {
      image_name: "hot air balloons.jpg",
      number_of_items: 5,
    },
    {
      image_name: "jelly beans.jpg",
      number_of_items: 9,
    },
    {
      image_name: "macaroons.jpg",
      number_of_items: 7,
    },
    {
      image_name: "pencils.jpg",
      number_of_items: 12,
    },
    {
      image_name: "people.jpg",
      number_of_items: 6,
    },
    {
      image_name: "peppers.jpg",
      number_of_items: 2,
    },
    {
      image_name: "pizza slices.jpg",
      number_of_items: 8,
    },
];
/*---------------------Variables------------------------ */
const timeDelay = 3000;
let currentImageValue = 0,
displayNumber = 0,
score = 0,
totalAvailable = images.length,
chosen = false;

document.getElementById('currentScore').innerHTML = score;
document.getElementById('totalAvailable').innerHTML = totalAvailable;
document.getElementById('timeSetting').innerHTML = timeDelay / 1000;



function ProgressCountdown(timeleft, bar) {
  return new Promise((resolve, reject) => {
    var countdownTimer = setInterval(() => {
      timeleft--;

      document.getElementById(bar).value = timeleft;

      if (timeleft <= 0) {
        clearInterval(countdownTimer);
        resolve(true);
      }
    }, 1000);
  });
}


/*--------------------Set Image Src----------------------- */
const setImageSrc = (randomImageName) => {
  const imageContainer = document.getElementById("imageContainer");
  if (imageContainer.hasChildNodes()) {
    imageContainer.removeChild(imageContainer.firstElementChild);
  }
  const image = document.createElement("img");
  image.src = `img/${randomImageName}`;
  image.classList.add("fade");
  imageContainer.appendChild(image);
}

/*----------------Generate Display Number----------------- */
  generateDisplayNumber = (plusOrMinus, numberOfItems) => {
    const split = Math.floor(Math.random() * 2);
    //displa the real number
    if(split === 0){
      document.getElementById('number').innerHTML = numberOfItems;
      displayNumber = numberOfItems;
    }else{
      //display one higher or one lower
      document.getElementById('number').innerHTML = `${numberOfItems + plusOrMinus}`;
      displayNumber = numberOfItems + plusOrMinus;
    }
    currentImageValue = numberOfItems;
    ProgressCountdown(3, 'pageBeginCountdown',);
};

  
/*---------------Generate Plus Or Minus Number------------ */
  const generatePlusOrMinus = () => {
    const number0to1 = Math.floor(Math.random() * 2);
    return number0to1 === 0 ? -1 : +1;
};

/*---------------------Set Image Name-------------------- */
  const setImageName = (randomImageName) => {
  const imageName =  randomImageName.slice(0, randomImageName.length - 4);
  const arr = imageName.split(" ");
    for(var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
  const imageNamerUpperCase = arr.join(" ");


  document.getElementById('item-name').innerHTML = imageNamerUpperCase +"?"
    
};

/*------------------------Generate---------------------- */  
  const generate = () => {
    if (images.length === 0) {
      endOfGame();
      stopTimer();
      return;
    }
    chosen = false;
    const randomNumber = Math.floor(Math.random() * images.length);
    const randomImageName = images[randomNumber].image_name;
    setImageSrc(randomImageName);
    setImageName(randomImageName);
    const plusOrMinus = generatePlusOrMinus();
    const numberOfItems = images[randomNumber].number_of_items;
    generateDisplayNumber(plusOrMinus, numberOfItems)
    images.splice(randomNumber, 1);
};

/*--------------------------Match------------------------- */
  const match = () => {
    if(!chosen) {
      currentImageValue === displayNumber ? score++ : score--;
      chosen = true;
      document.getElementById('currentScore').innerHTML = score;
    }
};

/*------------------------No Match------------------------ */
  const noMatch = () => {
    if(!chosen){
      currentImageValue !== displayNumber ? score++ : score--;
      chosen = true;
      document.getElementById('currentScore').innerHTML = score;
    }
    
};

/*--------------------------Timer------------------------- */
  let timerRef;
  const timer = () => {
    timerRef = setInterval(generate, timeDelay);
};

/*---------------------------Play----------------------- */  
  const play = () => {
    document.getElementById('message').style.display= "none";
    document.getElementById('startScreen').style.display= "none";
    document.getElementById('play-button').style.display= "none";
    document.getElementById('statsContent').style.display= "block";
    generate()
    timer();
};

/*------------------------End Of Game------------------- */  
const endOfGame =() =>{
  document.getElementById('message').style.display= "block";
  document.getElementById('imageContainer').style.display= "none";
  document.getElementById('message').innerHTML = `Game Over! <br> Your Score is ${score} / ${totalAvailable}`;
  document.getElementById('statsContent').style.display= "none";
  document.getElementById('newGame').style.display= "inline-block";
};

/*-------------------------New Game----------------------- */
function newGame() {
  window.location.reload();
};

/*-------------------------Stop Timer--------------------- */
const stopTimer = () => {
  clearInterval(timerRef);
};
