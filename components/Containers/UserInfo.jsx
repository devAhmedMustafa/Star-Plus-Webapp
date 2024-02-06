export default function UserInfo({username, email}){
    return (
        <div className="absolute top-10 -left-40 bg-[#252525] p-3 rounded-2xl z-20 w-[300px]">
            <h1>{username}</h1>
            <p>{email}</p>
        </div>
    )
}