import { IGameObject } from './game-object.interface';

export class GameObject implements IGameObject {
    public hp: number;
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    public context: any;
    public color: string;
    public speed = 1;
    constructor(x: number, y: number, w: number, h: number, color: string, ctx: any) {
        this.hp = 1;
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.context = ctx;
        this.color = color;
        this.update();
    }
    public update() {
        this.context.fillStyle = this.color;
        this.context.fillRect(this.x, this.y, this.width, this.height);
    }
    public setSpeed(speed: number) {
        this.speed = speed;
        return this;
    }

    public moveFront() {
        this.x += (this.speed * 10);
    }
    public moveBack() {
        this.x -= (this.speed * 10);
    }
    public jump() {
        this.y -= 10;
    }
}
