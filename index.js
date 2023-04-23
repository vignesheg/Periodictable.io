$(document).ready(function () {
    $("#searchbt").click(function () {
        $("#searchico").hide();
        $("#spinner").show();
    });
});


function getdetails() {
    let x = document.getElementById("searchbt");
    x.setAttribute("disabled", "");


    var obj = data;


    var searchvalues = document.forms["searchform"]["searchvalue"].value;
    console.log("obj - ",obj);
    if (searchvalues.length < 3) {
        var ordres = obj.find(
            function (order) {
                console.log("element -",order);
                searchvalues = searchvalues.charAt(0).toUpperCase() + searchvalues.slice(1);
                if (order.Symbol == searchvalues) {
                    return order.Symbol === searchvalues;
                } else if (order.AtomicNumber == searchvalues) {
                    return order.AtomicNumber == searchvalues;
                }
            }
        )
    } else if (searchvalues.length > 4) {
        var ordres = obj.find(function (order) {
            searchvalues = searchvalues.charAt(0).toUpperCase() + searchvalues.slice(1);
            return order.Element === searchvalues;

        })
    }




    var headerdata = "";
    var elementdata = "";

    for (key in ordres) {
        elementdata += '<li class="list-group-item list-group-item-action"><b style="font-size:18px;">' + key + '</b>   =   ' + ordres[key] + '</li>';
    }

    document.getElementById("elementlist").innerHTML = elementdata;
    console.log(ordres);


    if (searchvalues != "" && ordres != "") {
        document.getElementById("header").style.display = "";
    }
    x.removeAttribute("disabled");
    $(document).ready(function () {

        $("#spinner").hide();
        $("#searchico").show();

    });

}



