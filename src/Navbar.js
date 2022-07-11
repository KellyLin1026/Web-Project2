import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
      <h1>The Tales Kingdom</h1>
      <div className="links">
        <Link to="/" className="links">Home</Link>
        <Link to="/advisors" className="links">Advisors</Link>
        <Link to="/articles" className="links">Article</Link>
        <Link to="/help" className="links">Contact</Link>
        <Link to="/profile" className="links" style={{ 
          margin:'10px',
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Profile</Link>
        <Link to="/component/Login" style={{ 
          margin:'10px',
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Login</Link>
        <Link to="/component/UserForm" style={{ 
          margin:'10px',
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Register</Link>
      </div>
    </nav>
    <nav className="navbar2">
    <h3>Le royaume des contes</h3>
       <div className="links">
        <Link to="/" className="links">Maison</Link>
        <Link to="/advisors" className="links">Conseillers</Link>
        <Link to="/articles" className="links">Article</Link>
        <Link to="/help" className="links">Contact</Link>
        <Link to="/profile" className="links" style={{ 
        }}>Profil</Link>
        <Link to="/component/Login" className="links" style={{ 
        }}>Connexion</Link>
        <Link to="/component/UserForm" className="links" style={{ 
        }}>S'inscrire</Link>
        
      </div>
      </nav>
    </div>
  );
}
 
export default Navbar;
