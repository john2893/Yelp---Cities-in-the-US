
$(document).ready(function(){


    var place = {
        name:{},
        rating:{},
        price:{},
        address:{},
        category:[],
        cityName:{}
        
    
    };
    // console.log(place)
    

    
    $("#submit").on("click", function(){
        $('#myTable tbody > tr').remove();
        // $("#city").val('');
        place.cityName = $("#city").val();
        alert(place.cityName);
        var url = `https://rebecca-proxy.herokuapp.com/search?location=`+place.cityName;
        // alert(url);
        $.ajax({
            url: url,  
            headers: {
                "Authorization": "Bearer MbMprHFPR_z5vwXJMwhXvn7lp3r05wDOJkAfByqxxN6U2PfI2XsPV6flgAW13YTbOyFoQyJGo98ygtOS8661ejHQ2Ws1iy3maW82HXeRQ5atFZSSPRYJuVxINFe_W3Yx"
            },   
    
            success: function(data) {
                console.log(data);
                var allRest = data.businesses.length;
            
                for(var j=0; j<allRest; j++){
                    place.name = data.businesses[j].name;
                    console.log(place.name);
                    place.price = data.businesses[j].price;
                    // console.log(place.price);
                    place.rating = data.businesses[j].rating;
                    // console.log(place.rating);
                    place.address = data.businesses[j].location.display_address.join()
                    // console.log(place.address);
                    // console.log(data.businesses[0].categories);
                    var cat = data.businesses[j].categories;
                    for (var i=0; i<cat.length; i++){
                    place.category.push(cat[i].title);
                    }
                    // console.log(data.businesses);
                    var newRow = $("<tr>")
                    newRow.addClass("nRow")
                    newRow.append(
                    $("<td>").text(j+1),
                    $("<td>").text(place.name),
                    $("<td>").text(place.address),
                    $("<td>").text(place.price),
                    $("<td>").text(place.rating),
                    );
                    $("#tbody").append(newRow);
                    
                    // console.log(place.category.join());
                };
    
            }
        });
    });
      
});