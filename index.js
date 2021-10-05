//for get result by search 
const searchBook = () => {
    const search = document.getElementById('search-field');
    const searchText = search.value;
    //error text
    if (searchText === '') {
        const errors = document.getElementById('error');
        errors.innerText = "Search not found";
    }
    //clean search bar
    search.value = '';
    //call url
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs))
}
//create div
const displaySearchResult = docs => {
    const searchResult = document.getElementById('book-container');
    //total result on search
    const resultTotalOnSearch = document.getElementById('search-total');
    const totalResult = document.createElement('div');
    totalResult.innerHTML = `
    <h4>Total Result :${docs.length}</h4>
    `
    resultTotalOnSearch.append(totalResult);
    //clean 
    searchResult.textContent = '';
    //for each use for divs
    docs.forEach(doc => {
        console.log(doc);
        const div = document.createElement('div');
        div.classList.add('col');
        //for clean previous dATA
        div.innerHTML = " "
        //CREATE
        div.innerHTML = `
        <div class ="card">
        <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h4>Book Name:${doc.title}</h4>
        <p class="card-text">Auhtor Name : ${doc.author_name ? doc.author_name : "Not found"}</p>
        <p class="card-text">First publish year:${doc.first_publish_year ? doc.first_publish_year : 'Not found'}</p>
        <p class="card-text">Publisher: ${doc.publisher}</p>
         </div>  
        </div>
        `;

        searchResult.appendChild(div);
    })
}

