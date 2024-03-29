import Model from "./model.js";
import View from "./view.js";
import Controller from "./controller.js";

const model = new Model();
const view = new View(new Controller(model, new View()));