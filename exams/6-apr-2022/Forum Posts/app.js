'use strict'
window.addEventListener("load", solve);

function solve() {
  let publishButton = document.querySelector("#publish-btn");
  let ulDom = document.querySelector('#review-list');
  let titleDomElement = document.querySelector('#post-title');
  let categoryDomElement = document.querySelector('#post-category');
  let contentDomElement = document.querySelector('#post-content');
  let publishDomElement = document.getElementById('published-list');
  let clearDomElement = document.getElementById('clear-btn');

  publishButton.addEventListener('click', function(e) {
    let title = titleDomElement.value;
    let category = categoryDomElement.value;
    let content = contentDomElement.value;

    if (!title || !category || !content){
      return;
    }

    let liDom = ulDom.appendChild(document.createElement('li'));
    liDom.classList.add('rpost');

    let articleDom = liDom.appendChild(document.createElement('article'));
    let head4Element = articleDom.appendChild(document.createElement('h4'));
    let categoryParagraph = articleDom.appendChild(document.createElement('p'));
    let contentParagraph = articleDom.appendChild(document.createElement('p'));

    let editButton = liDom.appendChild(document.createElement('button'));
    let approveButton = liDom.appendChild(document.createElement('button'));
    editButton.classList.add('action-btn', 'edit');
    approveButton.classList.add('action-btn', 'approve');
    editButton.textContent = 'Edit'
    approveButton.textContent = 'Approve'

    head4Element.textContent = title;
    categoryParagraph.textContent = `Category: ${category}`;
    contentParagraph.textContent = `Content: ${content}`;

    titleDomElement.value = '';
    categoryDomElement.value = '';
    contentDomElement.value = '';

    editButton.addEventListener('click', (e) => {
      titleDomElement.value = head4Element.textContent;
      categoryDomElement.value = categoryParagraph.textContent.split(': ')[1];
      contentDomElement.value = contentParagraph.textContent.split(': ')[1];

      ulDom.removeChild(editButton.parentNode);
    })

    approveButton.addEventListener('click', (e) => {
      let liPublished = publishDomElement.appendChild(liDom);

      for (let i = 0; i < liPublished.childNodes.length; i++) {
        let child = liPublished.childNodes[i];

        if (child.tagName.includes('BUTTON')) {
          liPublished.removeChild(child)
          i--;
        }
      }
    })

    clearDomElement.addEventListener('click', (e) => {
      publishDomElement.innerHTML = '';

    })
  })


}