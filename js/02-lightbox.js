import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector(".gallery");
   
    const markup = galleryItems.map(({ preview, original, description}) => 
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`

);

galleryEl.insertAdjacentHTML("beforeend", markup.join(""));

galleryEl.addEventListener("click", onClick);




function onClick(event){

    event.preventDefault();

    if(!event.target.classList.contains("gallery__image")){
        return;
    }

    let lighbox = new SimpleLightbox('.gallery a', { captionsData: `"${event.target.alt}"`,captionDelay: 250, captionPosition: "bottom"});

    lighbox.on("show.simplelightbox");
  
    


};




console.log(galleryItems);
