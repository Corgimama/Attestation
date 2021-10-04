import React from 'react';
import ReactDOM from 'react-dom';

const BaggageList = () => {
    const items = ['Картина', 'Корзина', 'Картонка', 'Маленькая собачонка'];
    return (
        <ul>
            <li onClick={()=>{console.log(`В багаж сдано: ${items[0]}`)}}>{items[0]}</li>
            <li onClick={()=>{console.log(`В багаж сдано: ${items[1]}`)}}>{items[1]}</li>
            <li onClick={()=>{console.log(`В багаж сдано: ${items[2]}`)}}>{items[2]}</li>
            <li onClick={()=>{console.log(`В багаж сдано: ${items[3]}`)}}>{items[3]}</li>
        </ul>
    );
}

const AppHeader = () => {
    return (
        <h1>Багаж дамы</h1>
    );
}
const TextAbout = () => {

    const TextStyle = {
        'fontSize': '20px',
        'fontStyle': 'italic',
        'color': '#dd1221'
    }  
    const Text = "Дама сдавала в багаж много вещей и забыла, что сдавала. Поэтому она составила список"
    return (
        <p style={TextStyle} className="myClass">
        {Text} 
        </p>
    );
}

const App = () =>{
    return(
        <div>
            <AppHeader/>
            <TextAbout/>
            <BaggageList/>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));

