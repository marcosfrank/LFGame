function leerGET() {
    var cadGET = location.search.substr(1, location.search.length);
    var arrGET = cadGET.split("&");
    return arrGET;
}

$(document).ready(function () {
    var variables = leerGET();
    
    $("span.timeout").after("<a href='" +variables[0] +".html'>"+variables[1]+"</a>")
});