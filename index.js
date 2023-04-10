function getdetails(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","http://localhost/periodicelementstable/data.json",false);
    xmlhttp.send();
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
        var result  = xmlhttp.responseText;
        var obj = JSON.parse(result);
    }

    var searchvalues = document.forms["searchform"]["searchvalue"].value;
    console.log(typeof(searchvalues));
    if(searchvalues.length < 3){
    var ordres = obj.find(function(order){
        console.log(typeof(searchvalues));
        searchvalues = searchvalues.charAt(0).toUpperCase() + searchvalues.slice(1);
        if(order.Symbol == searchvalues){
            return order.Symbol === searchvalues;
        } else if(order.AtomicNumber == searchvalues){
        return order.AtomicNumber == searchvalues;
        }
    })
    }else if(searchvalues.length > 4){
    var ordres = obj.find(function(order){
        searchvalues = searchvalues.charAt(0).toUpperCase() + searchvalues.slice(1);
        return order.Element === searchvalues;
    
    })
    }
  



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

