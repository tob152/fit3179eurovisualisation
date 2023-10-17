var vg_1 = "choropeth.json";
vegaEmbed("#choropeth", vg_1).then(function(result) {
}).catch(console.error);

var vg_2 = "alluvial.json";
vegaEmbed("#alluvial", vg_2).then(function(result) {
}).catch(console.error);

var vg_3 = "linepoints.json";
vegaEmbed("#linepoints", vg_3).then(function(result) {
}).catch(console.error);

var firstname = document.getElementById("firstname")
var lastname = document.getElementById("lastname")
var jsonBtn = document.getElementById("jsonbtn")
var jsonText = document.getElementById("jsontext")



jsonBtn.addEventListener("click", function(){
    var data = {
        "firstName":firstname.value,
        "lastName":lastname.value
    }
    jsonText.innerHTML = JSON.stringify(data)
})
 