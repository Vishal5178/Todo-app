
import './App.css'
import Appfooter from './components/AppFooter/Appfooter';
import AppHeader from './components/AppHeader/AppHeader';
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <div className="App">
      <AppHeader/>
      <main>
      <Home/>
      </main>
      <Appfooter/>
      
    </div>
   
  )
}

export default App;
