import React , {useState} from 'react'
import PropTypes from 'prop-types'

export const TextForm = (props) => {
    let heading = props.heading
    let [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleUpClick = (e) => {
        e.preventDefault()
        setText(text.toUpperCase())
        props.showAlert('Text converted to uppercase', 'success')
    }
    const handleloClick = (e) => {
        e.preventDefault()
        setText(text.toLowerCase());
        props.showAlert('Text converted to lowercase', 'success')
    }


    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="myBox">{heading}  </label>
                    <textarea className="form-control" value={text} onChange={handleChange} id="myBox" rows="8"> </textarea>
                </div>
                <div className="form-group mt-2">
                    <button className="btn btn-primary " onClick={handleUpClick}>Convert to uppercase</button>
                    &nbsp;&nbsp;
                    <button  className="btn btn-primary" onClick={handleloClick}>Convert to lowercase</button>
                </div>
               
            </form>
            <h3>Your text summary</h3>
            <p><b>{text.split(" ").filter((elem)=>{return elem.length !==0}).length }</b> - words and <b>{text.trim().length}</b> - length of words</p>
            <p>{ Math.round(0.008 * text.split(" ").length,0)} Minuts time taken to read</p>

        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}