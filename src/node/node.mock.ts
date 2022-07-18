import { Vector2D } from "@/utils";
import { Node } from "@/node";

export const mockNodeFactory = (
    start: Vector2D = new Vector2D(0, 0),
    end: Vector2D = new Vector2D(0, 0),
    index: Vector2D = new Vector2D(0, 0)
): Node => new Node(start, end, index);
