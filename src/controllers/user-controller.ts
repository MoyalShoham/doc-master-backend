import { collection } from "firebase/firestore";
import BaseController from "./base-controller";
import db from "../../firebase-config";




class UserController extends BaseController {
    constructor() {
        super("users", collection(db.db, "users"));

    }
    

}


// const userController = new BaseController("users", collection(db.db, "users"));
// class UserController extends BaseController {

//     private collectionName = "users";
//     private collectionRef = collection(db.db, this.collectionName);

//     constructor() {
//         super("users", collection(db.db, "users"));
//     }

// }

export default new UserController();