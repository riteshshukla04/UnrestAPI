
import './App.css';
import Multiline from './components/TextArea/Multiline';
import Urlbar from './components/UrlBar/urlbar';
import SubmitButton from './components/Button/button';
import { TitleBar } from './components/TitleBar';

function App() {
  return (
    <div className="App">
      <TitleBar/>
      <Urlbar/>
     <Multiline/>
     <SubmitButton/>
    </div>
  );
}

export default App;
