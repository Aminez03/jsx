import logo from './logo.svg';
import './App.css';
import { ProfilePhoto } from './profile/ProfilePhoto';
import FullName from './profile/FullName';
import { Address } from './profile/Address';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './profile/Contact';
import Profi from './profile/Profi';



function App() {
  return (
    <div className="App">
      <div className="profil">
      <ProfilePhoto/>
      <FullName/>
      <Address/>
      </div>
      <div className="row">
        <div className="col-4">
          <Contact/>
        </div>
        <div className="col-8">
          <Profi/>
        
        </div>
      </div>
      
    </div>
  );
}

export default App;
