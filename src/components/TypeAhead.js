import React from "react"
import { useState } from "react"

function TypeAhead({books, handleSelect}) {

    let [currentSearch, setCurrentSearch] = useState("")


    let [searchMatches, setSearchMatches] = useState([])

    // function reset() {
    //     setCurrentSearch('');
    //     setSearchMatches([]);
    // }

    return (
        <>
        <h1>Search For a Book!</h1>
        <input 
        type="text"
        value={currentSearch}
        onChange={(ev) => {
            setCurrentSearch(ev.target.value)
            console.log(currentSearch)
            // let regex = new RegExp('/{currentSearch.toLowerCase()}/')
            setSearchMatches(books.filter((book) => {
                // return book.title.toLowerCase().startsWith(currentSearch.toLowerCase())
                // return book.title.toLowerCase().match(regex)
                return book.title.toLowerCase().includes(currentSearch.toLowerCase())
            }))
            console.log(searchMatches)
            }
        
             }
        onKeyDown={(ev) => {
        if (ev.key === 'Enter') {
            handleSelect(ev.target.value);
        }
              }}></input>


         <button onClick={() => {
                setCurrentSearch('');
                setSearchMatches([]);
         }}>Clear</button>
         <ul>
            {searchMatches.map((book) => {
                return (
                <li key={book.id}>{book.title}</li>
                )
            })}
        </ul>
        </>
        
    )
}

export default TypeAhead