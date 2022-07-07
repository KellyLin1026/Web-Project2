import { Link } from 'react-router-dom';
import woman from './woman.png'; 

const AdvisorsList = ({blogs, title }) => {
  return (
    <div className="blog-list">
     {blogs && blogs.map(blog => (
        <div className="advisors" key={blog.id} >
        <img src = {woman} />
        <h2>{ blog.title }</h2>
        <p>{ blog.body }</p>
        <br></br>
        <h5>Rankings: {blog.rank} <br></br>
        Readings : {blog.readings} <br></br>
        Since: {blog.Time} </h5>  
        <br></br>
        <Link to={`/advisors/${blog.id}`} style={{ 
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
        }}>Chat Now</Link>
        <Link to={`/advisors/${blog.id}`} style={{
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
        }}>Call Now</Link>
        </div>
      ))}
    </div>
  );
}
 
export default AdvisorsList;