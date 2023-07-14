import logo from './logo.svg';
import './style.css';
import {Title} from "./Components";

function App() {
    return (
        <div className="App">
            <Title>React App</Title>
            <img className="logo1" src="/logo192.png" alt=""/>
            <img src={logo} alt=""/>
        </div>
    );
}

export default App;
