// https://www.html5gamedevs.com/topic/25425-using-babylonjs-npm-package-from-typescript-with-browserify/?do=findComment&comment=163563
const BABYLON = require("babylonjs");
const Scene = require("./scene");
// import * as BABYLON from 'babylonjs';
// import 'babylonjs';
// require('babylonjs');


window.onload = () => {
    const scene = new Scene("renderCanvas");
};
