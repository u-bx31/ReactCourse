import React, { useState, useEffect } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';


const Categorie = ({ data, filterItem }) => {
    const [acitv, setActiv] = useState(data[0])
    return (
        <div className='c-c-btn'>
            <ButtonGroup >
                {data.map((category, idx) => {
                    return (<ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        variant="outline-warning"
                        className='m-3 border-0 rounded-2'
                        type="checkbox"
                        name="radio"
                        value={category}
                        checked={acitv === category}
                        onChange={(e) => setActiv(e.currentTarget.value)}
                        onClick={() => { filterItem(category) }}>
                        {category}
                    </ToggleButton>)
                })}
            </ButtonGroup>
        </div>

    );
}

export default Categorie;