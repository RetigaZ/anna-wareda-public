import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Error from './pages/404'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/" element={<Error />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
