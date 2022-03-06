//book class: represents a book
class Book{
    constructor(title, author, isbn){
        this.title = title; 
        this.author = author; 
        this.isbn = isbn;
    }
}
//UI class: Handle UI Tasks 
class UI{
    static displayBooks(){
        const StoredBooks =[
            {
                title: "Book One", 
                author: "John Doe", 
                isbn: "3434434"
            }, 
            {
                title: "Book Two", 
                author: "Jane Doe", 
                isbn: "63562"
            }, 

        ]; 
        
        const books = StoredBooks; 

        //loop through all the books 

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book){
        const list = document.querySelector("#book-list"); 
        const row = document.createElement('tr'); 
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `; 

        list.appendChild(row);
    }
    static deleteBook(el){
        if (el.classList.contains('delete')){
            el.parentElement.parentElement.remove(); 
        }
    }

    static showAlert(message, className){
        const div = document.createElement('div'); 
        div.className = `alert alert-${className}`; 
        div.appendChild(document.createTextNode(message)); 
        const container = document.querySelector('.container'); 
        const form = document.querySelector('#book-form'); 
        container.insertBefore(div, form); 
        setTimeout(() => document.querySelector('.alert').remove(), 3000);

    }

    static clearFields(){
        document.querySelector('#title').value=''; 
        document.querySelector('#author').value=''; 
        document.querySelector('#isbn').value=''; 

    }
}



//Store Class: Handles Storage
class Store {
    static getBooks(){
        let books; //string version
        if (localStorage.getItem('books') === null){
            books = []; 
           
        } else {
            books = JSON.parse(localStorage.getItem('books')); 
        }
        return books;
        }

    static addBook(book){
        const books = Store.getBooks(); 
        books.push(book); 
        localStorage.setItem('books', JSON.stringify(books)0; 
    }

    static removeBook(isbn){
        const books = Store.getBooks(); 
        books.forEach((book, index) => {
            if (book.isbn === isbn){
                books.splice(index, 1); 
            }
        })

        localStorage.setItem('books', JSON.stringify(books)); 

    }
}

//Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks)

//event: Add a book 
document.querySelector('#book-form').addEventListener('submit', (e)=> 
{
    //Prevent actual submit
    e.preventDefault();    
    //get form values
        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value; 
        const isbn = document.querySelector('#isbn').value; 
        
    
        //validate
        if(title === '' || author === ''|| isbn === ''){
            // UI.showAlert('Please fill in all fields', 'danger');
            alert("Please fill in all fields");
        } else {
            //instatiate book
            const aBook = new Book(title, author, isbn); 
        
            //ADD BOOK TO UI 
            UI.addBookToList(aBook);

            //Show success message
            // UI.showAlert('Book Added','success');
            alert('book added');

            //Clear fields 
            UI.clearFields();
            
        }
       

});

//Event: Remove a book
document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target);

    // UI.showAlert('book removed', 'success');
    alert('book removed');

})






//event: remove a book