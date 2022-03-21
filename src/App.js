import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import BookstarsContextProvider from "./context/bookstars.context";


import Landing from "./pages/landing/landing.page";
import Characters from "./pages/characters/characters.page";




function App() {
  return (
    <BookstarsContextProvider>
        <div className="App">
            <Router>
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='/characters' element={<Characters />} />
                </Routes>
            </Router>
        </div>
    </BookstarsContextProvider>
  );
}

export default App;
