$(function() {
    // Add burger onclick
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0
        };

        // POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Added new burger");
            location.reload();
        });
    });
    // Devour onclick
    $(".devourBurger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };

        // PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function() {
            console.log("Burger devoured");
            location.reload();
        });
    });
    // onclick DELETE request
    $(".deleteBurger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");

        
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });

})
