import { GameObject } from './game-object';

export class EnemyB extends GameObject {
    public freeWill = true;
    public speed = 1.2;
    constructor(x: number, y: number, ctx: any) {
        super(x, y - 10, 10, 50, '#8a1830', ctx);
    }
}
