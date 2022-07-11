import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";
import tarot from './tarot.jpg'; 

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://my-json-server.typicode.com/KellyLin1026/Web-Project2/articles/' + id);
  
  return (
    <div className="article">
      <h2>Article - { id }</h2>
      {error &&<div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blog && (
        <div className="articles" key={blog.id} >
        <article>
        <img src = {tarot} />
        <h2  className="Details">{ blog.title }</h2>
        <h3>Auteure : {blog.author}</h3>
        <br></br>
        <p className="Details"> { blog.details }</p>   
        <br></br> 
        <br></br>
        </article>
        <Link to={`/articles`} style={{ 
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
        }}>Retour à l'article</Link>
      </div>
      )}
    </div>
  );
}
 
export default BlogDetails;