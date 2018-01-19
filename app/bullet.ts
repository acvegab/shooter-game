import { GameObject } from './game-object';

export class Bullet extends GameObject {
    public selfDestroy = false;
    private missile: any;
    constructor(direction: string, x: number, y: number, ctx: any) {
        super(x, y, 15, 15, '#ffecb2', ctx);
        this.originX = x;
        this.direction = direction;
        this.shootBullet();
    }
    private shootBullet() {
        const me = this;
        clearInterval(me.jumping);
        this.missile = setInterval(() => {
            if (this.direction === 'front') {
                me.x += 3;
            } else if (this.direction === 'back') {
                me.x -= 3;
            }
            if (me.x > me.context.canvas.width || me.x < 0 || Math.abs(me.x - me.originX) >= 150) {
                this.selfDestroy = true;
                clearInterval(me.missile);
            }
        }, 10);
    }

}
