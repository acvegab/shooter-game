import { GameObject } from './game-object.class';

export class EnemyB extends GameObject {
    public freeWill = false;
    public speed = 1.2;
    constructor(x: number, y: number, w: number, h: number, color: string, ctx: any) {
        super(x, y, w, h, color, ctx);
    }

}
