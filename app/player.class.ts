import { GameObject } from './game-object.class';

export class Player extends GameObject {
    constructor(x: number, y: number, w: number, h: number, color: string, ctx: any) {
        super(x, y, w, h, color, ctx);
    }
    public jump() {
        let goingDown = false;
        const me = this;
        const limit = 150;
        clearInterval(me.jumping);
        this.jumping = setInterval(() => {
            if (me.y > limit && !goingDown) {
                me.y -= 3;
                console.log('jumping: ' + me.y);
            } else {
                goingDown = true;
                me.y += 3;
                if (me.y > me.originalY) {
                    clearInterval(me.jumping);
                    me.y = me.originalY;
                    goingDown = false;
                }
            }
        }, 10);
    }

}
