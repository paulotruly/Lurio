import Entity from "./Entity.js";
import {loadMarioSprites} from './sprites.js';

export function createMario() {
    return loadMarioSprites()
    .then(sprite => {
        const mario = new Entity();

            mario.draw = function drawMario(context) {
                sprite.draw('idle', context, this.pos.x, this.pos.y);
            }

            mario.update = function updateMario(deltaTime) {
                this.pos.x += mario.vel.x * deltaTime; 
                this.pos.y += mario.vel.y * deltaTime; 
            }

            return mario;
    });
}