import React , {useEffect,useState}    from "react";
import UserService from "../service/UserService";
// @ts-ignore
const userList = ({getUserId}) => {
    const [users, setUsers] = useState([]);
    const getUsers = async() => {
        const data = await UserService.getAllUser();
        console.log(data.docs);
        // @ts-ignore
        setUsers(data.docs.map((doc) => ({...doc.data(),id:doc.id}) ));
    };
    useEffect(() => {
        getUsers();
    }, []);
    return (
        <>
        <pre> {JSON.stringify(users,undefined,2)}</pre>
        </>
    )
 }

export default userList;