// Enemies our player must avoid
const Enemy = function(x, y , speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this. y = y;
    this.speed = speed;

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    // Enemy resets hitting border
    if (this.x > 505) {
      this.x = -50;
    }

    if (player.x == allEnemies[0].x && player.y == allEnemies[0].y) {
      player.x = 200;
      player.y = 380;
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
const Player = function(x, y, speed) {
  this.x = x;
  this. y = y;
  this.speed = speed;
  this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function() {
// prevent from moving beyond && collisions

if (this.y > 380) {
     this.y = 380;
 }
 if (this.x > 400) {
     this.x = 400;
 }
 if (this.x < 0) {
     this.x = 0;
 }

 // Check for player reaching top of canvas and winning the game
 if (this.y < 0) {
     this.x = 200;
     this.y = 380;
 }
}
// test

Player.prototype.handleInput = function(control) {
  switch (control) {
        case 'left':
            this.x -= this.speed + 50;
            break;
        case 'up':
            this.y -= this.speed + 30;
            break;
        case 'right':
            this.x += this.speed + 50;
            break;
        case 'down':
            this.y += this.speed + 30;
            break;
    }

}

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const enemyPosition = [60, 140, 220];
const allEnemies =[];
const player = new Player(200, 380, 50);
let enemy;

enemyPosition.forEach(function(posY) {
    enemy = new Enemy(0, posY, 100 + Math.floor(Math.random() * 512));
    allEnemies.push(enemy);
});



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
