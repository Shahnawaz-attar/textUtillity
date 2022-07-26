import React, { useState } from 'react'

export const About = () => {

    const [style, setStyle] = useState({
        backgroundColor: '#fff',
        color: '#000'
    })

    const [btnText, setBtnText] = useState("enable dark mode")

    const toggleDarkmode = () => {
        if (style.backgroundColor === '#000') {
            setStyle({
                backgroundColor: '#fff',
                color: '#000'
            })
            setBtnText("enable dark mode")
        }
        else {
            setStyle({
                backgroundColor: '#000',
                color: '#fff'
            })
            setBtnText("disable dark mode")
        }
    }


    return (
        <>
            <div className="jumbotron jumbotron-fluid" style={style}>
            <div className="container">
                <h1 className="display-4">Fluid jumbotron</h1>
                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
            </div>
            {/* button */}
            <div className='mt-5'>
            <button className="btn btn-primary " onClick={toggleDarkmode} >{btnText}</button>
            </div>
        </>
    )
}
