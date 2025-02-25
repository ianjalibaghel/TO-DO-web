var inputBox=$("#input-box");
const listContainer = $(".list-container");
 
function addTask(){
    if (inputBox.val() === "" ){
         alert("you must write something");
    }
    else{
        let li = $("<li></li>").text(inputBox.val()); 
        listContainer.append(li); 
        inputBox.val("");
        
        let span=$("<span></span>").text("\u00d7");
        li.append(span);
        saveData();
    }
}


listContainer.on("click","li",function(){
    $(this).toggleClass("checked");
    saveData();
});

listContainer.on("click","span",function(){
    $(this).parent().remove();
    saveData();
});

function saveData(){
    localStorage.setItem("data",$(".list-container").html());
}

function showTask(){
   $(".list-container").html(localStorage.getItem("data"));
}

showTask();