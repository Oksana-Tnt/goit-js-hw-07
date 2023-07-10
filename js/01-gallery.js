import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector(".gallery");
   
    const markup = galleryItems.map(({ preview, original, description}) => 
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`

);

galleryEl.insertAdjacentHTML("beforeend", markup.join(""));

galleryEl.addEventListener("click", onClick);
document.addEventListener("keydown", closeModalView);

let instance;

function onClick(event){

    event.preventDefault();

    if(!event.target.classList.contains("gallery__image")){
        return;
    }

    const sourceImg = event.target.dataset.source;
    const currentElement = galleryItems.find(({original}) => original === sourceImg);

    instance = basicLightbox.create(`
    <div class="modal">
    <img
        class="gallery__image"
        src="${currentElement.original}"        
        alt="${currentElement.description}"
      />
    </div>
`)

instance.show(); 
};

function closeModalView(event){
    if(instance.visible() && event.code === "Escape"){
        instance.close();
    }

};









