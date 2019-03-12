'use strict';



var colorChart;  //
var chartDrawn = false;  //giving chart a boolean

var pictureOne = document.getElementById('pic1');  //getting image slots from HTML
var pictureTwo = document.getElementById('pic2');
var pictureThree = document.getElementById('pic3');


document.getElementById('chart').addEventListener('click', function () {  // getting chart from HTML
  drawChart();
});



var imgs = [];
var previousPictures = [];
var turnCount = 0;
//setting variables for project 
var clicks = [];
var title = [];
var views = [];




      

function returnClicks() {
  var retrievedData = localStorage.getItem('imgs');
  if(retrievedData !== null) {
    imgs = JSON.parse(retrievedData);
  }                                        //returns ans stores # of clicks
}


function BusMallPictures(name, displayName) {   //constructor fucntion 
  this.name = name;
  this.displayName = displayName;
  this.filepath = `img/${name}`;
  this.views = 0;
  this.clicks = 0;
  
  imgs.push(this);
}

function choosePictures() {
  var currentPictures = [];
  do {
    do {
      var randomNumber = Math.floor(Math.random() * imgs.length);
      var picture = imgs[randomNumber];
    } while (previousPictures.includes(picture) || currentPictures.includes(picture));
    currentPictures.push(picture);
  } while (currentPictures.length < 3);    //doing the math for the pictures to show up 
  
  return currentPictures;
}
function gettingImages() {   //setting new values
        imgs = [];
        new BusMallPictures('bag.jpg', 'Bag');
        new BusMallPictures('banana.jpg', 'Banana');
        new BusMallPictures('bathroom.jpg', 'Bathroom');
        new BusMallPictures('boots.jpg', 'Boots');
        new BusMallPictures('breakfast.jpg', 'Breakfast');
        new BusMallPictures('bubblegum.jpg', 'Bubblegum');
        new BusMallPictures('chair.jpg', 'Chair');
        new BusMallPictures('cthulhu.jpg', 'Cthulhu');
        new BusMallPictures('dog-duck.jpg', 'Dog Duck');
        new BusMallPictures('dragon.jpg', 'Dragon');
        new BusMallPictures('pen.jpg', 'Pen');
        new BusMallPictures('pet-sweep.jpg', 'Pet Sweep');
        new BusMallPictures('scissors.jpg', 'Scissors');
        new BusMallPictures('shark.jpg', 'Shark');
        new BusMallPictures('sweep.png', 'Sweep');
        new BusMallPictures('tauntaun.jpg', 'Taun Taun');
        new BusMallPictures('unicorn.jpg', 'Unicorn');
        new BusMallPictures('usb.gif', 'USB');
        new BusMallPictures('water-can.jpg', 'Water Can');
        new BusMallPictures('wine-glass.jpg', 'Wine Glass');
}

function oneTurn() {    //talked about in class
  var currentPictures = choosePictures();
  render(currentPictures);

  for (var i = 0; i < 3; i++) {     //
    currentPictures[i].views++;
  }

  previousPictures = currentPictures;

  turnCount++;
}

function render(currentPictures) {
  pictureOne.src = currentPictures[0].filepath;
  pictureOne.title = currentPictures[0].displayName;    //giving each pic a value and giving it a click handler 
  pictureOne.names = currentPictures[0].displayName;

  pictureTwo.src = currentPictures[1].filepath;
  pictureTwo.title = currentPictures[1].displayName;
  pictureTwo.names = currentPictures[1].displayName;

  pictureThree.src = currentPictures[2].filepath;
  pictureThree.title = currentPictures[2].displayName;
  pictureThree.names = currentPictures[2].displayName;

  pictureOne.addEventListener('click', handleClick);
  pictureTwo.addEventListener('click', handleClick);
  pictureThree.addEventListener('click', handleClick);
}

function handleClick(event) {
  if (turnCount < 25) {
    increaseClickCount(event.target.title);     
    oneTurn();
  } else if (turnCount === 25) {
    turnCount++;
    //createTable();
    drawChart();  // csll table 
    saveClicks();  //call saves click
  } else {
    return;
  }
}

function increaseClickCount(title) {
  for (var i = 0; i < imgs.length; i++) {  //adding number ofclicks
    if (imgs[i].displayName === title) {
      imgs[i].clicks++;
      break;
    }
  }
  updateChartArrays();
}


function updateChartArrays() {
  for (var i = 0; i < imgs.length; i++) {
    title[i] = imgs[i].displayName;
    clicks[i] = imgs[i].clicks;     //updtaes the chart of clicks
    views[i] = imgs[i].views;
  }
}
   //creating the chart as shown in lecture
function drawChart() {
  var bar = document.getElementById('myChart').getContext('2d');

  colorChart = new Chart(bar, {  //  making sure we are making a bar chat 
    type: 'bar',
    data: data,
  });
  chartDrawn = true;
}


seahawks();

function seahawks() {
  returnClicks();
  if (imgs.length === 0) {
    gettingImages();   ///
    oneTurn();
  } else {
    oneTurn();
    updateChartArrays();
  }
}


document.getElementById('images').addEventListener('click', function (event) {  
  increaseClickCount(event.target.id);
  if (chartDrawn) {
    colorChart.update();  //
  }
});

function saveClicks() {
  var clicksString = JSON.stringify(imgs);
  localStorage.setItem('imgs', clicksString);
}

var data = {
  labels: title,  //where the bottom displays the data
  backgroundColor: 'black',
  datasets: [
    {
      label: 'Clicks',   //header
      data: clicks,
      backgroundColor: [    //setting colors for all bars shown 
        'rgba(46, 213, 115,1.0)',
        'rgba(255, 121, 121,1.0)',
        'rgba(236, 204, 104,1.0)',
        'rgba(183, 21, 64,1.0)',
        'rgba(30, 55, 153,1.0)',
        'rgba(247, 241, 227,1.0)',
        'rgba(235, 47, 6,1.0)',
        'rgba(19, 15, 64,1.0)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(246, 185, 59,1.0)',
        'rgba(255, 71, 87,1.0)',
        'rgba(106, 176, 76,1.0)',
        'rgba(255, 99, 132, 0.5)',
        'rgba(249, 202, 36,1.0)',
        'rgba(190, 46, 221,1.0)',
        'rgba(197, 108, 240,1.0)',//
        'rgba(252, 92, 101,1.0)',
        'rgba(246, 229, 141,1.0)',
        'rgba(235, 77, 75,1.0)',
        'rgba(255, 184, 184,1.0)'
      ]
    }
  ]
};