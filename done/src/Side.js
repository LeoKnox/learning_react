import React from 'react'

const Side = (props) => {
    return (
        <div>
            <h1>The Side</h1>
            <form onClick={props.onClick}>
                <input type="text" onChange={props.changes} />
                <button>run</button>
            </form>
        </div>
    )
}

export default Side