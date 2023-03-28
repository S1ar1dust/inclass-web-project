import 'bootstrap'

import { gallery } from './gallery'

let featured_gallery = document.querySelector(".featured")

function displayImage(gallery) {

featured_gallery.innerHTML = `
        <img src="${gallery.image}" alt="${gallery.title} class="img-thumbnail">
        <h1 class="display-1">${gallery.title}</h1>
        <p class="lead">${gallery.description}</p>
    `
}

for(let g of gallery) {
    let g_thumb = document.getElementById('m' + g.id)
    
    g_thumb.innerHTML = `
        <img src="${g.image}" alt="${g.title}" class="img-thumbnail">
    `
   
    g_thumb.onclick = function() {
        displayImage(g)
        }  
}

for(let n of gallery) {
    let n_thumb = document.getElementById('n' + n.id)
   
    n_thumb.innerHTML = `
        <img src="${n.image}" alt="${n.title}" class="img-thumbnail">
    `
   
    n_thumb.onclick = function() {
        displayImage(n)
    }    
}




