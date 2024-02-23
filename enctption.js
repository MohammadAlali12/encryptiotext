let textarea = document.getElementById("text");
let result = document.getElementById("result");
let select = document.getElementById("select");

textarea.addEventListener("input",()=>{
    encryption();

});
select.addEventListener("change", () =>{
    encryption();
});
function encryption(){
    if(select.value == "decode"){
        result.value = window.atob(textarea.value);

    }else if(select.value == "encode"){
        result.value = window.btoa(textarea.value);


    }
}


