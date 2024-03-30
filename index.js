const items = [{
    name: 'Eggs',
    price: '15'
  }, {
    name: 'Milk',
    price: '10'
  }];

renderaddItems();

 function renderaddItems() {
    let itemsHtml = '';

    for (let i = 0; i < items.length; i++) {
       const saveItemObject = items[i];
       const { name, price} = saveItemObject
       const generateItem = `<p class ="margin">${name} - $${price}
        <button class ="refund" onclick ="
        alert('Are you sure you want to refund');
         items.splice(${i}, 1);
         renderaddItems();
        ">Refund</button>
        </p>`
       itemsHtml += generateItem;
    }

    document.querySelector('.expense-list')
       .innerHTML = itemsHtml;
 }

 function addItems() {
   const inputName = document.querySelector('.item-name');
   const name = inputName.value;
   
   const inputPrice = document.querySelector('.item-number');
   const price = inputPrice.value;

   if (name.trim() === '' || price.trim() === '') {
        alert('Please enter both item name and price.');
        return; 
    }

   items.push({
    name,
    price
   });

   inputName.value = '';
   inputPrice.value = '';
   
   renderaddItems();
 }
 document.querySelector('.submit-button').addEventListener('click', function(event) {
    event.preventDefault();
    addItems();
});
