/* -----------------------------------------------------------------------------
Author : Roshin Jose
Email  : roshinjose1@gmail.com
Phone  : +91 964 522 8131
Web : roshinjose.com
Git Repository : git@github.com:Roshinjose167/apt.git
----------------------------------------------------------------------------- */
var app = {};
app.ajax = 4;
app.ui = {
    particle:false,
    particles:function(){
        if($('body').hasClass('white')){
            nb = 85;
        }else {
            nb = 95;
        }
        particlesJS('particles-js', {
            particles: {
                color: '#6EE7E0',
                color_random: false,
                shape: 'circle', // "circle", "edge" or "triangle"
                opacity: {
                    opacity: 0.9,
                    anim: {
                        enable: true,
                        speed: 1.0,
                        opacity_min: 0,
                        sync: false
                    }
                },
                size: 3,
                size_random: true,
                nb: nb,
                line_linked: {
                    enable_auto: true,
                    distance: 130,
                    color: '#4BB388', // particles line color
                    opacity: 1,
                    width: 1,
                    condensed_mode: {
                        enable: true,
                        rotateX: 600,
                        rotateY: 600
                    }
                },
                anim: {
                    enable: true,
                    speed: 2
                }
            },
            interactivity: {
                enable: true,
                mouse: {
                    distance: 500
                },
                detect_on: 'window', // "canvas" or "window"
                mode: 'grab', // "grab" of false
                line_linked: {
                    opacity: .5
                },
                events: {
                    onclick: {
                        enable: true,
                        mode: 'push', // "push" or "remove"
                        nb: 2
                    },
                    onresize: {
                        enable: true,
                        mode: 'out', // "out" or "bounce"
                        density_auto: false,
                        density_area: 800 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
                    }
                }
            },
            /* Retina Display Support */
            retina_detect: true
        });
    },
}

$(function () {
    app.ui.particles();
    if (Modernizr.localstorage) {
        if(localStorage.getItem("color") == "white") {
            $('body').addClass('white');
        }
    }
});

var delay = (function(){
    var timer = 0;
    return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();
