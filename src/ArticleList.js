import { Link } from 'react-router-dom';
import woman from './woman.png'; 

const ArticleList = ({blogs, title }) => {
  return (
    <div className="blog-list">
     {blogs && blogs.map(blog => (
        <div className="articles" key={blog.id} >
        <img src = {woman} />
        <h2>{ blog.title }</h2>
        <h4>Written by { blog.author }</h4>
        <p>{ blog.body }</p>
        <br></br>
        <br></br>
        <Link to={`/articles/${blog.id}`} style={{ 
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
        }}>Read More</Link>
        </div>
      ))}
    </div>
  );
}
 
export default ArticleList;