$(document).ready(function(){
    // Initialize all carousels with the specified class
    $('.carousel-showmanymoveone').carousel({ interval: 3000 });

    // Clone items for a multi-item carousel
    $('.carousel-showmanymoveone .item').each(function(){
        var itemToClone = $(this);

        for (var i = 1; i < 6; i++) {
            itemToClone = itemToClone.next();

            // If there are no more items, go back to the first item
            if (!itemToClone.length) {
                itemToClone = $(this).siblings(':first');
            }

            // Clone the first child of the current item and add a class for styling
            itemToClone.children(':first-child')
                .clone()
                .addClass("cloneditem-" + i)
                .appendTo($(this));
        }
    });
});
