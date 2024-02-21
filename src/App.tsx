
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Game from './pages/Game';
import Main from './pages/Main'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="my__app">
      
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Main />}/>
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
