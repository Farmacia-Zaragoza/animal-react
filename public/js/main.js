console.log('connected')

//initialization
window.addEventListener('DOMContentLoaded', () => {
    setLayout();
    bodyHeight();
});

window.addEventListener('resize', () => {
    setLayout();
    bodyHeight();
});

//set dynamic layout

const setLayout = () => {
    const middle_side = document.querySelector('.middle_side')
    if(window.innerWidth < 991) {
        middle_side.style.width = '100%';
        return;
    } else if(window.innerWidth >= 991) {
        middle_side.style.width = '40%';
        return;
    }
}
//set height and width
const bodyHeight = () => {
    const main_container = document.querySelector('.main_container');
    // main_container.style.backgroundSize = '100% 100%';
    // main_container.style.color = '#fff';
    if(window.innerWidth < 570 ) {
        main_container.style.height = '640px';
        return;
    }else if(window.innerWidth < 768 ) {
        main_container.style.height = '1080px';
        return;
    }else if(window.innerWidth < 1400 ) {
        main_container.style.height = '768px';
        return;
    }else if(window.innerWidth < 1920 ) {
        main_container.style.height = '1080px';
        return;
    }else if(window.innerWidth < 2560 ) {
        main_container.style.height = '1440px';
        return;
    }
    
}

// document.querySelector('.left_animals_wrapper').addEventListener(function(e) {

// });

//showing tolpit on hover
function showLeftAnimalsTolpit() {
    var left_animals_rel = document.querySelectorAll('.left_animals_rel');
    left_animals_rel.forEach(function(item) {
        var div = '<div class="infoBoxLeft">'+item.getAttribute('data-value')+'</div>';
        item.insertAdjacentHTML('afterbegin', div);
    });
}
function showRightAnimalsTolpit() {
    var right_animals_rel = document.querySelectorAll('.right_animals_rel');
    right_animals_rel.forEach(function(item) {
        var div = '<div class="infoBoxRight">'+item.getAttribute('data-value')+'</div>';
        item.insertAdjacentHTML('afterbegin', div);
    });
}
function showMidSlideLeftAnimalsTolpit() {
    var mid_left_slide_animals_rel = document.querySelectorAll('.mid_left_slide_animals_rel');
    mid_left_slide_animals_rel.forEach(function(item) {
        var div = '<div class="infoBoxmidLeftSlide">'+item.getAttribute('data-value')+'</div>';
        item.insertAdjacentHTML('afterbegin', div);
    });
}
function showMidSlideRightAnimalsTolpit() {
    var mid_right_slide_animals_rel = document.querySelectorAll('.mid_right_slide_animals_rel');
    mid_right_slide_animals_rel.forEach(function(item) {
        var div = '<div class="infoBoxmidRightSlide">'+item.getAttribute('data-value')+'</div>';
        item.insertAdjacentHTML('afterbegin', div);
    });
}
setTimeout(function() {
    showLeftAnimalsTolpit();
    showRightAnimalsTolpit();
    showMidSlideLeftAnimalsTolpit();
    showMidSlideRightAnimalsTolpit();
}, 2000);


//animals sound
// var left_lion_kid = document.querySelector('.left_lion_kid');
// if(left_lion_kid) {
//     left_lion_kid.addEventListener(function(e) {
//         console.log(this);
//     });
// }


//lang desktop
var lang_btn = document.querySelector('.lang_btn');
if(lang_btn) {
    lang_btn.addEventListener('mouseenter', function() {
        console.log('clickced');
    });
}
