import React, {useState} from 'react'
import Convert from './Convert';
import Dropdown from "./Dropdown";

const options =[
    {
        label:"Afrikaans",
        value:"af"
    },
    {
        label:"Hindi",
        value:"hi"
    },
    {
        label:"Arabic",
        value:"ar"
    },
    {
        label:"Dutch",
        value: "nl"
    }
]


const Translate =()=> {
    const [language, setLanguage]=useState(options[0]);
    const [text, setText]=useState("");
    return (
        <div>   
            <div className="ui form">
                <div className="field">
            <label>Enter Text  </label>
            </div>
            <input value={text} onChange={(e)=>setText(e.target.value)} />
            </div>
            <br />
            <Dropdown  
            label="Select a Language"
            selected ={language} 
            onSelectedChange={setLanguage}
             options={options}/>

           
             <h3 className="ui header">Output Here...</h3>
             <Convert text={text} language={language} />
        </div>
    )
}

export default Translate
