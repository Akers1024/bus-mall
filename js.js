'use strict';


var picOne = document.getElementById('first');
var picTwo = document.getElementById('second');
var picthree = document.getElementById('third');
var listItems = document.getElementById('name');

var allPics = [];

function Pictures(name) {
    this.filepath = `img/${name}`;
    this.name = name;
    this.shown = 0;
    this.clicks = 0;
    //this.id = id;
    allPics.push(this);
}


new Pictures ('bag.jpg');
new Pictures ('banana.jpg');
new Pictures ('bathroom.jpg');
new Pictures ('boots.jpg');
new Pictures ('breakfast.jpg');
new Pictures ('bubblegum.jpg');
new Pictures ('chair.jpg');
new Pictures ('cthulhu.jpg');
new Pictures ('dog-duck.jpg');
new Pictures ('dragon.jpg');
new Pictures ('pen.jpg');
new Pictures ('pet-sweep.jpg');
new Pictures ('scissors.jpg');
new Pictures ('shark.jpg');
new Pictures ('sweep.png');
new Pictures ('tauntaun.jpg');
new Pictures ('unicorn.jpg');
new Pictures ('usb.gif');
new Pictures ('water-can.jpg');
new Pictures ('wine-glass.jpg');



function showRandomPic() {
    var random1 = Math.floor(Math.random() * allPics.length);
    first.src = allPics[random1].filepath;
    first.alt = allPics[random1].name;
    first.title = allPics[random1].name;
    allPics[random1].shown++;
    
    console.log('current pic, ', allPics[random1]);

    var random2 = Math.floor(Math.random() * allPics.length);
    while(random1 === random2) {
        random2 = Math.floor(Math.random() * allPics.length);
    }
    second.src = allPics[random2].filepath;
    second.alt = allPics[random2].name;
    second.title = allPics[random2].name;
    allPics[random2].shown++;
    
    console.log('second pic,' , allPics[random2]);

   
    var random3 = Math.floor(Math.random() * allPics.length);
    while(random3 === random2 || random3 === random1) {
        random3 = random3 = Math.floor(Math.random() * allPics.length);
    }
    third.src = allPics[random3].filepath;
    third.alt = allPics[random3].name;
    third.title = allPics[random3].name;
    allPics[random3].shown++;
    
    console.log('third pic,' , allPics[random3]);

    allPics[random1, random2, random3].clicks++;
}

showRandomPic();



picOne.addEventListener('click', handleClick);
picTwo.addEventListener('click', handleClick);
picthree.addEventListener('click', handleClick);
function handleClick(event) {
    console.log('target, ', event.target);
  showRandomPic();

}

