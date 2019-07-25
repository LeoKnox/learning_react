import React from 'react'
import {render} from 'react-dom'

let bookList = [
    {"title": "The Sun Also Rises", "author": "Ernest Hemingway", },
    {"title": "Cat's Cradel", "author": "Kurt Vonnegut", "pages": 304},
    {"title": "White Teeth", "pages": 480}
]

const Book = ({title="No Title Provided", author="No Author", pages=0, freeBookmark}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author} </p>
            <p>Pages: {pages} pages</p>
            <p>Free Bookmark Today: {freeBookmark ? 'yes' : 'no'} </p>
        </section>
    )
}

const Hiring = () => <div>Library is Hiring!</div>
const NotHiring = () => <div>Library is Not Hiring:(</div>

class Library extends React.Component {
    static defaultProps = {
        books: [
            {"title": "Tahoe Tales", "author": "Chet Whitley", "pages": 1000}
            // used as default if null value occurs
        ]
    }

    state = { 
        open: true,
        freeBookmark: true,
        hiring: true,
        data: [],
        loading: false
    }

    componentDidMount() {
        this.setState({loading:true})
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
            .then(data => data.json())
            .then(data => this.setState({data, loading:false}))
    }

    toggleOpenClosed = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }
    render() {
        console.log(this.state.data)
        const {books} = this.props
        return (
            <div>
                {this.state.hiring ? <Hiring /> : <NotHiring />}
                <h1>Welcome to Library it is {this.state.open ? 'open' : 'closed'}.</h1>
                <button onClick={this.toggleOpenClosed}>toggle</button>
                {this.state.loading
                    ? "loading..."
                    : <div>
                        {this.state.data.map(product => {
                            return (
                                <div key={product.id}>
                                    <h3>Library Product</h3>
                                    <h4>{product.name}</h4>
                                    <img src={product.image} height={100}/>
                                </div>
                            )
                        })}
                        </div>
                    }
                {books.map(
                    (book, i) => 
                        <Book 
                        key={i}
                        title={book.title} 
                        author={book.author} 
                        pages={book.pages}
                        freeBookmark={this.state.freeBookmark}
                        />
                )}
            </div>
        )
    }
} 

render (
    <Library  books={bookList} />,
    document.getElementById("root")
)