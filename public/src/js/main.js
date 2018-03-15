//Muestra las Cookies en el documento

var arr = document.cookie.split(';'),
    cookies = {};
for (var i = 0; i < arr.length; i++) {
    var parts = arr[i].split('=');
    if (parts.length !== 2) continue;
    cookies[parts[0].trim()] = parts[1].replace(/%20/g, ' ');
}


document.getElementById('version').textContent = cookies['version'];




// Petición de Datos
function updateTable() {
    $.get("/api/data/get", function (data) {
        console.log(data);

        if (data.status == "success") {
            alert('Carga correcta');

            var outHTML = "";
            for (var i = 0; i <  data.data.length; i++) {

                outHTML += '<tr>'
                    + '<td>' + data.data[i].asunto + '</td>'
                    + '<td>' + data.data[i].correo + '</td>'
                    + '<td>' + data.data[i].mensaje + '</td>'
                    + '</tr>'

            }

            $("#mensajes").html(outHTML);

        }
        else {
            alert('Ha ocurrido un error durante la carga');
        }
    });
}