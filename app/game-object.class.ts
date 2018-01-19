import { IGameObject } from './game-object.interface';

export class GameObject implements IGameObject {
    public hp: number;
    public x: number;
    public y: number;
    public originalY: number;
    public width: number;
    public height: number;
    public context: any;
    public color: string;
    public speed = 1;
    public freeWill = false;
    public jumping: any;
    constructor(x: number, y: number, w: number, h: number, color: string, ctx: any) {
        this.hp = 1;
        this.x = x;
        this.y = y;
        this.originalY = this.y;
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
    public setSpeed(speed: number) {
        this.speed = speed;
        return this;
    }
    public addFreeWill() {
        this.freeWill = true;
    }

    public moveFront() {
        this.x += (this.speed * 10);
    }
    public moveBack() {
        this.x -= (this.speed * 10);
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
