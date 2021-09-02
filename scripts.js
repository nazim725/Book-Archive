const displayImg=()=>{
    const displayimg=document.getElementById('display-img');
    fetch('https://ia802701.us.archive.org/view_archive.php?archive=/18/items/olcovers55/olcovers55-L.zip&file=554106-L.jpg')
    .then(res=>res.json())
    .then(data=>console.log(data))

}

displayImg()
