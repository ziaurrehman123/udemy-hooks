import axios from 'axios';
import React, {useState, useEffect} from 'react'

const Convert = ({language, text}) => {
    const [translated, setTranslated] = useState("");
    useEffect(() => {
        const doTranslation = async ()=>{
           const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params:{
                    q: text, 
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });
            setTranslated(data.data.translations[0].translatedText);
        };
      
       doTranslation();
    }, [language, text]);
    return (
        <div>
            <h4 className="ui header">{translated}</h4>
        </div>
    )
}

export default Convert
