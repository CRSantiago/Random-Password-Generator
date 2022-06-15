import React from "react"

export default function Password(props){
    function copyToClipboard(e) {
        navigator.clipboard.writeText(e.target.firstChild.data)
        alert("Copied password!")
    }
    return (
        <div className='password' onClick={copyToClipboard}>
            {props.password}
        </div>
    )
}