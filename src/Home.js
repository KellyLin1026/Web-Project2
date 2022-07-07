import Match from './match';
import useFetch from "./useFetch";
import { Link } from 'react-router-dom';

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8001/match')
    return ( 
        <div className="home">
            <h2>Welcome to Tales Kingdom</h2>
            <br></br>
            <p> Welcome to Tales Kingdom, located in 369 Bank Street in Ottawa. 
                Over the past 10+ years we have developed the professional team.
                <br></br><br></br> 
                We are aiming to let every customers feel comfortable with our services.
                <br></br><br></br>
                We welcome all, and offer services for whether you are a new or returning client.<br></br>
                Our hairdressers thrives at understanding your 
                beauty visions and ensure you leave with feeling like your 
                best self.
                <br></br><br></br>
                Give us a call or stop by to meet our team and set up a consultation. 
                <br></br>
                We thank you for your continued support and loyalty and look forward to your next visit!</p>
                <br></br><br></br> 
        <Link to={`/match`} style={{ 
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
        }}>Get Your Match Advisor</Link>     
        </div>
     );
}
 
export default Home;