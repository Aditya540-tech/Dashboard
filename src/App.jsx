import HomePage from './pages/HomePage'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Orders from './pages/Orders';

function App() {
 
  return (
    <Router>
      <Routes>
      <Route exact path="/" element ={<HomePage/>}></Route>
      <Route exact path="/orders" element ={<Orders/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
