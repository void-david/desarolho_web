import { currentUser } from "@clerk/nextjs/server";
import { User, auth } from "@clerk/nextjs/server";
import { clerkClient } from '@clerk/clerk-sdk-node';

//fetch dummy data
const getData = async () => {
    const res = await fetch('https://dummyjson.com/products');
    return res.json();
}

const ServerComp = async () => {
    const data = await getData();
    //console.log(data);
    const {userId, getToken} = auth();
    const user = await currentUser();

    const userList = await clerkClient.users.getUserList();
    //console.log(userList);

    return (
        <div>
        <h1>Server Component</h1>
        <h1>{user.firstName}</h1>
        {userList.data.map((user, index) => (
  <div key={index}>{user.firstName}</div>
))}
        </div>
    );
}

export default ServerComp;