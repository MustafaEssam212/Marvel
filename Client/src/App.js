import './App.css';
import Header from './Components/Header'

import Info from './Components/Info'
import {BrowserRouter,Route} from 'react-router-dom';
import SignUp from './Components/SignUp'
import Home from './Components/Home'
import Footer from './Components/Footer'
import FooterInfo from './Components/FooterInfo'
import SignIn from './Components/SignIn'
import About from './Components/About'
import Contact from './Components/Contact'
import Policies from './Components/Policies'
import Shop from './Components/Shop'
import Review from './Components/Review'
import {UserProvider} from './Components/User-Context'
import MyProfile from './Components/MyProfile'
import Manage from "./Components/Manage";
import Order from "./Components/Order";
import Cart from "./Components/Cart";
import AdminCart from "./Components/AdminCart";
import ChatIcon from "./Components/ChatIcon";
import Chat from "./Components/Chat";
import ChatRoom from "./Components/ChatRoom";
import Search from "./Components/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Info />
        <Header />
      

        <Route path="/SignUp" component={SignUp}></Route>
        <Route exact path="/" component={Home}></Route>
        <Route path="/SignIn" component={SignIn}></Route>
        <Route path="/About" component={About}></Route>
        <Route path="/Contact" component={Contact}></Route>
        <Route path="/Policies" component={Policies}></Route>
        <Route path="/Shop" component={Shop}></Route>
        <Route path="/Review/:id" component={Review}></Route>
        <Route path="/MyProfile" component={MyProfile}></Route>
        <Route path="/Manage" component={Manage}></Route>
        <Route path="/Order/:id" component={Order}></Route>
        <Route path="/Cart" component={Cart}></Route>
        <Route path="/AdminCart" component={AdminCart}></Route>
        <Route path="/Chat" component={Chat}></Route>
        <Route path="/ChatRoom" component={ChatRoom}></Route>
        <Route  path="/Search" component={Search}></Route>  

        <ChatIcon />
        <Footer />
        <FooterInfo />
        </BrowserRouter>
    </div>
  );
}

function AppWithStore(){
  return(
    <UserProvider>
        <App />
    </UserProvider>
  )
}


export default AppWithStore;