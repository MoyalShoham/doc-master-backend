import { collection } from "firebase/firestore";
import BaseController from "./base-controller";
import db from "../../firebase-config";




class PostController extends BaseController {
    constructor() {
        super("posts", collection(db.db, "posts"));
    }

}


export default new PostController();