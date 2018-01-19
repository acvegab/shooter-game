import { GameObject } from './game-object.class';

export class Player extends GameObject {
    constructor(x: number, y: number, w: number, h: number, ctx: any) {
        super(x, y, w, h, ctx);
    }

}
