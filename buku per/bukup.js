let keyword = document.querySelector("#keyword");
let yearBox = document.querySelector("#yearBox");

class Search {
    constructor(data) {
        this.data = data;
    }

    equal(text, keyword) {
        return text.toLowerCase().indexOf(keyword.toLowerCase()) === -1;
    }

    byTitle(keyword) {
        this.data.forEach(book => {
            let title = book.querySelector(".title").innerText;
            book.style.display = this.equal(title, keyword) ? "none" : "";
        });
    }

    byAuthor(keyword) {
        this.data.forEach(book => {
            let author = book.querySelector(".author").innerText;
            book.style.display = this.equal(author, keyword) ? "none" : "";
        });
    }

    byPublisher(keyword) {
        this.data.forEach(book => {
            let publisher = book.querySelector(".publisher").innerText;
            book.style.display = this.equal(publisher, keyword) ? "none" : "";
        });
    }

    byYear(keyword) {
        this.data.forEach(book => {
            let year = book.querySelector(".year").innerText;
            book.style.display = this.equal(year, keyword) ? "none" : "";
        });
    }
}

function searching() {
    let books = document.querySelectorAll(".book");
    let search = new Search(books);

    let filter = document.querySelector("input[name='filter']:checked").value;

    if (filter === "title") search.byTitle(keyword.value);
    else if (filter === "author") search.byAuthor(keyword.value);
    else if (filter === "publisher") search.byPublisher(keyword.value);
    else if (filter === "year") search.byYear(yearBox.value); 
}

keyword.addEventListener("keyup", searching);
yearBox.addEventListener("keyup", searching);
