import { useState } from "react"
export default function FormAddFriend({ onAddNewFriend }){
    const [name,setName]=useState("")
    const defaultImgUrl="https://pps.whatsapp.net/v/t61.24694-24/416155503_503828728949155_7137867580213722321_n.jpg?ccb=11-4&oh=01_Q5AaIIAWOpQWf4GR9-mdjKKQK8nd8dcwin-qy1Qh9blPzKQo&oe=6715B412&_nc_sid=5e03e0&_nc_cat=107"
    const [imageUrl,setImageUrl]=useState(defaultImgUrl);
    const handleSubmit=e=>{
        e.preventDefault();
        if(!name||!imageUrl) return;
        const id =crypto.randomUUID();
        const newFriend={
            id,name,image:`${imageUrl}?=${id}`,balance:0
        }
        onAddNewFriend(newFriend);
        setName("");
        setImageUrl(defaultImgUrl);
    }
    return(
        <form className="form-add-friend" onSubmit={handleSubmit}>
            <label htmlFor="name">🤡 Nama</label>
            <input type="text" id="name" value={name} onChange={e=>setName(e.target.value)} />
            <label htmlFor="imageUrl">📸 Gambar</label>
            <input type="text" id="imageUrl" value={imageUrl} onChange={e=>setImageUrl(e.target.value)}/>
            <button className="button">Submit ➕</button>
        </form>
    )
}