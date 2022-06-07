window.addEventListener('load', solve);

function solve() {
    const addButtonElements = document.getElementById('add');
    const modelInputElement = document.getElementById('model')
    const yearInputElement = document.getElementById('year')
    const descriptionInputElement = document.getElementById('description')
    const priceInputElement = document.getElementById('price');
    const furnitureListElement = document.getElementById('furniture-list');

    addButtonElements.addEventListener('click', (e) => {
        e.preventDefault();
        let model = modelInputElement.value;
        let description = descriptionInputElement.value;
        let year = Number(yearInputElement.value);
        let price = Number(priceInputElement.value);

        if (!model || !description) {
            return;
        }

        if (year <= 0 || price <= 0 ){
            return;
        }

        let rowElement = document.createElement('tr');
        let modelCellElement = document.createElement('td');
        let priceCellElement = document.createElement('td');
        let actionsCellElement = document.createElement('td');
        let infoButtonElement  = document.createElement('button');
        let buyButtonElement  = document.createElement('button');
        let contentsRowElement = document.createElement('tr');
        let yearContentElement = document.createElement('td');
        let descriptionContentElement = document.createElement('td');

        modelCellElement.textContent = model;
        priceCellElement.textContent = price.toFixed(2);

        infoButtonElement.textContent = 'More Info';
        infoButtonElement.classList.add('moreBtn');
        buyButtonElement.textContent = 'Buy it';
        buyButtonElement.classList.add('buyBtn');
        infoButtonElement.addEventListener('click', (e) => {
            if (e.currentTarget.textContent == 'More Info'){
                e.currentTarget.textContent = 'Less Info';
            }else {
                e.currentTarget.textContent = 'More Info'
            }


        })

        actionsCellElement.appendChild(infoButtonElement);
        actionsCellElement.appendChild(buyButtonElement);

        rowElement.classList.add('info');

        rowElement.appendChild(modelCellElement);
        rowElement.appendChild(priceInputElement);
        rowElement.appendChild(actionsCellElement);

        yearContentElement.textContent = `Year: ${year}`;
        descriptionContentElement.setAttribute('colspan',  3);
        descriptionContentElement.textContent = `Description: ${description}`;

        contentsRowElement.classList.add('hide');
        contentsRowElement.style.display = 'contents';

        contentsRowElement.appendChild(yearContentElement);
        contentsRowElement.appendChild(descriptionContentElement);

        furnitureListElement.appendChild(rowElement);
        furnitureListElement.appendChild(contentsRowElement);

    });


}
