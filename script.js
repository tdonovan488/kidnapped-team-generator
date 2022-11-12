var nameInput = document.querySelector("#name-input");
var addDriver = document.getElementById("add-driver");
var removeDriver = document.getElementById("remove-driver");
var driverSelectors = document.getElementsByClassName("driver-selector");

nameInput.addEventListener("change",function(){

    var driverSelectors = document.getElementsByClassName("driver-selector");

    for(var x = 0;x < driverSelectors.length;x++){
        for(var i = driverSelectors[x].children.length - 1;i > 0;i--){
            driverSelectors[x].children[i].remove()
        }
    }

    var names = nameInput.value.split(",")

    for(var x = 0;x < driverSelectors.length;x++){
        for(var i = 0;i < names.length;i++){
            var newNode = document.createElement("option")
            newNode.value = names[i]
            newNode.innerText = names[i].replace(/[^\w]/g,'');
            driverSelectors[x].appendChild(newNode);
        }
    }
})

addDriver.addEventListener("click",function(){
    var driverHolder = document.getElementsByClassName("driver-holder")[0];
    
    var newNode = driverSelectors[0].cloneNode()
    placeholder = document.createElement("option")
    placeholder.value = "Random"
    placeholder.innerText = "Set Drivers (Leave Blank For Random)"
    newNode.appendChild(placeholder)
    for(var i = 1; i < driverSelectors[0].children.length;i++){
        newNode.appendChild(driverSelectors[0].children[i].cloneNode())
    }
    driverHolder.appendChild(newNode);
})

removeDriver.addEventListener("click",function(){
    var driverHolder = document.getElementsByClassName("driver-holder")[0];

    n = driverHolder.children.length
    if(n > 1){
        driverHolder.children[driverHolder.children.length-1].remove()
    }
})



