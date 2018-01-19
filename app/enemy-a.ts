import { GameObject } from './game-object';

export class EnemyA extends GameObject {
    public speed = .8;
    constructor(x: number, y: number, ctx: any) {
        super(Math.floor(Math.random() * 700) + 100 , y, 10, 40, '#c83349', ctx);
    }
}
