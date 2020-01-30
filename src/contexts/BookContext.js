import React, { useState, createContext } from 'react'
import uuid from 'uuid/v1'

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'Neuromancer', author: 'William Gibson', id: 1},
        {title: 'Molly Milennium', author: 'William Gibson', id: 2}
    ])

    const addBook = (title, author) => {
        setBooks([...books, {title, author, id: uuid() }])
    }

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    };
    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
            { props.children }
        </BookContext.Provider>
    )
}

export default BookContextProvider