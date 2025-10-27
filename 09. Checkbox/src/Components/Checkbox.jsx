import React from 'react'
import { useState } from 'react'

const Checkbox = () => {
    const [checkbox, setCheckbox] = useState(false);

    const handleClick = () => {
        setCheckbox(!checkbox)
    }
    return (
        <div>
            <div>
                <input type='checkbox' value={checkbox} onClick={handleClick} />
            </div>
            <div>
                {checkbox ? (
                    <p>Box is Checked</p>
                ) : (<p>Box is Unchecked</p>)}
            </div>
        </div>
    )
}

export default Checkbox