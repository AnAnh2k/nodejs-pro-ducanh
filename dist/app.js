"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 8080;
app.get("/", (req, res) => {
    res.send("Hello Word");
});
app.get("/ducanh", (req, res) => {
    res.send("Hello Đức Anh");
});
app.listen(port, () => {
    console.log(`My app is running on port: ${port}`);
});
//# sourceMappingURL=app.js.map