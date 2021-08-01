import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Blog from './components/Blog/blog';
import Explore from './components/Explore/explore';
import Login from './components/Login/login';
import SignUp from './components/Signup/signup';
import Ticket from './components/Tickets/ticket';
import Booking from './components/Booking/booking';
import ExploreDetail from './components/Explore/exploredetail';
import Bingo from './components/Profile/bingo';
import LatestBlog from './components/Blog/latest';
import NavbarNew from './components/Navbar/nav';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useState, useEffect } from 'react';
import endpoints from './endpoints';
import axios from 'axios';
import Home from './components/Home/Home';
import About from './components/About/about';
// import Acc from './components/acc';
function App() {

  const [users, setUsers] = useState(null);
  useEffect(() => {
    if (!users) {
      axios
        .post(endpoints.userdetails, {
          Token: `${localStorage.getItem("token")}`,
        })
        .then((res) => {
          console.log(res.data);
          setUsers(res.data.user);
        });
    }
  }, []);

  return (
    <Router>

      <div className="App">
        {/* <Navbar /> */}
        <NavbarNew users={users} />
        <Route path="/blog">

          <Blog />
        </Route>
        <Route exact path="/explore">

          <Explore />
        </Route>
        <Route exact path="/login">

          <Login setUsers={setUsers} />
        </Route>
        <Route exact path="/register">

          <SignUp setUsers={setUsers} />
        </Route>
        {/* <Route path="/booking" component={Booking} /> */}
        <Route path="/explore/:title" component={ExploreDetail} />
        <Route exact path="/">

          <Home />
        </Route>
        {/* <Route exact path="/" component={LatestBlog} /> */}
        <Route exact path="/about" component={About} />
        {/* <Bingo /> */}
      </div>
    </Router >
  );
}

export default App;
