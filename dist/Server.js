"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App"));
const port = process.env.PORT;
App_1.default.listen(3000, () => {
    console.log(`Server is running on localhost:${port}/`);
});
//# sourceMappingURL=Server.js.map