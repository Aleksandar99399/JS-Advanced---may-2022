window.addEventListener("load", solve);

function solve() {
  let addPost = {
    h4: '',
    firstP: '',
    secondP: ''
  }
  let publishButton = document.querySelector("#publish-btn");
  let ulDom = document.querySelector('#review-list');

  let titleText
  let categoryText
  let contentText


  let editButton;
  let approveButton;

  publishButton.addEventListener('click', function(e) {
    let liDom = ulDom.appendChild(document.createElement('li'));
    liDom.classList.add('rpost');

     titleText = document.querySelector('#post-title').value;
     categoryText = document.querySelector('#post-category').value;
     contentText = document.querySelector('#post-content').value;


    let articleDom = liDom.appendChild(document.createElement('article'));
    articleDom.appendChild(document.createElement('h4')).setAttribute('id', 'category-paragraph');
    articleDom.appendChild(document.createElement('p')).setAttribute('id', 'category-paragraph');
    articleDom.appendChild(document.createElement('p')).innerHTML = contentText.value;

    editButton = liDom.appendChild(document.createElement('button'));
    editButton.classList.add('action-btn', 'edit');
    approveButton = liDom.appendChild(document.createElement('button'));
    approveButton.classList.add('action-btn', 'approve');
    editButton.textContent = 'Edit'
    approveButton.textContent = 'Approve'

    titleText.value = ''
    categoryText.value = ''
    contentText.value = ''

  })

  if (editButton !== undefined) {
    editButton.addEventListener('click', function (e) {
      let h4 = document.querySelector('h4');
      let firstP = document.querySelector('p').firstChild;
      let secondP = document.querySelector('p').lastChild;

    })
  }

}

function publishPost(){
  console.log('asdasdasd')
}
publishPost()
