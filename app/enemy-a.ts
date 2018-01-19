import { GameObject } from './game-object';

export class EnemyA extends GameObject {
    public freeWill = false;
    public speed = .8;
    constructor(x: number, y: number, ctx: any) {
        super(x, y, 10, 40, '#c83349', ctx);
    }
}
