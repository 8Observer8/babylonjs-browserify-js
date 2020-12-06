const BABYLON = require("babylonjs");

class Scene
{
    constructor(canvasName)
    {
        const canvas = document.getElementById(canvasName);
        if (!canvas) {
            console.log(`Failed to get the canvas element: "${canvasName}"`);
            return;
        }
        const engine = new BABYLON.Engine(canvas, true);
        const scene = new BABYLON.Scene(engine);
        const camera = new BABYLON.FreeCamera("Camera", new BABYLON.Vector3(0, 5, -10), scene);
        camera.setTarget(BABYLON.Vector3.Zero());
        camera.attachControl(canvas, false);
        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
        const sphere = BABYLON.MeshBuilder.CreateSphere("sphere",
            { segments: 16, diameter: 2 }, scene);
        sphere.position.y = 1;
        const ground = BABYLON.MeshBuilder.CreateGround("ground",
            { height: 6, width: 6, subdivisions: 2 }, scene);
        engine.runRenderLoop(
            () =>
            {
                scene.render();
            });
    }
}

module.exports = Scene;