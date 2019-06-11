$(document).ready(function() {
        /* script for language section starts */
        function scrollLeftToRight(){
            var div = $('.scroll_inner');
            console.log(div);
            var remWidth = div[0].scrollWidth //- $(this).width();
            
            console.log($(this).width());
            console.log(remWidth);
            var scrollableHeight = remWidth - div.scrollLeft();
            var pos = div.scrollLeft();
            var remainingTime = (scrollableHeight - pos) * 100 / 10; //here 100 is a speed
            $('.scroll_inner').animate({
                scrollLeft:remWidth
            },{
                duration: remainingTime,
                easing: "linear",
            }); 
        }
    
        function scrollRightToLeft(){
            var div = $('.scroll_inner');
            var remWidth = div[0].scrollWidth - $(this).width();
            var scrollableHeight = remWidth - div.scrollLeft();
            var pos = div.scrollLeft();
            var remainingTime = (pos * 100) / 10;
            $('.scroll_inner').animate({
                scrollLeft: 0
            },{
                duration: remainingTime,
                easing: "linear",
            });        
        }

        $('.left_button').click(scrollLeftToRight);

        // $('.right_button').mouseenter(scrollRightToLeft);
        // $('.right_button').mouseleave(function(){
        //     $('.scroll_inner').stop();
        //     console.log('ddddd');
        // });
        // $('.left_button').mouseenter(scrollLeftToRight);  
    
        // $('.left_button').mouseleave(function(){
        //     $('.scroll_inner').stop();
        // }); 
        /* script for language section ends here */
});

// var scroll_wrapper = document.querySelector('.scroll_wrapper');
// var scroll_inner = document.querySelector('.scroll_inner');
// var left_button = document.querySelector('.left_button');
// var right_button = document.querySelector('.left_button');
// var all_item = document.querySelectorAll('.item');


// var scroll_inner_offsetWidth = scroll_inner.offsetWidth;
// var pos = 0;
// var itemWidth = 0;
// all_item.forEach((function(item) {
//     itemWidth+=item.clientWidth;
//     console.log(item.clientWidth);
// }));
// console.log(itemWidth);
// console.log(scroll_inner.scrollWidth);

// var id;
// function go() {
//     if(pos === itemWidth) {
//         clearInterval(id);
//     }else {
//         pos++;
//         scroll_inner.scrollLeft = pos;
//     }
// }
// function back() {
//     scroll_inner.scrollLeft = 0;
// }
// left_button.addEventListener('mouseenter', function(e) {
//     id = setInterval(go, 10);
//     console.log('from: ',pos);
// });
// left_button.addEventListener('mouseleave', function(e) {
//     clearInterval(id);
//     console.log('end: ',pos);
// });


// right_button.addEventListener('mouseenter', function(e) {
    
//         id = setInterval(back, 10);
//         back();
//         console.log('from: ',pos);
    
// });

// right_button.addEventListener('mouseleave', function(e) {
//     clearInterval(id);
//     console.log('end: ',pos);
// });