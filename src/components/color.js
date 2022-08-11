import { useState } from 'react'

const ColorComp = () => {
    const [textColor, setTextColor] = useState('Purple')
    // TextColor is our Getter(Const variable) can only be updated by  the setter
    // SetTextColor is our Setter(function) updates text color

    console.log('TextColor ->', textColor)


    return (
        <div className="App">
          {/* only more JSX allowed */}
          <header className="App-header">
            <h1 style={{ color: textColor }}>My favorite color is {textColor}</h1>
    
            <button onClick={() => setTextColor('blue')}>Blue</button>
            <br />
            <button onClick={() => setTextColor('red')}>Red</button>
            <br />
            <button onClick={() => setTextColor('white')}>White</button>
          </header>
        </div>
      )
    }

    export default ColorComp