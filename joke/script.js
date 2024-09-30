let btn = document.getElementById('btn')
let joke = document.getElementById('joke')
let apiUrl = 'https://icanhazdadjoke.com/'

btn.onclick = () => {
    fetch(apiUrl,{
        headers :{
            Accept : 'application/json',
            'User-Agent':'learing app'    
        }
    } ).then( 
        (res) => {
        return res .json()
    } ).then(
        (data) => {
            joke.innerHTML += '<li>'+data.joke+'</li>';
        }
    )
    }
