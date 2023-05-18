import "./App.css";
import Title from "./Title";
import { useState } from "react";

function App() {
    let user = "Geethu";
    const [toggle, setToggle] = useState(true);

    //Button-handler fn
    const togglehandler = () => {
        setToggle(!toggle);
    };


    return (
        <div className="App">
           
            {toggle &&  <Title user={user} />}
            <button onClick={togglehandler}>Toggle</button>
        </div>
    );
}

export default App;
