function myFunction(){
    let text = document.getElementById("input_text").value;
    let tempArr = [];
    if(text.length % 2 !== 0){
        text += '_';
    }
    for(let i = 0; i < text.length; i = i + 2){
        tempArr.push(text[i] + text[i+1]);
    }
    // alert(tempArr);
    const list = document.querySelector('#unor_list');
    tempArr.forEach(item =>{
        let temp_item = document.createElement('li');
        temp_item.textContent = item;
        list.appendChild(temp_item);
    })
}

function mySecFunction(){
    const listt = document.querySelector('#unor_list');
    listt.innerHTML = "";
}