
import React, { useEffect, useState } from 'react'
import useFetch from './useFetch';
import { Link } from 'react-router-dom';
import woman from './woman.png'; 

function Profile() {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8001/profile')
    const { data: comment } = useFetch('http://localhost:8001/consult');

    return (  
    <div className="article">
      <h2>My Profile</h2>
      {error &&<div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && blogs.map(blog => (
        <div className="articles" key={blog.id} >
        <img src = {woman} />
        <h2>{ blog.name }</h2>
        <h4>Advisors: 2 - Readings: 22 - Since: 2015</h4>
        <br/>
        <h3>My Advisors: { blog.advisors }</h3>
        <br></br>
        <p>{ blog.intro }</p>
        <br></br>
        <br></br>
        <h3>Reviews from the consultation: </h3>
        <br></br>
        {comment && comment.map(comments => (
        <div className="advisors">
           <h3>{comments.name}</h3> 
           <br></br>
           <p>{comments.body}</p>
        </div>
         ))}  
        <br/>
        <br/>
        <br></br>
        <Link to="/editProfile" style={{ 
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
        }}>Edit the Profile</Link>
        </div>
      ))}
    </div>
     );
}
export default Profile;