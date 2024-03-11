
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Game from './pages/ticTacToe/Game';
import Main from './pages/Main'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hello from './classe-components/Hello';

function App() {

  return (
    <div className="my__app">
      
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Hello age={10} name='El Ouali' />}/>
          <Route path="/games" element={<Game />}>
          <Route path="*" element={<Main />} />
          </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  )
}

export default App
