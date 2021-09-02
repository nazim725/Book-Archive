// Function for search books

const searchBooks=()=>{
    const inputField=document.getElementById('input-field');
    const searchText=inputField.value;
    const url=`https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        const booksdetails=displayBooksdetails(data.docs.slice(0,20));
        const numberFound=displayNumber(data.numFound);
        
    })

    inputField.value=''


}
// Function for display Details of Books

const displayBooksdetails=(books)=>{
    const searchResult=document.getElementById('search-result');
    searchResult.textContent='';
    books.forEach(element => {
        const path=`https://covers.openlibrary.org/b/id/${element.cover_i}-M.jpg`;
        const div=document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
        <div class="card h-100 p-4 shadow rounded rounded-3 mx-4 bg-primary text-white border border-3">
        <img  src="${path}" height="300"></img>
        <div class="card-body">
        <p class="fw-bold"><span> <h3> Book Name:</h3> </span>${element.title} </p>
        <p class="fw-bold"><span> <h3> Authors Name:</h3> </span>${element.author_name} </p>
        <p class="fw-bold"><span> <h3> First Published Year:</h3> </span> ${element.first_publish_year}</p>
        <p class="fw-bold"><span> <h3> Publisher:</h3> </span> ${element.publisher} </p>
        </div>
        </div>
        `;

        searchResult.appendChild(div);
        
        
    });
}

// Function for display search result
const displayNumber=(numbers)=>{
    const searchNumber=document.getElementById('search-number');
    searchNumber.textContent=''
    let h5=document.createElement('h5');
    h5.classList.add( 'w-50','mx-auto','text-center','text-white','p-3')
    h5.classList.add()
    h5.innerText=`Total Search Result Found: ${numbers}`;
    if(numbers==0){
        h5.innerText=` Sorry, No Matched Result
        please Input a Right Books Name!!!!!`; 
    }
    searchNumber.appendChild(h5)

}



