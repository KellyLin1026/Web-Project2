import { Link } from 'react-router-dom';
import tarot from './tarot.jpg'; 

const ArticleList = ({blogs, title }) => {
  return (
    <div className="blog-list">
     {blogs && blogs.map(blog => (
        <div className="articles" key={blog.id} >
        <br></br> 
        <img src = {tarot} />
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
            textAlign: 'right',
            width: '100px'
        }}>English version</Link>
        <Link to={`/advisors/${blog.id}`} style={{ 
            backgroundColor: '#fbd3c5',
            borderRadius: '8px',
            color: 'black',
            padding: '4px 14px',
            margin: '20px',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: 'bold',
            textAlign: 'right',
            width: '100px'
        }}>French version</Link>
        </div>
      ))}
    </div>
  );
}
 
export default ArticleList;