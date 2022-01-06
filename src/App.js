import React from "react"
import data from "./data"
import TypeAhead from "./components/TypeAhead";
import './App.css';

function App() {
  return (
    <div>
     <TypeAhead books={data} handleSelect={(suggestion) => {
        window.alert(suggestion)
     }}/>
    </div>
  );
}

export default App;
