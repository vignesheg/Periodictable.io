

function datafinder(element_symbol){
    

$(document).ready(function(){
    $("#dataContainer").slideDown();
});

    var obj2 = data;
    var ordres = obj2.find(
        function(order){
            return order.Symbol == element_symbol;
        }
    )

  

    var elementdata;
    for (key in ordres) {
        elementdata += '<li class="list-group-item list-group-item-action"><b>' + key + '</b>   =   ' + ordres[key] + '</li>';
    }

    let listelement = document.getElementById("elementdatas");
    listelement.innerHTML=elementdata;

    
}

$(document).ready(function(){
    $("#datahider").click(function(){
      $("#dataContainer").slideUp();
    });
});


