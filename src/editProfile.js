
import React, { useEffect, useState } from 'react'
function EditProfile() {
  const [users, setUser] = useState([])
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [intro, setIntro] = useState("");
  const [userId,setUserId]=useState(null)

  useEffect(() => {
    getUsers();
  }, [])
  function getUsers() {
    fetch("http://localhost:8010/profile").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp)
        setName(resp[0].name)
        setMobile(resp[0].mobile)
        setEmail(resp[0].email)
        setIntro(resp[0].intro)
        setUserId(resp[0].id)

      })
    })
  }

  function selectUser(id)
  {
    let item=users[id-1];
    setName(item.name)
        setEmail(item.email)
        setMobile(item.mobile);
        setIntro(item.intro)
        setUserId(item.id)
  }
  function updateUser()
  {
    let item={name,mobile,email,intro}
    console.warn("item",item)
    fetch(`http://localhost:8010/profile/${userId}`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
  }
  return (
    <div className="Details">
      <h1>Edit your Profile</h1>
      <table>
      <tbody>
          {
            users.map((item, i) =>
              <tr key={i}>
                <h4>Name :{item.name}</h4>
                <br></br>
                <h4>Email: {item.email}</h4>
                <br></br>
                <h4>Mobile : {item.mobile}</h4>
                <br></br>
                <h4>Introduction : {item.intro}</h4>
                <br></br>
                <button onClick={() => selectUser(item.id)}>Update</button>
              </tr>
            )
          }
          </tbody>
        </table>
      <div className="Details">
      <p class = "text2">Choose your profile picture: </p>
      <input type="file" id="myFile" name="filename" />
      <input type="submit" /><br /><br />
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /> <br /><br />
        <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /><br />
        <input type="text" value={mobile}  onChange={(e)=>{setMobile(e.target.value)}} /> <br /><br />
        <textarea type="text" value={intro}  onChange={(e)=>{setIntro(e.target.value)}} /> <br /><br />
        <button onClick={updateUser} >Update User</button>  
      </div>
    </div>
  );
}
export default EditProfile;