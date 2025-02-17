// require('dotenv').config()
//const fetch = require("isomorphic-fetch");

const apiKey = "uLJWnWHhVMFghFGEcbA9RcBKsUM19FGE"

// Print out value of API key stored in .env file
// console.log(process.env.API_KEY)

// const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=dogs&limit=1&offset=0&rating=g&lang=en`

//get images with query

let gallery = document.getElementById('gallery')
let child = gallery.lastElementChild

async function getImage(query){

    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=25&offset=0&rating=g&lang=en`

    try{
        const result = await fetch(endpoint);
        const data = await result.json();

        const array = data.data.map((object) => object.images.original.url);
        

        const gif = data.data[0].images.original.url;
        //grabing the img and setting the src
        // let gallery = document.getElementById('gallery');
        
        for(url of array){
            const img = document.createElement('img');
            img.src = url;
            gallery.appendChild(img);
        }
    }catch(error){
        console.log(error)
    }
   
}

// let query;
// getImage('dogs');

const button = document.querySelector('.btn')

button.addEventListener('click',(e) => {
    e.preventDefault()

    if(gallery.hasChildNodes()){
        gallery.replaceChildren()
    }
   
    const query = document.querySelector('#search').value
    console.log(query);
    getImage(query)
})
