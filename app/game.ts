import { GameObject } from './game-object.class';
import { Player } from './player.class';

class Game {
  private canvas: any;
  private context: any;
  private player: GameObject;
  private floor: GameObject;
  private obstacles: GameObject[];
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
    setInterval(() => this.updateGameArea(), 20);
    
    // Add elements: players, obstacles and enemies
    this.setLevelElements(this.level);

    this.addEvents();
  }
  private setLevelElements(level: number) {
    // General elements
    this.floor = new GameObject(0, 250, 800, 20, '#667292', this.context);

    switch (level) {
      case 1:
        // Add elements: players, obstacles and enemies
        this.player = new GameObject(20, 210, 10, 40, '#907d61', this.context).setSpeed(1.5);
        this.obstacles = [
          new GameObject(120, 230, 20, 20, '#8d9db6', this.context).setSpeed(0),
          new GameObject(280, 230, 20, 20, '#8d9db6', this.context).setSpeed(0),
        ];
        this.enemies = [
          new GameObject(150, 210, 10, 40, '#c83349', this.context).setSpeed(1.2),
          new GameObject(240, 210, 10, 40, '#c83349', this.context).setSpeed(1.2),
          new GameObject(480, 210, 10, 40, '#c83349', this.context).setSpeed(.8),
        ];
        break;
    }
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
  }
  private checkKey(e: any) {
    const code = e.keyCode;
    switch (code) {

        case 37: this.player.moveBack(); console.log('Left'); break; // Left key
        case 38: this.player.jump(); console.log('Up'); break; // Up key
        case 39: this.player.moveFront(); console.log('Right'); break; // Right key
        case 40: console.log('Down'); break; // Down key
        default: console.log(code); // Everything else
    }
  }
}
const game = new Game();
// game.startGame();
