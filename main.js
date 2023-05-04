const container = document.querySelector('.container');
const url = `https://pixabay.com/api/?key=36032741-adce5fa47c8e1e460acd3056f&q=yellow+flowers&image_type=photo`;
const containerList = document.querySelector('.container-list');

async function fetchImages(){
        return fetch(url).then((response) => response.json()).then(data => {
            console.log(data.hits)
            console.log(data.hits[0].previewURL)

 
            let imageContainer = document.createElement('div')
            imageContainer.classList.add('image-container')
            containerList.appendChild(imageContainer)


            const showImages = (image) =>{
                imageContainer.innerHTML = image.map((item, index) => `
                <div class="image-content">
                <img src="${item.hits[0].previewURL}" alt=""/>
                </div>
                `)
            }
            showImages(data);
            
        });
}

fetchImages();


container.addEventListener('scroll', () => {

    if(container.scrollTop + container.clientHeight >= container.scrollHeight){

    }
})


