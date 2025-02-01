import { useState } from 'react';
import "./index.css"; 

const Color = ({ color, setSelectedColor, selectedColor }) => {
  return (
    <div
      className={`${selectedColor === color ? "selected" : ""}`}
      style={{
        width: "8em",
        height: "8em",
        margin: "5px",
        cursor: "pointer",
        display: "inline-block",
        borderRadius: "50%",
        marginTop: "2em",
        background: color, 
      }}
      onClick={() => setSelectedColor(color)}
    ></div>
  );
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");


const colorSetId= "color-sets";
  const colorSet = [
    ["red", "blue"],
    ["orange", "purple"],
    ["pink", "maroon"],
    ["black", "teal"],
    ["cyan", "magenta"],
    ["lime", "navy"],
    ["gold", "brown"],
    ["violet", "coral"],
    ["silver", "forestgreen"],
    ["turquoise", "purple"],
    ["skyblue", "darkred"],  
    ["salmon", "indigo"],    
    ["lavender", "chocolate"],  
    ["seagreen", "crimson"], 
    ["orchid", "sienna"],    
    ["darkcyan", "goldenrod"] 
  ];

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>

      {colorSet.map(([left, right], index) => {
        const gradient = `linear-gradient(to right, ${left}, ${right})`;
        return (
          <div key={index} id="colors-list">
            <Color color={left} setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
            <Color color={gradient} setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
            <Color color={right} setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
          </div>
        );
      })}
    </div>
  );
};

export default App;
