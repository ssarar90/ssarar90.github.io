let player;

function Player(classType, hull, firepower, accuracy ) {
  this.classType= classType;
  this.hull= hull;
  this.firepower= firepower;
  this.accuracy=accuracy;
}

let enemy;

function Enemy(enemyType, hull, firepower, accuracy ) {
  this.classType= enemyType;
  this.hull= hull;
  this.firepower= firepower;
  this.accuracy=accuracy;
}

let GameManager= {
  setGameStart: function(classType) {
    this.resetPlayer();
    this.setPreFight();
  },
  resetPlayer: function(classType) {
    switch (classType) {
      case "USS Shwarzenegger":
        player= new Player(classType, 20, 5, .7 );
        break;

    }
    let getInterface= document.querySelector(".interface");
    getInterface.innerHTML= '<img src= "img/USS_SN' + classType.toLowerCase() + '.jpg" class= "img-USS_SN"> <div><h3>' + classType + '</h3><p>Hull: ' + player.hull + '</p><p>firepower: ' + player.firepower + '</p><p>accuracy: ' + player.accuracy + '</p></div>';
     {
      constructor() {

      }
    }>';
  },
  setPreFight: function() {
    let getHeader= document.querySelector(".header");
    let getActions= document.querySelector(".action");
     let getSpace= document.querySelector(".space");
     getHeader.innerHTML= '<p> Task: Find an enemy spaceship'
     getActions.innerHTML<a href='#' class= "spacebattle" {
       constructor() {

       }
     }
  }
}
