"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const body_parser_1 = __importDefault(require("body-parser"));
// import {addDoc , collection}   from 'firebase/firestore';
// import { db } from './firebase-config';
app.use(body_parser_1.default.json());
const user_route_1 = __importDefault(require("./routes/user-route"));
const post_route_1 = __importDefault(require("./routes/post-route"));
app.use('/users', user_route_1.default);
app.use('/posts', post_route_1.default);
// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
// });
exports.default = app;
// addUsers()
//# sourceMappingURL=App.js.map