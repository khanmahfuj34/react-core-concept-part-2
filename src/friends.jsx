import { use } from "react"

export default function Friends({friendsPromise}){
    const friends = use(friendsPromise);
    console.log(friends);
    return(
        <div>
            <h4>Friends: {friends.length}</h4>
            {/* {friends.map((friend) => (
                <p key={friend.id}>{friend.name}</p>
            ))} */}
        </div>
    )
}