import React, {useState } from 'react'
import Clipboardverifier from './Clipboardverifier';

function Clipboard() {
    const [inputVal,setInputVal] = useState('');
    const [copied,setcopied] = useState(false);
    const handleCopy  = () =>{
    if(inputVal !== ""){
        navigator.clipboard.writeText(inputVal).then(() =>{
            console.log('Copied');
            setcopied(true);
            setTimeout(() => {
                setcopied(false)
            }, 2000);
        }).catch((e) =>{
            throw new Error('Error in copying', e);
        })
    }
    else{
        alert('There is nothing to Copy')
    }
        
    }
    const handleChange = (e) =>{
        setInputVal(e.target.value);
    }
  return (
    <div>
        <input type="text" value={inputVal} onChange={handleChange}/>
        <button onClick={handleCopy}>Copy</button>
            <Clipboardverifier value={copied}/>
    </div>
  )
}

export default Clipboard