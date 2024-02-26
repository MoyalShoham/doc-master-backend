"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('Get Posts');
});
const postPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('Post Post');
});
const putPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('Put Post');
});
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('Delete Post');
});
exports.default = {
    getPosts,
    postPost,
    putPost,
    deletePost
};
//# sourceMappingURL=post-controller.js.map