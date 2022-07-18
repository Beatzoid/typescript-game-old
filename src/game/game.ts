import { Grid } from "@/grid";
import { Settings } from "@/settings";
import { Entity } from "@/utils";

export class Game extends Entity {
    private _entities: Entity[] = [];
    private _lastTimestamp = 0;

    public Awake(): void {
        super.Awake();

        this._entities.push(new Grid());

        for (const entity of this._entities) {
            entity.Awake();
        }

        // Make sure Update starts after all entities are awaken
        window.requestAnimationFrame(() => {
            // set initial timestamp
            this._lastTimestamp = Date.now();

            // start update loop
            this.Update();
        });
    }

    public Update(): void {
        const deltaTime = (Date.now() - this._lastTimestamp) / 1000;

        super.Update(deltaTime);

        for (const entity of this._entities) {
            entity.Update(deltaTime);
        }

        this._lastTimestamp = Date.now();
        window.requestAnimationFrame(() => this.Update());
    }

    public get Entities(): Entity[] {
        return this._entities;
    }
}
