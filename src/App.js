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
                    <Route exact path='/' element={<Characters />} />
                    <Route exact path='/episodes' element={<Landing />} />
                    <Route exact path='/characters' element={<Characters />} />
                </Routes>
            </Router>
        </div>
    </BookstarsContextProvider>
  );
}

export default App;
