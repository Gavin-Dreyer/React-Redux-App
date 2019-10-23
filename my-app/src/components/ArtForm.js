import React, { useState } from 'react'
import axios from 'axios'

const ArtForm = () => {
    const [text, setText] = useState({
        myWords: ''
    })

    const handleChanges = e => {
        setText({myWords: e.target.value})
    }

    const postItem = (e, item) => {
        e.preventDefault()
        axios
            .post('https://reqres.in/api/users/', item)
            .then(res => {console.log(res)})
            .catch(res => {console.log(res)})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        postItem(e, text)
        
    }

    return (
        <div className='inputText'>
        <form className='inputText' onSubmit={handleSubmit}>
            <input 
            type='text'
            name='textForm'
            value={text.name}
            onChange={e => handleChanges(e)}
            />
            <button>CLICK ME</button>
        </form>
        
            here i am
        </div>
    )
}

export default ArtForm