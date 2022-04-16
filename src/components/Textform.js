import React, {useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState('');
    // text = "Changed";    Wrong Way
    // setText = "Changed"; Correct Way 

    const Ucase_handler = () =>{
        // setText('You have Clicked on Uppercase');
        let newText = text.toUpperCase();
        
        setText(newText);
    }

    const clearText_handler = () =>{
        setText("");
    }

    const on_change_handler = (event)=> {
        // console.log('On Change');
        setText(event.target.value);

    }

    return (
        <>
        <div className = {`my-3 text-${props.mode === "light" ? "dark" : "light"}`}>
            <h2>{props.heading}</h2>
            <div className="my-3">
                <textarea className={`form-control text-${props.mode === "light" ? "dark" : "light"}`} style = {{'backgroundColor' : props.mode==='light'? 'white':'#0c1b31'}} value={text} placeholder='Enter Text Here' onChange={on_change_handler} id="myBox" rows="8"></textarea>
            </div>

            <button disabled = {text.length===0} className="btn btn-primary mx-1" onClick={Ucase_handler}>Convert To UpperCase</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-1" onClick={clearText_handler}>Clear Text</button>
        </div>

        <div className = {`my-3 text-${props.mode === "light" ? "dark" : "light"}`}>
            <h2>Your Text Summary</h2>
            <p>{(text.split(/\s+/).filter((value)=>{ return value!==''})).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((value)=>{ return value!==''}).length} minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
