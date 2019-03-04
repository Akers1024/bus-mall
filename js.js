'use strict';


var picOne = document.getElementById('first');
var picTwo = document.getElementById('second');
var picthree = document.getElementById('third');

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
}

showRandomPic();
