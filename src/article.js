import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";
import woman from './woman.png'; 

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:3000/articles/' + id);
  
  return (
    <div className="article">
      <h2>Article - { id }</h2>
      {error &&<div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blog && (
        <div className="articles" key={blog.id} >
            <article>
        <h2  className="Details">{ blog.title }</h2>
        <h3>Available Time : Mon~Fri</h3>
        <br></br>
        <h3>Specialties : Love, Life Path, Family, Friendship</h3>
        <br></br>
        <p className="Details"> { blog.details }</p>   
        <br></br> 
        <br></br>
            </article>
      </div>
      )}
    </div>
  );
}
 
export default BlogDetails;