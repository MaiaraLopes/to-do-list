function newItem() {

    //Adding an item
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);
    
    if (inputValue === '') {
        alert('You must write something!');
    } else {
        $('#list').append(li);
    }

    //Crossing an item out
    function crossOut() {
        li.toggleClass('strike');
    }

    li.on('dblclick', function () {
        crossOut()
    });

    //Deleting an item
    let crossOutButton = $('<button></button>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);
    
    crossOutButton.on('click', deleteListItem);
    function deleteListItem() {
        li.addClass('delete')
    }
    
    //Reordering the items
    $('#list').sortable();
}