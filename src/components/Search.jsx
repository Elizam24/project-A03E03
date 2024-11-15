import { useRef, useState } from "react";


function Search ({setLocation}) {
    const [error, setError] =useState('')
    const inputRef =useRef()

    const  onSumit =(e) => {

        e.preventDefaul()
        const id =parseInt (inputRef.current.value )

        if (isNaN(id)){
            setError('X invalid number')
            setTimeout(()=>{setError('')},3000)
            return
        }
        if (id < 1 ||  id > 126){
            setError ('X Hey! you must provide an id from 1 to 126')
            setTimeout(()=>{setError('')},3000)
            return
        }
        setLocation(id)
        e.target.reset()
    }
 return (
        <form onSubmit={onSumit} className="search">
        <input ref={inputRef} type="text" className="search_input"/>
        <button className="search_btn" >Search</button>
        <p className = 'search_error'> {error && error} </p>
    </form>
    )

}

export default Search