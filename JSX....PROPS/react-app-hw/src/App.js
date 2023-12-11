import Children from './CHIDREN';
import './App.css';
import First from './PROPS-JSX/FIRST';
import Second from './PROPS-JSX/main';

function App() {
  return (
    <div className="App">
        <First color="red"/>
        <Second color="blue"/>
        <Children>
          world
        </Children>
        <Children>
          top
        </Children>
    </div>
  );
}

export default App;
