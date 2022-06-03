'use strict'
window.addEventListener("load", solve);

function solve() {
  let editObject = {};
  let publishObject = {};

  let publishButton = document.querySelector("#publish-btn");
  let ulDom = document.querySelector('#review-list');

  let title
  let category
  let content


  let editButton;
  let approveButton;

  publishButton.addEventListener('click', function(e) {
    let liDom = ulDom.appendChild(document.createElement('li'));
    liDom.classList.add('rpost');

    title = document.querySelector('#post-title');
    category = document.querySelector('#post-category');
    content = document.querySelector('#post-content');
    publishObject.title = title
    publishObject.category = category
    publishObject.content = content

    let articleDom = liDom.appendChild(document.createElement('article'));
    let htmlHeadingElement = articleDom.appendChild(document.createElement('h4'))
    let categoryParagraph = articleDom.appendChild(document.createElement('p'))
    let contentParagraph = articleDom.appendChild(document.createElement('p'))

    htmlHeadingElement.innerHTML = title.value;
    categoryParagraph.innerHTML = 'Category: ' + category.value;
    contentParagraph.innerHTML = 'Content: ' + content.value;
    categoryParagraph.setAttribute('id', 'category-paragraph')
    contentParagraph.setAttribute('id', 'content-paragraph')


    editButton = liDom.appendChild(document.createElement('button'));
    editButton.classList.add('action-btn', 'edit');
    approveButton = liDom.appendChild(document.createElement('button'));
    approveButton.classList.add('action-btn', 'approve');
    editButton.textContent = 'Edit'
    approveButton.textContent = 'Approve'

    publishObject.title.value = ''
    publishObject.category.value = ''
    publishObject.content.value = ''

    editObject.h4 = htmlHeadingElement;
    editObject.categoryP = categoryParagraph;
    editObject.contentP = contentParagraph;
    editObject.editButton = editButton;
    editObject.approveButton = approveButton;


  })

  editObject.editButton.addEventListener('click', function (){
    console.log('In edit event listener')
    editPost(editObject, publishObject);
  })

}

function editPost(editObject, publishObject){
  publishObject.title.value = editObject.h4.innerHTML;
  publishObject.category.value = editObject.categoryP.innerHTML.split("Category: ");
  publishObject.content.value = editObject.contentP.innerHTML.split("Content: ");
  editObject.editButton.remove();
  editObject.approveButton.remove();

  editObject.h4.innerHTML = '';
  editObject.categoryP.innerHTML = '';
  editObject.contentP.innerHTML = '';
}
