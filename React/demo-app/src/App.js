import logo from './logo.svg';
import './App.css';
import State from './Hooks/useState/State';
import RefHook from './Hooks/useRef/RefHook';
import Effect from './Hooks/useEffect/Effect';
import ClassComponent from './ClassAndFunctionalComponent/ClassComponent';
import FunctionalComponent from './ClassAndFunctionalComponent/FunctionalComponent';


function App() {
  return (
    <div className="App">
     
      
      <ClassComponent/>
      <FunctionalComponent/>
      
    </div>
  );
}

export default App;
