import { EnemyA } from './enemy-a.class';
import { EnemyB } from './enemy-b.class';
import { GameObject } from './game-object.class';
import { Obstacle } from './obstacle.class';
import { Player } from './player.class';

class Game {
  private canvas: any;
  private context: any;
  private player: Player;
  private floor: GameObject;
  private obstacles: Obstacle[];
  private enemies: GameObject[];
  private level: number;
  constructor() {
    this.startGame();
  }

  public startGame() {
    // Level to play
    this.level = 1;

    // Canvas setup
    this.canvas = document.getElementById('canvas');
    this.canvas.width = 800;
    this.canvas.height = 270;
    this.context = this.canvas.getContext('2d');
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);

    // Function for canvas refreshing
    setInterval(() => this.updateGameArea(), 500);
    // Add elements: players, obstacles and enemies
    this.createPlayer();
    this.createObstacles();
    this.createEnemies();
    this.setLevelElements(this.level);

    this.addEvents();
  }
  private setLevelElements(level: number) {
    // General elements
    this.floor = new GameObject(0, 250, 800, 20, '#667292', this.context);
    switch (level) {
      case 1:
        // Add elements: players, obstacles and enemies
        break;
    }
  }
  private createPlayer() {
    this.player = new Player(20, 210, 10, 40, '#907d61', this.context);
  }
  private createObstacles() {
    this.obstacles = [
      new Obstacle(120, 230, 20, 20, '#8d9db6', this.context),
      new Obstacle(280, 230, 20, 20, '#8d9db6', this.context),
    ];
  }
  private createEnemies() {
    this.enemies = [
      new EnemyA(150, 210, 10, 40, '#c83349', this.context),
      new EnemyA(240, 210, 10, 40, '#c83349', this.context),
      new EnemyB(480, 210, 10, 40, '#c83349', this.context),
    ];
  }
  private clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  private updateGameArea() {
    this.clear();
    this.player.update();
    this.obstacles[0].update();
    this.obstacles[1].update();
    this.enemies[0].update();
    this.enemies[1].update();
    this.enemies[2].update();
    this.floor.update();
  }
  private addEvents() {
    window.addEventListener('keydown', (e) => this.checkKey(e), false);
    window.addEventListener('keyup', (e) => this.checkKey(e), false);
  }
  private checkKey(e: any) {
    const code = e.keyCode;
    if (e.type === 'keydown') {
      switch (code) {
          case 37: this.player.moveBack(); console.log('Left'); break; // Left key
          case 38: this.player.jump(); console.log('Up'); break; // Up key
          case 39: this.player.moveFront(); console.log('Right'); break; // Right key
          default: console.log(code); // Everything else
      }
    } else if (e.type === 'keyup') {
      switch (code) {
          case 37: this.player.clearSpeed(); console.log('Left'); break; // Left key
          case 38: this.player.clearSpeed(); console.log('Up'); break; // Up key
          case 39: this.player.clearSpeed(); console.log('Right'); break; // Right key
          default: console.log(code); // Everything else
      }
    }
  }
}
const game = new Game();
// game.startGame();
