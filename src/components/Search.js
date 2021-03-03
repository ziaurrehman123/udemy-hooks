import axios from 'axios';
import React,{useState, useEffect} from 'react'


const Search =()=> {
const [term, setTerm]=useState('');
const [results, setResults]=useState([]);
console.log(results)
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
setResults(data);
};
Search();
},[term])
    return (
        <div>
            <form className="ui form">
                <div className="field">
                    <label>Seach</label>
                    <input 
                    value={term}
                    onChange={(e)=>setTerm(e.target.value)}
                    className="input"
                     />
                </div>
                

            </form>
        </div>
    )
}

export default Search
