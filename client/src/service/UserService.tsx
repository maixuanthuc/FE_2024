import {db} from '../firebase/firebaseConfig'


import {
    collection,
    getDocs
} from "firebase/firestore"
const UserColeection = collection(db,"Users")
class UserData {
    getAllUser = () =>{
        return getDocs(UserColeection)

};
}
export  default  new UserData();