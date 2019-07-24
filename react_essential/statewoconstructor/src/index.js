import React from 'react'
import {render} from 'react-dom'

let bookList = [
    {"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260},
    {"title": "Cat's Cradel", "author": "Kurt Vonnegut", "pages": 304},
    {"title": "White Teeth", "author": "Zadie Smith", "pages": 480}
]

const Book = ({title, author, pages}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author} </p>
            <p>Pages: {pages} pages</p>
        </section>
    )
}

class Library extends React.Component {
    state = { open: false }
    
    toggleOpenClosed = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }
    render() {
        const {books} = this.props
        return (
            <div>
                <h1>Welcome to Library it is {this.state.open ? 'open' : 'closed'}.</h1>
                <button onClick={this.toggleOpenClosed}>toggle</button>
                {books.map(
                    (book, i) => 
                        <Book 
                        key={i}
                        title={book.title} 
                        author={book.author} 
                        pages={book.pages} />
                )}
            </div>
        )
    }
}

render (
    <Library books={bookList} />,
    document.getElementById("root")
)