
import './App.css';
import Multiline from './components/TextArea/Multiline';
import Urlbar from './components/UrlBar/urlbar';
import SubmitButton from './components/Button/button';
import { TitleBar } from './components/TitleBar';
import ChoiceField from './components/ChoiceField/Select';
import Upload from './components/FileUpload/fileupload';
import { useContext } from 'react';
import { GlobalContext } from './components/Actions';

function App() {
  const [, , , , type, , ,] = useContext(GlobalContext);
  console.log(type);
  return (
    <div className="App">
      <TitleBar/>
      <Urlbar/>
      <ChoiceField/>
     { type==="Data"? <Multiline/>:<Upload/>}
     <SubmitButton/>
    </div>
  );
}

export default App;
