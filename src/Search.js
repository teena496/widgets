import React, { useState,useEffect } from 'react'
import axios from 'axios'

const Search = () => {
    const[term, setTerm]=useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params:{
                    action:'query',
                    list:'search',
                    origin:'*',
                    format:'json',
                    srsearch:term
                }
            }) 
            setResults(data.query.search);
        };

        const timerId =  setTimeout(() => {
            if(term){
                search();
            }
        }, 500);

        return () =>{
            clearTimeout(timerId);
        };
     
    },[term])

    const renderedResults  = results.map((result) => {
        return(
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html:result.snippet}}>
                    </span>
                </div>
            </div>  
        )
    }      
    )
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search term: </label>
                    <input value={term}
                            onChange={(e)=>setTerm(e.target.value)}
                            className="input"></input>
                    <div className="ui celled list">{renderedResults}</div>
                </div>
            </div>
        </div>
    )
}

export default Search;