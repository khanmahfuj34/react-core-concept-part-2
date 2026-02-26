import { use } from "react"
import Friend from "./friend";

export default function Friends({friendsPromise}){
    const friends = use(friendsPromise);
    console.log(friends);
    return(
        <div className="card">
            <h4>Friends: {friends.length}</h4>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    )
}