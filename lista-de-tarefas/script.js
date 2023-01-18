function cadastrarItem(){
    const value = document.getElementById('input').value;
    let list = document.getElementById('list');
    list.innerHTML += `<li  onclick=" deleteItem(this)">  ${value} <input type="reset" value="X" onclick=" deleteItem(this)"> </li>`
}

function deleteItem(item) {
    let list = document.getElementById('list');
    list.removeChild(item.parentElement)

}