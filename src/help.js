import { useState } from "react";
import { Link } from "react-router-dom";
import data from "./data";
import Faq from "react-faq-component";
import React, { Fragment } from "react";

const Help = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="create">
      <h2>FAQS</h2>
      <Fragment>
      <Faq
        data={data}
        styles={{
          bgColor: "white",
          titleTextColor: "#48482a",
          rowTitleColor: "#78789a",
          rowTitleTextSize: "large",
          rowContentColor: "#48484a",
          rowContentTextSize: "16px",
          rowContentPaddingTop: "10px",
          rowContentPaddingBottom: "10px",
          rowContentPaddingLeft: "10px",
          rowContentPaddingRight: "50px",
          arrowColor: "red"
        }}
        config={{
          animate: true
        }}
      />
    </Fragment>
        <br/>
        <br/>
        <br/>
        <br/>
      <h2>Contact Us</h2>
      <form>
        <label>User Name: (optional)</label>
        <input 
          type="text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>User Email: (optional)</label>
        <input 
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Things to mention:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <br/>
        <br/>
        <button onClick={() => {window.confirm('Are you sure to submit this?');}}
        style={{ 
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
      }}>Submit</button>
      </form>
    </div>
  );
}
 
export default Help;