function getdetails(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://vignesheg.github.io/periodictable/data.json",false);
    xmlhttp.send();
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
        var result  = xmlhttp.responseText;
        var obj = JSON.parse(result);
    }

    var searchvalues = document.forms["searchform"]["searchvalue"].value;
   
    var ordres = obj.find(function(order){
        return order.Symbol === searchvalues;
    })
    var headerdata="";
    var elementdata="";
  
    for(key in ordres){
         elementdata += '<li class="list-group-item list-group-item-action"><b style="font-size:18px;">'+key+'</b>   =   '+ordres[key]+'</li>';
    }

    document.getElementById("elementlist").innerHTML = elementdata;
    console.log(ordres);    

    var x = document.getElementById("searchbt");
    x.addEventListener('click',function hideheader(){
        document.getElementById("header").style.display="";
    })
}

