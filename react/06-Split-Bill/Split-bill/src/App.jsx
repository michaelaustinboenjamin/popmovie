import { useState } from 'react'
import friendList from "./friends.json"
import FriendListCard from './components/FriendListCard'
import FormSplitBill from './components/FormSplitBill'
import FormAddFriend from './components/FormAddFriend'

function App() {
  const [friends,setFriends]=useState(friendList)
  const [showAddFriend,setShowAddFriend]=useState(true);
  const [selectedFriend,setSelectedFriend]=useState(null)
  const handleShowAddFriend=()=>{
    setShowAddFriend(showAddFriend=>!showAddFriend);
  }
  const onAddNewFriend=friend=>{
    setFriends(friends=>[...friends,friend])
  }
  function onSelectedFriend(friend){
    setSelectedFriend((selected)=>selected?.id===friend.id ? null : friend)
    setShowAddFriend(false)
  }
  function handleSplitBill(value){
    setFriends(
      friends.map((friend)=>{
        if(friend.id===selectedFriend?.id){
          return{
            ...friend,balance:friend.balance+value
          }
        }
        return friend;
      })
    )
    setSelectedFriend(null)
  }
  return (
    <>
      <div className='app'>
        <div className='sidebar'>
          <FriendListCard friends={friends} onSelectedFriend={onSelectedFriend} selectedFriend={selectedFriend}/>
          {showAddFriend&&<FormAddFriend onAddNewFriend={onAddNewFriend}/>}
          <button className='button' onClick={handleShowAddFriend}>
            {showAddFriend ? "Tutup" : "Tambah Teman"}
            </button>
        </div>
        {selectedFriend&&(
          <FormSplitBill selectedFriend={selectedFriend} handleSplitBill={handleSplitBill}/>
        )}
      </div>
    </>
  )
}

export default App
