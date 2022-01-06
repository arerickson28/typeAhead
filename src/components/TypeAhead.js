import React from "react"
import { useState } from "react"

function TypeAhead({books, handleSelect}) {

    let [currentSearch, setCurrentSearch] = useState("")


    let [searchMatches, setSearchMatches] = useState([])

    return (
        <>
        <h1>Search For a Book!</h1>
        <input 
        type="text"
        value={currentSearch}
        onChange={(ev) => {
            setCurrentSearch(ev.target.value)
            console.log(currentSearch)
            setSearchMatches(books.filter((bookTitle) => {
                return bookTitle.title.toLowerCase().startsWith(currentSearch.toLowerCase())
            }))
            console.log(searchMatches)
            }
        
             }
        onKeyDown={(ev) => {
        if (ev.key === 'Enter') {
            handleSelect(ev.target.value);
        }
              }}></input>


         <button onClick={() => setCurrentSearch('')}>Clear</button>
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