import Navbar from './Navbar';
import Home from './Home';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import Advisors from './Advisors';
import Advisor from './advisor';
import Article from './Articles';
import Articles from './article';
import Articles2 from './article2';
import Match from './match';
import UserForm from './component/UserForm'
import User from './component/User'
import Payment from './component/Payment';
import Help from './help';
import Login from './component/Login';
import Profile from './profile';
import EditProfile from './editProfile';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/*" element={<Home/>} />
            <Route path="/create" element={<Create/>} />
            <Route path='/advisors' element={<Advisors/>}></Route>
            <Route path='/articles' element={<Article/>}></Route>
            <Route path='/advisors/:id' element={<Advisor/>}></Route>
            <Route path='/articles/:id' element={<Articles/>}></Route>
            <Route path='/articles2/:id' element={<Articles2/>}></Route>
            <Route path='/match' element={<Match/>}></Route>
            <Route path='/component/User' element={<User/>}></Route>
            <Route path='/component/Login' element={<Login/>}></Route>
            <Route path='/component/UserForm' element={<UserForm/>}></Route>
            <Route path='/component/Payment' element={<Payment/>}></Route>
            <Route path='/help' element={<Help/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
            <Route path='/editProfile' element={<EditProfile/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;