import { IGameObject } from './game-object.interface';

export class Obstacle implements IGameObject {
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    public context: any;
    public color: string;
    constructor(x: number, y: number, w: number, h: number, color: string, ctx: any) {
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
}
