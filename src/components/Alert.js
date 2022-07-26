import React from 'react'

export const Alert = (props) => {
    const toCapitalise = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        props.alert && <div className="alert alert-primary" role="alert">
            {toCapitalise(props.alert.type )}    {props.alert.message}
            </div>
    )
}
