$(document).ready(function(){

    listarCards();

});

function cadastrar(){

    $.ajax({
        url: 'http://andrecosta.info/cards/', 
        type : "POST", 
        dataType : 'json', 
        data : $("#form").serialize(), 
        success : function(result) {

            //console.log(result);
            if ( result.success ) {

                alert(result.data);
                $('#exampleModal').modal('toggle');
                listarCards();

            } else {

                alert(result.data);

            }

        },
        error: function(xhr, resp, text) {
            console.error(xhr, resp, text);
            alert("Erro!");
        }
    });
    
}

function apagar(id) {

    $.ajax({
        url: 'http://andrecosta.info/cards/', 
        type : "DELETE", 
        dataType : 'json', 
        data : "id="+id, 
        success : function(result) {

            //console.log(result);
            if ( result.success ) {

                alert(result.data);
                listarCards();

            } else {

                alert(result.data);

            }

        },
        error: function(xhr, resp, text) {
            console.error(xhr, resp, text);
            alert("Erro!");
        }
    });

}

function curtir(id) {

    $.ajax({
        url: 'http://andrecosta.info/cards/like/', 
        type : "POST", 
        dataType : 'json', 
        data : "id="+id, 
        success : function(result) {

            //console.log(result);
            if ( result.success ) {

                alert(result.data);
                listarCards();

            } else {

                alert(result.data);

            }

        },
        error: function(xhr, resp, text) {
            console.error(xhr, resp, text);
            alert("Erro!");
        }
    });

}

function listarCards() {

    $("#cards").html("<center><img src='img/carregando.gif'></center>");

	$.ajax({
        url: 'http://andrecosta.info/cards/', 
        type : "GET", 
        dataType : 'json', 
        data : "", 
        success : function(result) {

            console.log(result);
            
            if ( result.success ) {

                $("#cards").html("");

                $.each(result.data, function(i, item) {

                    var registro = "<div class='card' style='width: 20rem;'>"
                                      +"<img class='card-img-top' src='"+ item.url_imagem +"'>"
                                        +"<p class='card-text' style='height: 80px;'>"+ item.descricao +"</p>"
                                        +"<p id='qtd_likes'><b>"+ item.likes +" likes(s)</b></p>"
                                        +"<button class='btn btn-primary btn-card' onclick='curtir("+ item.id +");'>Curtir</button>"
                                        +"<button class='btn btn-danger btn-card' onclick='apagar("+ item.id +");'>Deletar</button>"
                                      +"</div>"
                                    +"</div>";

                    $("#cards").append(registro);

                });

            } else {

                alert(result.data);

            }                

        },
        error: function(xhr, resp, text) {
            console.error(xhr, resp, text);
            alert("Erro!");
        }
    });

}
