import { IGameObject } from './game-object.interface';

export class GameObject implements IGameObject {
    public hp: number;
    public x: number;
    public y: number;
    public originalY: number;
    public width: number;
    public height: number;
    public context: any;
    public color: string;
    public speed = 20;
    public speedX = 0;
    public jumping: any;
    public direction = 'front';
    constructor(x: number, y: number, w: number, h: number, color: string, ctx: any) {
        this.hp = 1;
        this.x = x;
        this.y = y;
        this.originalY = this.y;
        this.width = w;
        this.height = h;
        this.context = ctx;
        this.color = color;
        this.update();
    }
    public update() {
        this.x += this.speedX;
        this.clearSpeed();
        this.context.fillStyle = this.color;
        this.context.fillRect(this.x, this.y, this.width, this.height);
    }
    public moveFront() {
        this.speedX = this.speed;
        this.direction = 'front';
    }
    public moveBack() {
        this.speedX = this.speed * -1;
        this.direction = 'back';
    }
    public clearSpeed() {
        this.speedX = 0;
    }
}
