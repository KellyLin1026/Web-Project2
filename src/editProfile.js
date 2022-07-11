
import React, { useEffect, useState } from 'react'
function EditProfile() {
  const [users, setUser] = useState([])
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [intro, setIntro] = useState("");
  const [userId,setUserId]=useState(null)

  useEffect(() => {
    getUsers();
  }, [])
  function getUsers() {
    fetch("https://my-json-server.typicode.com/KellyLin1026/Web-Project2/profile").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp)
        setName(resp[0].name)
        setMobile(resp[0].mobile)
        setIntro(resp[0].intro)
        setUserId(resp[0].id)

      })
    })
  }

  function selectUser(id)
  {
    let item=users[id-1];
    setName(item.name)
    setMobile(item.mobile);
    setIntro(item.intro)
    setUserId(item.id)
  }
  function updateUser()
  {
    let item={name,mobile,intro}
    console.warn("item",item)
    fetch(`https://my-json-server.typicode.com/KellyLin1026/Web-Project2/profile/${userId}`, {
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
                <h4>Mobile : {item.mobile}</h4>
                <br></br>
                <h4>Introduction : {item.intro}</h4>
                <br></br>
                <button onClick={() => selectUser(item.id)} style={{ 
            backgroundColor: '#fbd3c5',
            borderRadius: '8px',
            color: 'black',
            padding: '4px 14px',
            margin: '20px',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: 'bold',
            textAlign: 'center',
            width: '100px'
        }}>Update</button>
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
        <input type="number" value={mobile}  onChange={(e)=>{setMobile(e.target.value)}} /> <br /><br />
        <textarea type="text" value={intro}  onChange={(e)=>{setIntro(e.target.value)}} /> <br /><br />
        <button onClick={updateUser} style={{ 
            backgroundColor: '#fbd3c5',
            borderRadius: '8px',
            color: 'black',
            padding: '4px 14px',
            margin: '20px',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: 'bold',
            textAlign: 'center',
            width: '100px'
        }} >Update User</button>  
      </div>
    </div>
  );
}
export default EditProfile;