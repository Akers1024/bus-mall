'use strict';


var picOne = document.getElementById('first');
var picTwo= document.getElementById('second');
var picThree = document.getElementById('third');









var busMallChart;  //we need a variable for chart
var chartDrawn = false;  //make boolean for chart
var votes = [];
var title = [];

function upDateChart() {
  for (var i= 0; i < imgs.length; i++) {
    title[i] = imgs[i].displayName;
    votes[i] = imgs[i].clicks;
  }
}

var imgs = [];
var count = 0;

function Pictures(name, displayName) {
    this.filepath = `img/${name}`;
    this.displayName = displayName;
    this.name = name;
    this.shown = 0;
    this.clicks = 0;
    //this.id = id;
    imgs.push(this);
}


new Pictures ('bag.jpg', 'bag');
new Pictures ('banana.jpg', 'banana');
new Pictures ('bathroom.jpg', 'bathroom');
new Pictures ('boots.jpg', 'boots');
new Pictures ('breakfast.jpg', 'breakfast');
new Pictures ('bubblegum.jpg', 'bubblegum');
new Pictures ('chair.jpg', 'chair');
new Pictures ('cthulhu.jpg', 'cthulhu');
new Pictures ('dog-duck.jpg', 'dog-duck');
new Pictures ('dragon.jpg', 'dragon');
new Pictures ('pen.jpg', 'pen');
new Pictures ('pet-sweep.jpg', 'pet-sweep');
new Pictures ('scissors.jpg', 'scissors');
new Pictures ('shark.jpg', 'shark');
new Pictures ('sweep.png', 'sweep');
new Pictures ('tauntaun.jpg', 'tauntaun');
new Pictures ('unicorn.jpg', 'unicorn');
new Pictures ('usb.gif', 'usb');
new Pictures ('water-can.jpg', 'water can');
new Pictures ('wine-glass.jpg', 'wine glass');



function choosePictures() {
    var currentPictures = [];
    do {
      do {
        var randomNumber = Math.floor(Math.random() * imgs.length);
        var picture = imgs[randomNumber];
      } while (previousPictures.includes(picture) || currentPictures.includes(picture));
      currentPictures.push(picture);
    } while (currentPictures.length < 3);
  
    return currentPictures;
  }
  
  var previousPictures = [];
  oneTurn();
  
  function oneTurn() {
    var currentPictures = choosePictures();
    render(currentPictures);
  
    for (var i = 0; i < 3; i++) {
      currentPictures[i].shown++;  //
    }
  
    previousPictures = currentPictures;
  
    count += 1;  //
  }
  
  function render(currentPictures) {
    picOne.src = currentPictures[0].filepath;
    picOne.title = currentPictures[0].displayName;
  
    picTwo.src = currentPictures[1].filepath;
    picTwo.title = currentPictures[1].displayName;
  
    picThree.src = currentPictures[2].filepath;
    picThree.title = currentPictures[2].displayName;
  
    picOne.addEventListener('click', handleClick);
    picTwo.addEventListener('click', handleClick);
    picThree.addEventListener('click', handleClick);
  }
  
  function handleClick(event) {
    if (count < 25) {   //
      increaseClickCount(event.target.title);
      oneTurn();
    } else if (count === 25) {  //
      drawchart();
      count++;  //
    } else {
      return;
    }
    upDateChart();
  }
  
  function increaseClickCount(title) {
    for (var i = 0; i < imgs.length; i++) {
      if (imgs[i].displayName === title) {
        imgs[i].clicks++;
        break;
      }
    }
    
localStorage.busMallCatalogue = JSON.stringify(imgs);
console.log('stringified ',JSON.stringify(imgs));
}






var data = {
  labels: title,
  datasets: [
    {
      data: votes,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
    }
  ]
};


function drawChart() {
  
  var ctx = document.getElementById("myChart").getContext("2d");

 
  busMallChart = new Chart(ctx, {
    type: 'bar',
    data: data,
   

  });
  
  chartDrawn = true;
} 





