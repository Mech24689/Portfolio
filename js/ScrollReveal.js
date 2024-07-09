window.sr = ScrollReveal({reset: true});

var slide = {
    distance: '40px',
    duration: 2500,
    delay: 400,
    origin: 'bottom'
};

var zerar = {
    duration: 0,
    delay: 0
}

    sr.reveal(".title, .area-lang, .text, .area-experiencia", slide)
    sr.reveal(".container", zerar)