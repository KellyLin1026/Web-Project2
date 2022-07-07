import { useState } from "react";
import { Link } from "react-router-dom";

const Help = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="create">
      <h2>Contact Us</h2>
      <form>
        <label>User Name:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>User Email:</label>
        <input 
          type="text" 
          required 
          value={email}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Things to mention:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <br/>
        <br/>
        <Link to={`/`} style={{ 
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
        }}>Submit</Link>
      </form>
    </div>
  );
}
 
export default Help;