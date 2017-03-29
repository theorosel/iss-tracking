
function get_astronautes() {
    var xhttp  = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

            var result = JSON.parse(this.responseText);
            console.log(result);
        }
    };

    xhttp.open("GET", "/api/wikipedia", true);
    xhttp.send();
}


document.addEventListener('DOMContentLoaded', function(event) {

    get_astronautes();
})
