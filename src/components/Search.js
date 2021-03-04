import axios from 'axios';
import React,{useState, useEffect} from 'react'


const Search =()=> {
const [term, setTerm]=useState('Programming');
const [results, setResults]=useState([]);
console.log(results);
console.log('I RUN WITH EVERY RENDER');
useEffect(() => {
   
const Search = async ()=>{
const {data}=await axios.get('https://en.wikipedia.org/w/api.php', {
    params:{
        action:'query',
        list:'search',
        origin:'*',
        format:'json',
        srsearch: term,
    },
});
setResults(data.query.search);
};
const timeOutId=setTimeout(()=> {   
if (term){
Search();
}
}, 1000);
},[term]);

const renderedResults = results.map((result) => {
    return(
    <div key={result.pageid }className="item">
        <div className="right floated content">
            <a 
            href={`https://en.wikipedia?curid=${result.pageid}`}
            className="ui button "
            >
                Go
            </a>

        </div>
        <div className="content">
            <div className="header">
                {result.title}
            </div>
            <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
    
        </div>
    </div>
    );
}) ;
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Seach</label>
                    <input 
                    value={term}
                    onChange={(e)=>setTerm(e.target.value)}
                    className="input"
                     />
                </div>
                

            </div>
            <div className="ui celled list">   
            {renderedResults}
        </div>
        </div>

    )
}

export default Search;
