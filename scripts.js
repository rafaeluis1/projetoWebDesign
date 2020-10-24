$(document).ready(function () {
    $(".btn").click(function () {
        var attr = $(this).attr("id");
        $(".btn").removeClass("active");
        $(this).addClass("active");

        $(".card-deck").hide();
        $(".container").hide();

        if (attr == "suplementacao") {
            $("." + attr).show();
        }
        else if (attr == "modafitness") {
            $("." + attr).show();
        }

    })


});