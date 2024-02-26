"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const user_controller_1 = require("../controllers/user-controller");
router.get('/', user_controller_1.userController.getUsers);
router.post('/', user_controller_1.userController.postUser);
router.put('/:id', user_controller_1.userController.putUser);
router.delete('/:id', user_controller_1.userController.deleteUser);
router.get('/:id', user_controller_1.userController.getUserById);
exports.default = router;
//# sourceMappingURL=user-route.js.map