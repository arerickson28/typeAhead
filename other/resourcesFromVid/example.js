inputBox.onkeyup = (e)=> {
    let userData = e.target.value
    let emptyArray = []
    emptyArray = suggestions.filter((data) => {
        return data.toLowerCase().startsWith(userData.toLowerCase())
    })
    emptyArray = emptyArray.map((data) => {
        return data = "<li>" + data + "</li>";
    });
    console.log(emptyArray)
}


function showSuggestions(list) {
    let listData;
    if(!list.length) {
        userValue = inputBox.value;
        listData = "<li>" + userValue + "</li";
    } else {
        listData = list.join('')
    }
    suggBox.innerHTML = listData;
}

