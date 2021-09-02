const searchBooks=()=>{
    const inputField=document.getElementById('input-field');
    const searchText=inputField.value;
    const url=`http://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        const booksdetails=displayBooksdetails(data.docs);
        const numberFound=displayNumber(data.numFound);
        
        
       

    })
    .catch(res=>alert('please try again later'))
    // .catch(res=>{
    //     const result=document.getElementById('error-message');
    //     const p=document.createElement("p");
    //     p.innerText="Please Type Right Name"
    //     result.appendChild(p)
    // });
    
    inputField.value=''


}
const displayBooksdetails=(books)=>{
    const searchResult=document.getElementById('search-result');
    searchResult.textContent='';
    // console.log(books.docs)
    books.forEach(element => {
        // console.log(element.cover_i)
        fetch(`https://covers.openlibrary.org/b/id/${element.cover_i}-L.jpg`)
        .then(res=>res.json())
        .then(data=>console.log(data.cover_i))

        const div=document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
        <div class="card h-100 p-4 shadow rounded rounded-3 mx-4 bg-primary text-white">
        <p class="fw-bold"><span> <h3> Book Name:</h3> </span>${element.title} </p>
        <p class="fw-bold"><span> <h3> Authors Name:</h3> </span>${element.author_name} </p>
        <p class="fw-bold"><span> <h3> First Published Year:</h3> </span> ${element.first_publish_year}</p>
        <p class="fw-bold"><span> <h3> Publisher:</h3> </span> ${element.publisher} </p>
        </div>
        `;

        searchResult.appendChild(div);
        
        
    });
}

// const displayImg=(img)=>{
//     const url=`https://covers.openlibrary.org/b/id/${img}-M.jpg`;
//     fetch(url)
//     .then(res=>res.json())
//     .then(data=>console.log(data))
    

// }
const displayNumber=(numbers)=>{
    const searchNumber=document.getElementById('search-number');
    searchNumber.textContent=''
    let h5=document.createElement('h5');
    h5.classList.add('text-center')
    h5.classList.add('text-success')
    h5.innerText=`Total Search result Found: ${numbers}`;
    if(numbers==0){
        h5.innerText=` sorry, No Matched Result
        please Input a Right Books Name!!!!!`; 
    }
    searchNumber.appendChild(h5)

}



