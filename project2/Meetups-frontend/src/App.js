

import AttendMetting from './pages/AttendMetting';
import NewMetting from './pages/NewMetting';
import FavouriteMetting from './pages/Favourite';
import {Route,Routes} from 'react-router-dom'
import Main from './components/Layouts/Main';
import "./App.css"

function App() {
  return (
    <div className="divv">
      <Main>
      <Routes>
      <Route path="/" element={<AttendMetting/>}/>
      <Route path="/new-meetup" element={<NewMetting/>}/>
      <Route path="/favorites" element={<FavouriteMetting/>}/>
      </Routes>
      </Main>
    </div>
  );
}

export default App;
