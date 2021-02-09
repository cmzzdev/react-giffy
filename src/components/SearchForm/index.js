import React, { useState } from 'react'

const SearchForm = ({ onSubmit }) => {

    const [ keyword, setKeyword ] = useState('')

    const handleSubmit = e => {
        // navegar a otra ruta
        e.preventDefault()
        onSubmit({keyword})      
        console.log(keyword)
    }

    const handleChange = e => {
        setKeyword(e.target.value)
    }  

    return ( 
        <form className='searchForm' onSubmit={handleSubmit}>                
            <input
                type='text'
                placeholder='Buscar gifs...'
                value={keyword}
                onChange={handleChange}
            />
            <button className='btn'>Buscar</button>
        </form>
    );
}
 
export default React.memo(SearchForm);