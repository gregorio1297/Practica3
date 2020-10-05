function calculo(){
    var valor=document.getElementById("numero").value;
    var dv=document.getElementById("into");
    if(valor>=18){
        dv.innerHTML="fiesta bro";
    }
    else{
        dv.innerHTML="a mimir";
    }
    //alert(valor);
}