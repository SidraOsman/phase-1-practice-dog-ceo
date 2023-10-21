console.log('%c HI', 'color: firebrick')

window.addEventListener('load' , ()=>{
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(response => response.json())
    .then(data => {
        const imageContainer = document.getElementById('imageContainer');
        data.message.forEach(imageUrl => {
            const img = document.createElement('img');
            img.src = imageUrl;
            imageContainer.appendChild(img);
        });
    });
});

window.addEventListener('load' , ()=>{
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
        const breedList = document.getElementById('breedList');
        for(const breed in data.message){
            const li = document.createElement('li');
            li.textContent = breed;
            breedList.appendChild(li);
        }
    });
});

document.addEventListener('DOMContentLoaded' , ()=>{
    const breedList = document.getElementById('breedList');
    breedList.addEventListener('click' , event =>{
        if(event.target.tagName === 'LI'){
            event.target.style.color = 'blue';
        }
    });
});

document.addEventListener('DOMContentLoaded' , ()=> {
    const breedFilter = document.getElementById('breedFilter');
    const breedList = document.getElementById('breedList');

    breedFilter.addEventListener('change' , ()=>{
        const selectedLetter = breedFilter.ariaValueMax;
        const lis = breedList.getElementsByTagName('li')

        for(const li of lis){
            if(li.textContent.startsWith(selectedLetter)){
                li.style.display = 'block';
            }else{
                li.style.display = 'none';
            }
        }
    });
});
