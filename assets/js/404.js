

var title  = document.querySelector('.notfound-title'),
    text   = document.querySelector('.notfound-subtitle'),
    link   = document.querySelector('.redirect'),
    string = title.childNodes[0].textContent,
    tl     = new TimelineLite();

// place each char of title in a span
string = string.substring(0, string.length);
string = string.split('');

title.innerHTML = "<span class='title-char'>" + string.join("</span><span class='title-char'>") + "</span>";
var title_char = title.querySelectorAll('.title-char');

for (var i = 0; i < title_char.length; i++) {
    title_char[i].style.display = 'inline-block';
}

/*
 * notfound_intro()
 * Called when user clic on redirect link
 * Set page transition and change page
 */
function notfound_intro() {

    // Timeline
    tl.staggerFrom(title_char, 0.7, {
        y: 300,
        opacity: 0,
        ease: Circ.easeOut
    }, 0.2);

    tl.from(text, 0.7, {
        y: 300,
        opacity: 0,
        ease: Circ.easeOut
    }, 0.5)

    tl.to(link, 0.2, {
        display: 'inline-block'
    }, 0.8)
}


/*
 * change_page()
 * Called when user clic on redirect link
 * Set page transition and change page
 */
function change_page(element, event) {
    var loader = document.querySelector('.iss-loader'),
        new_location = element.getAttribute('href');

    tl.reverse();

    loader.style.display = 'block';
    setTimeout( function() {
        loader.classList.add('active');
    }, 700);

    event.preventDefault();

    setTimeout( function() {
        window.location.assign(new_location);
    }, 1000);
}



document.addEventListener('DOMContentLoaded', function() {

    notfound_intro();
})

link.addEventListener('click', function(event) {
    change_page(this, event);
});
