import { Link } from "react-router-dom";
const Match = () => {
    return ( 
        <div className="Details">
        <h4>What do you want to talk about</h4>
        <br/>
        <select>
          <option value="Love">Love</option>
          <option value="Life">Life</option>
          <option value="Family">Family</option>
          <option value="Spirit">Spirit</option>  
          <option value="Career">Career</option>
          <option value="Health">Health</option>
          <option value="Money">Money</option>
          <option value="Others">Others</option>      
        </select>
        <br/>
        <br/>
        <h4>What kind of Price you are looking for</h4>
        <br/>
        <select>
          <option value="0~1.99">0~1.99</option>
          <option value="1.99~4.99">1.99~4.99</option>
          <option value="4.99~7.99">4.99~7.99</option>
          <option value="7.99+">7.99+</option>       
        </select>
        <br/>
        <br/>
        <h4>What do you want to hear</h4>
        <select>
        <option value="Direct Opinion">Direct Opinion</option>
        <option value="Soft Opinion">Soft Opinion</option>
        <option value="Not Sure">Not Sure</option>
        </select>
        <br/>
        <br/>
        <br/>
        <Link to={`/advisors`} style={{ 
            backgroundColor: '#fbd3c5',
            borderRadius: '8px',
            color: 'black',
            padding: '14px 44px',
            margin: '30px',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: 'bold',
            textAlign: 'center',
            width: '100px'
        }}>Finish Matching</Link>
        </div>
     );
}
 
export default Match;