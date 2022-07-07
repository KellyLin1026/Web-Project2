import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";
import woman from './woman.png'; 

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('https://my-json-server.typicode.com/KellyLin1026/Web-Project2/advisors/' + id);
  const { data: comment } = useFetch('https://my-json-server.typicode.com/KellyLin1026/Web-Project2/blog');
  
  return (
    <div className="advisor">
      <h2>Advisor - { id }</h2>
      {error &&<div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blog && (
        <div className="advisors" key={blog.id} >
        <img src = {woman} />
        <h2  className="Details">{ blog.title }</h2>
        <h3>Available Time :{blog.time}</h3>
        <br></br>
        <h3>Specialties : {blog.special}</h3>
        <br></br>
        <p className="Details"> { blog.details }</p>   
        <br></br> 
        <br></br>
        <Link to="/component/Payment"   style={{ 
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
        <Link to="/component/Payment"  style={{
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
      <br/>
      <br/>
      {comment && comment.map(comments => (
        <div className="advisors">
           <h3 col-md-6>{comments.title}</h3> 
           <p>{comments.body}</p>
        </div>
      ))}  
      <br/>
      <br/>
      <Link to={`/create`} style={{
          backgroundColor: '#fbd3c5',
          borderRadius: '8px',
          color: 'black',
          padding: '4px 34px',
          margin: '30px',
          textDecoration: 'none',
          fontSize: '20px',
          fontWeight: 'bold',
          textAlign: 'center',
          width: '100px' 
      }}>Add comment</Link>
      </div>
      )}
    </div>
  );
}
 
export default BlogDetails;