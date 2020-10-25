$(document).ready(function () {
    $(".btn").click(function () {
        var attr = $(this).attr("id");
        $(".btn").removeClass("active");
        $(this).addClass("active");





        if (attr != "carrinho-button") {

            $(".card-deck").hide();
            $(".spacingcontainer").hide();
            if (attr == "suplementacao") {
                $("." + attr).show();
            }
            else if (attr == "modafitness") {
                $("." + attr).show();

            }
            else if (attr == "acessorio") {
                $("." + attr).show();

            }
            else if (attr == "promocao") {
                $("." + attr).show();

            }
        }
    });

    $(".nav-link").click(function () {
        var attr = $(this).attr("id");
        $(".nav-link").removeClass("active");
        $(this).addClass("active");

        if (attr == "catalogo") {
            $(".card-deck").show();
            $(".spacingcontainer").show();
        }




    })



});