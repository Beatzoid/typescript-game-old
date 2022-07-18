import { IComponent } from "@/utils";
import { Node } from "@/node";
import { Settings } from "@/settings";
import { CanvasLayer } from "@/canvasLayer";

export class NodeDrawComponent implements IComponent {
    public Entity: Node;

    public Awake(): void {
        this._clear();
    }

    public Update(deltaTime: number): void {
        this._clear();
        this._draw();
    }

    private _draw(): void {
        CanvasLayer.Background.FillRect(
            this.Entity.Start,
            this.Entity.Size,
            Settings.grid.color
        );
    }

    private _clear(): void {
        CanvasLayer.Background.ClearRect(this.Entity.Start, this.Entity.Size);
    }
}
