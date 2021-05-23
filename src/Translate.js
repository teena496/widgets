//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React,{useState} from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert'

const options = [
    {
        id:1,
        label:"Hindi",
        value:"hi"
    },
    {
        id:2,
        label:"Malayalam",
        value:"ml"
    },
    {
        id:3,
        label:"Arabic",
        value:"ar"
    }
]
 const Translate = () => {
     const [selected, setSelected] = useState(options[0]);
     const [term, setTerm] = useState('');


    return (
        <div className="ui form">
            <div className="field">
            <label className="label">
                Enter the text to translate</label>
            <input className="input"
                    value={term}
                    onChange={(e)=>setTerm(e.target.value)}></input>
            <Dropdown label="Select a language" 
                      options={options}
                      selected={selected}
                      setSelected={setSelected} 
            />
            </div>
            <div>Output</div>
                <Convert language={selected} text={term}/>
        </div>
    )
}

export default Translate;