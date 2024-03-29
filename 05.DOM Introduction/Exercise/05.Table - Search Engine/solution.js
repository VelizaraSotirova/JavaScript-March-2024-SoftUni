function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const tableRowElements = document.querySelectorAll('table.container tbody tr');
      const searchFieldElement = document.getElementById('searchField');

      const searchText = searchFieldElement.value;

      for (const trElement of tableRowElements) {
         const tdElements = trElement.querySelectorAll('td');
         let isSelected = false;

         trElement.classList.remove('select');

         for (const tdElement of tdElements) {
            if (tdElement.textContent.includes(searchText)) {
               isSelected = true;
               break;
            }
         }

         if (isSelected) {
            trElement.classList.add('select');
         }
      }

      searchFieldElement.value = '';

   }
}