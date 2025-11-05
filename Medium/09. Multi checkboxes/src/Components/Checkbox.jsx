import React from 'react'
import { useState } from 'react'

const Checkbox = () => {
    const [selected, setSelected] = useState([])
    const frameworks = ["React", "Vue", "Angular", "Svelte"];

    const handleChckbox = (value) => {
        if (selected.includes(value)) {
            setSelected(selected.filter(item => item !== value))
        }
        else {
            setSelected([...selected, value])
        }
    }

    return (
        <div>
            <div>
                {frameworks.map((item) => (
                    <label key={item} className='flex gap-2 justify-center'>
                        <input type="checkbox" value={selected.includes(item)} onChange={() => handleChckbox(item)} />
                        {item}
                    </label>
                ))}
            </div>
            <div>
                <strong>Selected:</strong> {selected.join(', ') || 'None'}
            </div>
        </div>
    )
}

export default Checkbox