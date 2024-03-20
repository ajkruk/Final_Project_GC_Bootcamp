import Book from "./Book";
import { BookProps } from "./Book";

const Sort = () => {
    const edensSeries = [
        {
            title: "Indigo Ridge",
            author: "Devney Perry",
            genre: "Modern Romance",
            imageUrl: "https://m.media-amazon.com/images/I/71VeFEmBSsL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            title: "Juniper Hill",
            author: "Devney Perry",
            genre: "Modern Romance",
            imageUrl: "https://m.media-amazon.com/images/I/510MOAGJzTL.jpg"
        },
        {
            title: "Garnet Flats",
            author: "Devney Perry",
            genre: "Modern Romance",
            imageUrl: "https://m.media-amazon.com/images/I/511XMMX5VVL.jpg"
        },
        {
            title: "Jasper Vale",
            author: "Devney Perry",
            genre: "Modern Romance",
            imageUrl: "https://m.media-amazon.com/images/I/512Fdj8iBGL.jpg"
        },
        {
            title: "Crimson River",
            author: "Devney Perry",
            genre: "Modern Romance",
            imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1672870661i/75579822.jpg"
        },
        {
            title: "Sable Peak",
            author: "Devney Perry",
            genre: "Modern Romance",
            imageUrl: "https://m.media-amazon.com/images/I/51JpFAo1exL.jpg"
        }
    ]

    function sortByTitle (books:BookProps[], order:string) {
        const sortedBooks = [...books]
        if (order === "asc") {

        sortedBooks.sort((a, b) => {
        const nameA=a.title
        const nameB=b.title
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0
        }
        )
    }
    if (order === "des") {

        sortedBooks.sort((a, b) => {
        const nameA=a.title
        const nameB=b.title
        if (nameA < nameB) return 1;
        if (nameA > nameB) return -1;
        return 0
        }
        )
    }


        console.log(sortedBooks)
    }

    sortByTitle(edensSeries, "des")
    
    return <div>
        {edensSeries.map(book => (
                    <Book title={book.title} author={book.author} genre={book.genre} imageUrl={book.imageUrl}></Book>
        ))}
    </div>
}


export default Sort;