import ArticleList from "./ArticleList";
import useFetch from "./useFetch";

const Advisors = ( ) => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:3001/articles')
  
    return (  
    <div className="article">
      <h2>Articles</h2>
      {error &&<div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <ArticleList blogs = {blogs} title="Articles"/>}
    </div>
     );
}
 
export default Advisors;