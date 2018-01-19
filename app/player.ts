import { Bullet } from './bullet';
import { GameObject } from './game-object';

export class Player extends GameObject {
    public bullets: Bullet[];
    constructor(x: number, y: number, ctx: any) {
        super(x, y, 10, 40, '#907d61', ctx);
        this.bullets = [];
    }
    public jump() {
        let goingDown = false;
        const me = this;
        const limit = 150;
        clearInterval(me.jumping);
        this.jumping = setInterval(() => {
            if (me.y > limit && !goingDown) {
                me.y -= 3;
            } else {
                goingDown = true;
                me.y += 3;
                if (me.y > me.originY) {
                    clearInterval(me.jumping);
                    me.y = me.originY;
                    goingDown = false;
                }
            }
        }, 10);
    }
    public shoot() {
        const xPos = this.direction === 'front' ? this.x + this.width : this.x - 15;
        this.bullets.push(new Bullet(this.direction, xPos, this.y, this.context));
    }
}
