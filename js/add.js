let n = 0;

(function () {
    document.querySelector('#add').addEventListener('click', function () {
        if(document.getElementById('text').value.length) {
        let input = document.querySelector('#text');
        let list = document.querySelector('#sTree2');

        let item = document.createElement('li'); // create li node
        let button = document.createElement('button'); //create button node
        let textBox = document.createElement('div'); // create div node
        let trashIcon = document.createElement('i'); //create trash icon node

        let itemText = document.createTextNode(input.value); // create text node

        n++;
        let name = `item_${n}`;

        textBox.setAttribute("id", name);
        button.setAttribute("value", name);
        item.setAttribute("id",name);

        button.setAttribute("class", "del_btn");
        button.setAttribute("onclick", "deleteChild(this.value)");
        trashIcon.setAttribute("class", "fa fa-trash");
        

        textBox.appendChild(itemText); // append text node to li node
        button.appendChild(trashIcon);
        textBox.appendChild(button); //apend button to item node after textBox
        item.appendChild(textBox); // apend div node to item node
        list.appendChild(item); // append li node to list

        input.value = ""; // clear input
        }
    });
})();

console.log(document.getElementById('text').value.length);
