import AdvisorsList from "./AdvisorsList";
import useFetch from "./useFetch";

const Advisors = ( ) => {
  const { data: blogs, isPending, error } = useFetch('https://my-json-server.typicode.com/KellyLin1026/Web-Project2advisors')
    return (  
    <div className="advisor">
      <h2>Advisors</h2>
      {error &&<div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <AdvisorsList blogs = {blogs} title="Advisors"/>}    
    </div>
     );
}
 
export default Advisors;