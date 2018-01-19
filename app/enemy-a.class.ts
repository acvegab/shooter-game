import { GameObject } from './game-object.class';

export class EnemyA extends GameObject {
    public freeWill = false;
    public speed = .8;
    constructor(x: number, y: number, w: number, h: number, color: string, ctx: any) {
        super(x, y, w, h, color, ctx);
    }

}
