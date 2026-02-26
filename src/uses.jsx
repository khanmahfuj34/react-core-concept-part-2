// const loadData = async()=>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/comments');
//     const data = res.json();
//     return data;
// }

import { use } from "react"

export default function Uses({fetchUsers}){
    const Users = use(fetchUsers);
    console.log(Users);
    return(
        <div className="card">
            <h3>Uses: {Uses.length}</h3>
        </div>
    )
}