'use strict'
window.addEventListener("load", solve);

function solve() {

    function publishHandler(e) {
        let title = document.getElementById('post-title');
        let category = document.getElementById('post-category');
        let content = document.getElementById('post-content');



    }

    function appendChildToUl(e){
        let liDom = document.getElementById('review-list').appendChild(document.createElement('li'));
        let articleDom = liDom.appendChild(document.createElement('article'));
        let h4Article = articleDom.appendChild(document.createElement('h4'));
        let categoryP = articleDom.appendChild(document.createElement('p'));
        let contentP = articleDom.appendChild(document.createElement('p'));

        categoryP
    }
}