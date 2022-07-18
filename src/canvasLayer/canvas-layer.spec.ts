/**
 * @jest-environment jsdom
 */

import { Canvas } from "@/utils";
import { CanvasLayer } from "./canvasLayer";

jest.mock("@/utils");
describe(">>> Canvas Layer", () => {
    it("should create canvas only once", () => {
        expect(Canvas).not.toBeCalled();

        const canvas1 = CanvasLayer.Background;
        const canvas2 = CanvasLayer.Background;

        expect(canvas1).toBe(canvas2);
        expect(Canvas).toBeCalledTimes(1);
    });
});
