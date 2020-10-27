window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./sw.js');
    }
    camStart();
}
var crosshairs;
var backNo = 1;

function GoSet(i) {
    backNo = 1;
    if (i == 1) {
        ts.style.backgroundImage = "url(images/Balloons/bg1.jpg)";
        tsParticles.load("tsparticles", {
            particles: {
                number: {
                    value: 2,
                    limit: 20
                },
                color: {
                    value: "#ff0000"
                },

                shape: {
                    type: "image",
                    image: [{
                            height: 750,
                            src: "images/Balloons/H1.png",
                            width: 500
                    },
                        {
                            height: 750,
                            src: "images/Balloons/H2.png",
                            width: 500
                    },
                        {
                            height: 750,
                            src: "images/Balloons/H3.png",
                            width: 500
                    },
                        {
                            height: 750,
                            src: "images/Balloons/H4.png",
                            width: 500
                    },
                        {
                            height: 750,
                            src: "images/Balloons/H5.png",
                            width: 500
                    },
                        {
                            height: 750,
                            src: "images/Balloons/H6.png",
                            width: 500
                    },
                        {
                            height: 750,
                            src: "images/Balloons/H7.png",
                            width: 500
                    },
                        {
                            height: 750,
                            src: "images/Balloons/H8.png",
                            width: 500
                    },
                        {
                            height: 750,
                            src: "images/Balloons/H9.png",
                            width: 500
                    },
                        {
                            height: 750,
                            src: "images/Balloons/H10.png",
                            width: 500
                    },
                        {
                            height: 750,
                            src: "images/Balloons/H11.png",
                            width: 500
                    },
                        {
                            height: 750,
                            src: "images/Balloons/H12.png",
                            width: 500
                    },
                        {
                            height: 750,
                            src: "images/Balloons/H13.png",
                            width: 500
                    },
                        {
                            height: 750,
                            src: "images/Balloons/H14.png",
                            width: 500
                    },
                        {
                            height: 750,
                            src: "images/Balloons/H15.png",
                            width: 500
                    },

]
                },



                size: {
                    value: 80,
                    random: {
                        enable: true,
                        minimumValue: 40
                    },
                    animation: {
                        enable: true,
                        speed: -5,
                        minimumValue: 80,
                        sync: false,
                        startValue: "min",
                        destroy: 40
                    }
                },
                links: {
                    enable: false
                },
                move: {
                    enable: true,
                    speed: .4,
                    direction: "top-right",
                    random: true,
                    straight: false,
                    outMode: "destroy",
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detectsOn: "window",
                events: {
                    onhover: {
                        enable: false,
                        mode: "push"
                    },
                    onclick: {
                        enable: true,
                        mode: ["push"]
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 0,
                        size: 40,
                        duration: 2,
                        opacity: 0.8,
                        speed: 0
                    },
                    repulse: {
                        distance: 200
                    },
                    push: {
                        particles_nb: 1,
                        size: 500,
                        speed: 1,
                        direction: "top-right"
                    },
                    remove: {
                        distance: 100,
                        particles_nb: 1
                    },
                    trail: {
                        particles_nb: 1,
                        number: 1,
                        delay: 0.,
                        length: 0
                    }
                }
            },
            retina_detect: true
        });
    } else if (i == 2) {
        ts.style.backgroundImage = "url(images/Butterflys/bg1.jpg)";
        tsParticles.load("tsparticles", {
            particles: {
                number: {
                    value: 2,
                    limit: 40
                },
                color: {
                    value: "#ff0000"
                },

                shape: {
                    type: "image",
                    image: [{
                            height: 600,
                            src: "images/Butterflys/B1.png",
                            width: 512
                    },
                        {
                            height: 600,
                            src: "images/Butterflys/B2.png",
                            width: 512
                    },
                        {
                            height: 600,
                            src: "images/Butterflys/B3.png",
                            width: 512
                    },
                        {
                            height: 600,
                            src: "images/Butterflys/B4.png",
                            width: 512
                    },
                        {
                            height: 600,
                            src: "images/Butterflys/B5.png",
                            width: 512
                    },
                        {
                            height: 512,
                            src: "images/Butterflys/B6.png",
                            width: 512
                    },
                        {
                            height: 512,
                            src: "images/Butterflys/B7.png",
                            width: 512
                    },
                        {
                            height: 512,
                            src: "images/Butterflys/B8.png",
                            width: 512
                    },
                        {
                            height: 512,
                            src: "images/Butterflys/B9.png",
                            width: 512
                    },
                        {
                            height: 512,
                            src: "images/Butterflys/B10.png",
                            width: 512
                    },
                        {
                            height: 512,
                            src: "images/Butterflys/B11.png",
                            width: 512
                    },
                        {
                            height: 512,
                            src: "images/Butterflys/B12.png",
                            width: 512
                    },
                        {
                            height: 512,
                            src: "images/Butterflys/B13.png",
                            width: 512
                    },
                        {
                            height: 512,
                            src: "images/Butterflys/B14.png",
                            width: 512
                    },
]
                },

                size: {
                    value: 120,
                    random: {
                        enable: true,
                        minimumValue: 60
                    },
                    animation: {
                        enable: true,
                        speed: -1,
                        minimumValue: 80,
                        sync: false,
                        startValue: "min",
                        destroy: 40
                    }
                },
                links: {
                    enable: false
                },
                move: {
                    enable: true,
                    speed: .3,
                    direction: "none",
                    random: true,
                    straight: false,
                    outMode: "destroy",
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detectsOn: "window",
                events: {
                    onhover: {
                        enable: false,
                        mode: "push"
                    },
                    onclick: {
                        enable: true,
                        mode: ["push"]
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 0,
                        size: 40,
                        duration: 2,
                        opacity: 0.8,
                        speed: 0
                    },
                    repulse: {
                        distance: 200
                    },
                    push: {
                        particles_nb: 1,
                        size: 500,
                        speed: 1,
                        direction: "top-right"
                    },
                    remove: {
                        distance: 100,
                        particles_nb: 1
                    },
                    trail: {
                        particles_nb: 1,
                        number: 1,
                        delay: 0.,
                        length: 0
                    }
                }
            },
            retina_detect: true
        });
    } else if (i == 3) {
        ts.style.backgroundImage = "url(images/Dance/bg1.jpg)";
        tsParticles.load("tsparticles", {
            particles: {
                color: {
                    value: "random"
                },
                move: {
                    bounce: false,
                    direction: "none",
                    enable: true,
                    out_mode: "bounce-horizontal",
                    random: true,
                    speed: 1
                },
                number: {
                    value: 2,
                    limit: 20
                },
                opacity: {
                    value: 0.9
                },
                shape: {
                    type: "image",
                    image: [{
                            height: 700,
                            src: "images/Dance/M1.png",
                            width: 600
                    },
                        {
                            height: 700,
                            src: "images/Dance/M2.png",
                            width: 600
                    },
                        {
                            height: 700,
                            src: "images/Dance/M3.png",
                            width: 600
                    },
                        {
                            height: 700,
                            src: "images/Dance/M4.png",
                            width: 600
                    },
                        {
                            height: 700,
                            src: "images/Dance/M5.png",
                            width: 600
                    },
                        {
                            height: 700,
                            src: "images/Dance/M6.png",
                            width: 600
                    },
                        {
                            height: 700,
                            src: "images/Dance/M7.png",
                            width: 600
                    },

]
                },

                stroke: {
                    color: "#000000",
                    width: 3
                },
                size: {
                    value: 80
                }
            },
            interactivity: {
                detectsOn: "window",
                events: {
                    onhover: {
                        enable: false,
                        mode: "push"
                    },
                    onclick: {
                        enable: true,
                        mode: ["push"]
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 0,
                        size: 40,
                        duration: 2,
                        opacity: 0.8,
                        speed: 0
                    },
                    repulse: {
                        distance: 200
                    },
                    push: {
                        particles_nb: 1,
                        size: 70,
                        speed: 1,
                        direction: "top-right"
                    },
                    remove: {
                        distance: 00,
                        particles_nb: 1
                    },
                    trail: {
                        particles_nb: 1,
                        number: 1,
                        delay: 0.,
                        length: 0
                    }
                }
            },

            retina_detect: true
        });
    } else if (i == 4) {
        ts.style.backgroundImage = "url(images/Mondrian/bg1.jpg)";
        tsParticles.load("tsparticles", {
            particles: {
                number: {
                    value: 4,
                    limit: 30
                },
                rotate: {
                    random: true
                },
                color: {
                    value: "#ff0000",
                    animation: {
                        enable: true,
                        speed: 0,
                        sync: true
                    }
                },
                shape: {
                    type: "image",
                    image: [{
                            height: 800,
                            src: "images/Mondrian/M1.png",
                            width: 800
                    },
                        {
                            height: 800,
                            src: "images/Mondrian/M2.png",
                            width: 800
                    },
                        {
                            height: 800,
                            src: "images/Mondrian/M3.png",
                            width: 800
                    },
                        {
                            height: 800,
                            src: "images/Mondrian/M4.png",
                            width: 800
                    },
                        {
                            height: 800,
                            src: "images/Mondrian/M5.png",
                            width: 800
                    },
]
                },

                opacity: {
                    value: 1,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 0,
                        sync: false
                    }
                },
                size: {
                    value: 180,
                    random: {
                        enable: true,
                        minimumValue: 140
                    },
                    animation: {
                        enable: true,
                        speed: -15,
                        minimumValue: 80,
                        sync: false,
                        startValue: "min",
                        destroy: 40
                    }
                },
                links: {
                    enable: false
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    straight: false,
                    outMode: "destroy"
                }
            },
            interactivity: {
                detectsOn: "window",
                events: {
                    onhover: {
                        enable: false,
                        mode: "push"
                    },
                    onclick: {
                        enable: true,
                        mode: ["push"]
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 0,
                        size: 40,
                        duration: 2,
                        opacity: 0.8,
                        speed: 0
                    },
                    repulse: {
                        distance: 200
                    },
                    push: {
                        particles_nb: 1,
                        size: 200,
                        speed: 1,
                        direction: "up"
                    },
                    remove: {
                        distance: 100,
                        particles_nb: 1
                    },
                    trail: {
                        particles_nb: 1,
                        number: 1,
                        delay: 0.,
                        length: 0
                    }
                }
            },
            retina_detect: true
        });
    } else if (i == 5) {
        ts.style.backgroundImage = "url(images/Sea/bg1.jpg)";
        tsParticles.load("tsparticles", {
            particles: {
                number: {
                    value: 2,
                    limit: 10
                },
                color: {
                    value: "#ff0000",
                    animation: {
                        enable: true,
                        speed: 0,
                        sync: true
                    }
                },
                shape: {
                    type: "image",
                    image: [{
                            height: 800,
                            src: "images/Sea/F1.png",
                            width: 800
                    },
                        {
                            height: 800,
                            src: "images/Sea/F2.png",
                            width: 800
                    },
                        {
                            height: 800,
                            src: "images/Sea/F3.png",
                            width: 800
                    },
                        {
                            height: 800,
                            src: "images/Sea/F4.png",
                            width: 800
                    },
                        {
                            height: 800,
                            src: "images/Sea/F5.png",
                            width: 800
                    },
                        {
                            height: 800,
                            src: "images/Sea/F6.png",
                            width: 800
                    },
                        {
                            height: 800,
                            src: "images/Sea/F7.png",
                            width: 800
                    },
                        {
                            height: 800,
                            src: "images/Sea/F8.png",
                            width: 800
                    }, {
                            height: 800,
                            src: "images/Sea/F9.png",
                            width: 800
                    },
                        {
                            height: 800,
                            src: "images/Sea/F10.png",
                            width: 800
                    },

]
                },
                opacity: {
                    value: 1,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 0,
                        sync: false
                    }
                },
                size: {
                    value: 100,
                    random: {
                        enable: true,
                        minimumValue: 80
                    },
                    animation: {
                        enable: true,
                        speed: -5,
                        minimumValue: 25,
                        sync: true,
                        startValue: "min",
                        destroy: 40
                    }
                },
                links: {
                    enable: false
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "top-noe",
                    random: true,
                    straight: false,
                    outMode: "destroy",
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detectsOn: "window",
                events: {
                    onhover: {
                        enable: false,
                        mode: "push"
                    },
                    onclick: {
                        enable: true,
                        mode: ["push"]
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 0,
                        size: 40,
                        duration: 2,
                        opacity: 0.8,
                        speed: 0
                    },
                    repulse: {
                        distance: 200
                    },
                    push: {
                        particles_nb: 1,
                        size: 500,
                        speed: 1,
                        direction: "up"
                    },
                    remove: {
                        distance: 100,
                        particles_nb: 1
                    },
                    trail: {
                        particles_nb: 1,
                        number: 1,
                        delay: 0.,
                        length: 0
                    }
                }
            },
            retina_detect: true
        });
    } else if (i == 6) {
        ts.style.backgroundImage = "url(images/Space/bg1.jpg)";
        tsParticles.load("tsparticles", {
            particles: {
                number: {
                    value: 2,
                    limit: 20
                },
                color: {
                    value: "#ff0000",
                    animation: {
                        enable: true,
                        speed: 0,
                        sync: true
                    }
                },
                shape: {
                    type: "image",
                    image: [{
                            height: 800,
                            src: "images/Space/S1.png",
                            width: 800
                    },
                        {
                            height: 800,
                            src: "images/Space/S2.png",
                            width: 800
                    },
                        {
                            height: 800,
                            src: "images/Space/S3.png",
                            width: 800
                    },
                        {
                            height: 800,
                            src: "images/Space/S4.png",
                            width: 800
                    },
                        {
                            height: 800,
                            src: "images/Space/S5.png",
                            width: 800
                    },
                        {
                            height: 800,
                            src: "images/Space/S6.png",
                            width: 800
                    },
                        {
                            height: 800,
                            src: "images/Space/S7.png",
                            width: 800
                    },

]
                },
                opacity: {
                    value: 1,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 0,
                        sync: false
                    }
                },
                size: {
                    value: 80,
                    random: {
                        enable: true,
                        minimumValue: 70
                    },
                    animation: {
                        enable: true,
                        speed: 0,
                        minimumValue: 25,
                        sync: true,
                        startValue: "min",
                        destroy: "max"
                    }
                },
                links: {
                    enable: false
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    outMode: "destroy",
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detectsOn: "window",
                events: {
                    onhover: {
                        enable: false,
                        mode: "push"
                    },
                    onclick: {
                        enable: true,
                        mode: ["push"]
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 0,
                        size: 40,
                        duration: 2,
                        opacity: 0.8,
                        speed: 0
                    },
                    repulse: {
                        distance: 200
                    },
                    push: {
                        particles_nb: 1,
                        size: 500,
                        speed: 1,
                        direction: "up"
                    },
                    remove: {
                        distance: 100,
                        particles_nb: 1
                    },
                    trail: {
                        particles_nb: 1,
                        number: 1,
                        delay: 0.,
                        length: 0
                    }
                }
            },
            retina_detect: true
        });
    } else if (i == 7) {
        ts.style.backgroundImage = "url(images/Splat/bg1.jpg)";
        tsParticles.load("tsparticles", {
            particles: {
                number: {
                    value: 2,
                    limit: 15
                },
                color: {
                    value: "#ff0000",
                    animation: {
                        enable: true,
                        speed: 0,
                        sync: true
                    }
                },
                rotate: {
                    random: true
                },
                shape: {

                    type: "image",
                    image: [{
                            height: 800,
                            src: "images/Splat/S1.png",
                            width: 800
                    },
                        {
                            height: 800,
                            src: "images/Splat/S2.png",
                            width: 800
                    },
                        {
                            height: 800,
                            src: "images/Splat/S3.png",
                            width: 800
                    },
                        {
                            height: 800,
                            src: "images/Splat/S4.png",
                            width: 800
                    },
                        {
                            height: 800,
                            src: "images/Splat/S5.png",
                            width: 800
                    },
                        {
                            height: 800,
                            src: "images/Splat/S6.png",
                            width: 800
                    },
                        {
                            height: 800,
                            src: "images/Splat/S7.png",
                            width: 800
                    },
]
                },
                opacity: {
                    value: 1,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 0,
                        sync: false
                    }
                },
                size: {
                    value: 100,
                    random: {
                        enable: true,
                        minimumValue: 60
                    },
                    animation: {
                        enable: false,
                        speed: 0,
                        minimumValue: 25,
                        sync: true,
                        startValue: "min",
                        destroy: "max"
                    }
                },
                links: {
                    enable: false
                },
                move: {
                    enable: false,
                    speed: .2,
                    direction: "top-right",
                    random: false,
                    straight: false,
                    outMode: "destroy",
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detectsOn: "window",
                events: {
                    onhover: {
                        enable: false,
                        mode: "push"
                    },
                    onclick: {
                        enable: true,
                        mode: ["push"]
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 0,
                        size: 40,
                        duration: 2,
                        opacity: 0.8,
                        speed: 0
                    },
                    repulse: {
                        distance: 200
                    },
                    push: {
                        particles_nb: 1,
                        size: 500,
                        speed: 1,
                        direction: "up"
                    },
                    remove: {
                        distance: 100,
                        particles_nb: 1
                    },
                    trail: {
                        particles_nb: 1,
                        number: 1,
                        delay: 0.,
                        length: 0
                    }
                }
            },
            retina_detect: true
        });
    } else {
        ts.style.backgroundImage = "url(images/Spooky/bg1.jpg)";
        tsParticles.load("tsparticles", {
            particles: {
                number: {
                    value: 2,
                    limit: 30
                },
                color: {
                    value: "#ff0000",
                    animation: {
                        enable: true,
                        speed: 0,
                        sync: true
                    }
                },
                shape: {

                    type: "image",
                    image: [{
                            height: 800,
                            src: "images/Spooky/S1.png",
                            width: 800
                    },
                        {
                            height: 800,
                            src: "images/Spooky/S2.png",
                            width: 800
                    },
                        {
                            height: 800,
                            src: "images/Spooky/S3.png",
                            width: 800
                    },
                        {
                            height: 800,
                            src: "images/Spooky/S4.png",
                            width: 800
                    },
                        {
                            height: 800,
                            src: "images/Spooky/S5.png",
                            width: 800
                    },
                        {
                            height: 800,
                            src: "images/Spooky/S6.png",
                            width: 800
                    },
                        {
                            height: 800,
                            src: "images/Spooky/S7.png",
                            width: 800
                    },
                        {
                            height: 800,
                            src: "images/Spooky/S8.png",
                            width: 800
                    },
                        {
                            height: 800,
                            src: "images/Spooky/S9.png",
                            width: 800
                    },
]
                },
                opacity: {
                    value: 1,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 0,
                        sync: false
                    }
                },
                size: {
                    value: 150,
                    random: {
                        enable: true,
                        minimumValue: 120
                    },
                    animation: {
                        enable: true,
                        speed: -10,
                        minimumValue: 80,
                        sync: false,
                        startValue: "min",
                        destroy: 40
                    }
                },
                links: {
                    enable: false
                },
                move: {
                    enable: true,
                    speed: .4,
                    direction: "none",
                    random: true,
                    straight: false,
                    outMode: "destroy",
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detectsOn: "window",
                events: {
                    onhover: {
                        enable: false,
                        mode: "push"
                    },
                    onclick: {
                        enable: true,
                        mode: ["push"]
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 0,
                        size: 40,
                        duration: 2,
                        opacity: 0.8,
                        speed: 0
                    },
                    repulse: {
                        distance: 200
                    },
                    push: {
                        particles_nb: 1
                    },
                    remove: {
                        distance: 100,
                        particles_nb: 1
                    },
                    trail: {
                        particles_nb: 1,
                        number: 1,
                        delay: 0.,
                        length: 0
                    }
                }
            },
            retina_detect: true
        });
    }
}

// Override the function with all the posibilities
navigator.getUserMedia ||
    (navigator.getUserMedia = navigator.mozGetUserMedia ||
        navigator.webkitGetUserMedia || navigator.msGetUserMedia);

var gl;
var canvas;
var Param1 = 1.0; // volume
var Param2 = 2.5; // brightness control
var Param3 = 1.0;
var Param4 = 1.0;
var Sound1 = 1.0;
var Sound2 = 1.0;
var Sound3 = 1.0;
var Sound4 = 1.0;
var mouseX = 0.5;
var mouseY = 0.5;
var keyState1 = 0;
var keyState2 = 0;
var keyState3 = 0;
var keyState4 = 0;
var keyStatel = 0;
var keyStater = 0;
var firstTime = false;
var fricative = false;
var panel;
var panelvisible = false;
var vol1;
var vol2;
var inMenu = true;
var menuItem = 0;
var drawContext = null;
var setNo = 1;
var activityNo = 1;
var ts;

function initGL() {
    try {
        gl = canvas.getContext("experimental-webgl", {
            antialias: true
        });
        //            gl = canvas.getContext("experimental-webgl", {preserveDrawingBuffer: true});
    } catch (e) {}
    if (!gl) {
        alert("Could not initialise WebGL, sorry :-(");
    }
}

function getShader(gl, id) {
    var shaderScript = document.getElementById(id);
    if (!shaderScript) {
        return null;
    }

    var str = "";
    var k = shaderScript.firstChild;
    while (k) {
        if (k.nodeType == 3) {
            str += k.textContent;
        }
        k = k.nextSibling;
    }

    var shader;
    if (shaderScript.type == "f") {
        shader = gl.createShader(gl.FRAGMENT_SHADER);
    } else if (shaderScript.type == "v") {
        shader = gl.createShader(gl.VERTEX_SHADER);
    } else {
        return null;
    }

    gl.shaderSource(shader, str);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert(gl.getShaderInfoLog(shader));
        return null;
    }

    return shader;
}

var programsArray = new Array();
var current_program;
var index = 0;

function initShaders() {
    programsArray.push(createProgram("shader-vs", "shader-1-fs"));
    current_program = programsArray[0];
}

function createProgram(vertexShaderId, fragmentShaderId) {
    var shaderProgram;
    var fragmentShader = getShader(gl, fragmentShaderId);
    var vertexShader = getShader(gl, vertexShaderId);

    shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert("Could not initialise shaders");
    }

    gl.useProgram(shaderProgram);

    shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
    gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);

    shaderProgram.textureCoordAttribute = gl.getAttribLocation(shaderProgram, "aTextureCoord");
    //       gl.enableVertexAttribArray(shaderProgram.textureCoordAttribute);

    shaderProgram.pMatrixUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
    shaderProgram.mvMatrixUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
    shaderProgram.samplerUniform = gl.getUniformLocation(shaderProgram, "uSampler");
    shaderProgram.resolutionUniform = gl.getUniformLocation(shaderProgram, "resolution");
    shaderProgram.mouse = gl.getUniformLocation(shaderProgram, "mouse");
    shaderProgram.time = gl.getUniformLocation(shaderProgram, "time");
    shaderProgram.Param1 = gl.getUniformLocation(shaderProgram, "Param1");
    shaderProgram.Param2 = gl.getUniformLocation(shaderProgram, "Param2"); // volume
    shaderProgram.Param3 = gl.getUniformLocation(shaderProgram, "Param3");
    shaderProgram.Param4 = gl.getUniformLocation(shaderProgram, "Param4");
    shaderProgram.Sound1 = gl.getUniformLocation(shaderProgram, "Sound1");
    shaderProgram.Sound2 = gl.getUniformLocation(shaderProgram, "Sound2");
    shaderProgram.Sound3 = gl.getUniformLocation(shaderProgram, "Sound3");
    shaderProgram.Sound4 = gl.getUniformLocation(shaderProgram, "Sound4");
    return shaderProgram;
}

var webcam;
var texture;

function initTexture() {
    texture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.bindTexture(gl.TEXTURE_2D, null);
}

var mvMatrix = mat4.create();
var mvMatrixStack = [];
var pMatrix = mat4.create();

function mvPushMatrix() {
    var copy = mat4.create();
    mat4.set(mvMatrix, copy);
    mvMatrixStack.push(copy);
}

function mvPopMatrix() {
    if (mvMatrixStack.length == 0) {
        throw "Invalid popMatrix!";
    }
    mvMatrix = mvMatrixStack.pop();
}

var ix = 0.0;
var end;
var st = new Date().getTime();

function setUniforms() {
    end = new Date().getTime();
    gl.uniformMatrix4fv(current_program.pMatrixUniform, false, pMatrix);
    gl.uniformMatrix4fv(current_program.mvMatrixUniform, false, mvMatrix);
    gl.uniform2f(current_program.resolutionUniform, canvas.width, canvas.height);
    gl.uniform2f(current_program.mouse, mouseX, mouseY);
    gl.uniform1f(current_program.time, ((end - st) % 1000000) / 1000.0);
    gl.uniform1f(current_program.Param1, Param1);
    gl.uniform1f(current_program.Param2, Param2);
    gl.uniform1f(current_program.Param3, Param3);
    gl.uniform1f(current_program.Param4, Param4);
}

var cubeVertexPositionBuffer;
var cubeVertexTextureCoordBuffer;
var cubeVertexIndexBuffer;

function initBuffers() {
    cubeVertexPositionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBuffer);
    vertices = [-1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    cubeVertexPositionBuffer.itemSize = 2;
    cubeVertexPositionBuffer.numItems = 4;

    cubeVertexTextureCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBuffer);
    var textureCoords = [0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    cubeVertexTextureCoordBuffer.itemSize = 2;
    cubeVertexTextureCoordBuffer.numItems = 4;

    cubeVertexIndexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);
    var cubeVertexIndices = [0, 1, 2, 0, 2, 3];
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndices), gl.STATIC_DRAW);
    cubeVertexIndexBuffer.itemSize = 1;
    cubeVertexIndexBuffer.numItems = 6;
}

function drawScene() {
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
    gl.enable(gl.BLEND);

    mat4.ortho(-1.0, 1.0, -1.0, 1.0, -1.0, 1.0, pMatrix);

    gl.useProgram(current_program);
    mat4.identity(mvMatrix);

    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBuffer);
    gl.vertexAttribPointer(current_program.vertexPositionAttribute, cubeVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBuffer);
    //        gl.vertexAttribPointer(current_program.textureCoordAttribute, cubeVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, webcam);
    gl.uniform1i(current_program.samplerUniform, 0);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);
    setUniforms();
    gl.drawElements(gl.TRIANGLES, cubeVertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);

    gl.bindTexture(gl.TEXTURE_2D, null);
}

var colorList = [];
var doingRainbow = "1";;

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    if (doingRainbow == "1") {
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
    } else
        color = fcol.style.backgroundColor;
    return color;
}

function MakeColorList() {
    for (var i = 0; i < 20; i++)
        colorList[i] = getRandomColor();
}

function tick() {
    requestAnimFrame(tick);
    drawScene();
}

function webGLStart() {
    canvas = document.getElementById("webgl-canvas");
    if (screen.width > 1500 || screen.height > 1500) {
        canvas.width = 1024;
        canvas.height = 1024;
    } else {
        canvas.width = 512;
        canvas.height = 512;
    }

    return;
    //canvas.width = 2096;  for screen capture or use 4k resolution with old firefox, i.e. 3840x2160
    //canvas.height =2096;
    initGL();
    initShaders();
    initBuffers();
    initTexture();

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.enable(gl.DEPTH_TEST);
    tick();
}

function PlaySound() {
    try {
        var s;
        switch (activityNo) {
            case 1:
                s = 'Sounds/Balloons/1.mp3';
                break;
            case 2:
                s = 'Sounds/Butterflys/1.mp3';
                break;
            case 3:
                s = 'Sounds/Dance/' + getRndInteger(1, 10) + '.mp3';
                break;
            case 4:
                s = 'Sounds/Mondrian/1.mp3';
                break;
            case 5:
                s = 'Sounds/Sea/' + getRndInteger(1, 4) + '.mp3';
                break;
            case 6:
                s = 'Sounds/Space/' + getRndInteger(1, 15) + '.mp3';
                break;
            case 7:
                s = 'Sounds/Splat/' + getRndInteger(1, 7) + '.mp3';
                break;
            case 8:
                s = 'Sounds/Spooky/' + getRndInteger(1, 19) + '.mp3';
                break;
        }
        var audio = new Audio(s);
        audio.play();
        console.log('Sound: ' + s);
        /*       var sound = new Howl({
                   src: [s]
               });
               sound.play(); */
    } catch (e) {};
}

function getRndInteger(min, max) {
    var i = Math.floor(Math.random() * (max - min)) + min;
    if (i == max)
        i--;
    return i;
}

function MoveMouseTo(xPos, yPos) {
    try {
        var target = particles.interactivity.element;
        var moveType = "mousemove";
        var moveEvent = new MouseEvent(moveType, {
            view: target,
            bubbles: true,
            cancelable: true,
            clientX: xPos,
            clientY: yPos
        });
        target.dispatchEvent(moveEvent);
    } catch (e) {}
}

function ClickMouse(xPos, yPos) {
    if (!inMenu) {
        MoveMouseTo(xPos, yPos);
        var target = particles.interactivity.element;
        var evt = new MouseEvent("mouseup", {
            view: target,
            bubbles: true,
            cancelable: true,
            x: xPos,
            y: yPos,
        }); //new MouseEvent("click");
        target.dispatchEvent(evt);
    }
}


function Action(i) {
    switch (i) {
        case 1: // random click on screen
            var target = particles.interactivity.element;
            ClickMouse(getRndInteger(1, target.innerWidth), getRndInteger(1, target.innerHeight));
            PlaySound();
            break;
        case 2: // random click on left of screen
            var target = particles.interactivity.element;
            ClickMouse(getRndInteger(1, target.innerWidth / 2), getRndInteger(1, target.innerHeight));
            PlaySound();
            break;
        case 3: // random click on right of screen
            var target = particles.interactivity.element;
            ClickMouse(target.innerWidth / 2 + getRndInteger(1, target.innerWidth / 2), getRndInteger(1, target.innerHeight));
            PlaySound();
            break;
        case 4:
            break;
        case 5: // left
            backNo--;
            if (backNo <= 0)
                switch (activityNo) {
                    case 1:
                        backNo = 4;
                        break;
                    case 2:
                        backNo = 6;
                        break;
                    case 3:
                        backNo = 8;
                        break;
                    case 4:
                        backNo = 5;
                        break;
                    case 5:
                        backNo = 3;
                        break;
                    case 6:
                        backNo = 5;
                        break;
                    case 7:
                        backNo = 5;
                        break;
                    case 8:
                        backNo = 6;
                        break;
                }
            switch (activityNo) {
                case 1:
                    ts.style.backgroundImage = "url(images/Balloons/bg" + backNo + ".jpg)";
                    break;
                case 2:
                    ts.style.backgroundImage = "url(images/Butterflys/bg" + backNo + ".jpg)";
                    break;
                case 3:
                    ts.style.backgroundImage = "url(images/Dance/bg" + backNo + ".jpg)";
                    break;
                case 4:
                    ts.style.backgroundImage = "url(images/Mondrian/bg" + backNo + ".jpg)";
                    break;
                case 5:
                    ts.style.backgroundImage = "url(images/Sea/bg" + backNo + ".jpg)";
                    break;
                case 6:
                    ts.style.backgroundImage = "url(images/Space/bg" + backNo + ".jpg)";
                    break;
                case 7:
                    ts.style.backgroundImage = "url(images/Splat/bg" + backNo + ".jpg)";
                    break;
                case 8:
                    ts.style.backgroundImage = "url(images/Spooky/bg" + backNo + ".jpg)";
                    break;
            }

            break;
        case 6: // right
            backNo++;
            switch (activityNo) {
                case 1:
                    if (backNo > 4) backNo = 1;
                    ts.style.backgroundImage = "url(images/Balloons/bg" + backNo + ".jpg)";
                    break;
                case 2:
                    if (backNo > 6) backNo = 1;
                    ts.style.backgroundImage = "url(images/Butterflys/bg" + backNo + ".jpg)";
                    break;
                case 3:
                    if (backNo > 8) backNo = 1;
                    ts.style.backgroundImage = "url(images/Dance/bg" + backNo + ".jpg)";
                    break;
                case 4:
                    if (backNo > 5) backNo = 1;
                    ts.style.backgroundImage = "url(images/Mondrian/bg" + backNo + ".jpg)";
                    break;
                case 5:
                    if (backNo > 3) backNo = 1;
                    ts.style.backgroundImage = "url(images/Sea/bg" + backNo + ".jpg)";
                    break;
                case 6:
                    if (backNo > 5) backNo = 1;
                    ts.style.backgroundImage = "url(images/Space/bg" + backNo + ".jpg)";
                    break;
                case 7:
                    if (backNo > 5) backNo = 1;
                    ts.style.backgroundImage = "url(images/Splat/bg" + backNo + ".jpg)";
                    break;
                case 8:
                    if (backNo > 6) backNo = 1;
                    ts.style.backgroundImage = "url(images/Spooky/bg" + backNo + ".jpg)";
                    break;
            }
            break;
        case 7: // toggle buttons
            toggleButtons();
            break;
    }
}

function toggleButtons() {
    ibuttonl.hidden = !ibuttonl.hidden;
    ibuttonr.hidden = !ibuttonr.hidden;
}

function MonitorKeyDown(e) { // stop autorepeat of keys with KeyState1-4 flags
    if (!e) e = window.event;
    if (e.keyCode == 32 || e.keyCode == 49) {
        if (keyState1 == 0)
            Action(1);
    } else if (e.keyCode == 50 || e.keyCode == 13) {
        if (keyState2 == 0)
            Action(1);
        keyState2 = 1;
    } else if (e.keyCode == 51) {
        if (keyState3 == 0)
            Action(2);
        keyState3 = 1;
    } else if (e.keyCode == 52) {
        if (keyState4 == 0)
            Action(3);
        keyState4 = 1;
    } else if (e.keyCode == 53) {
        toggleButtons();
    } else if (e.keyCode == 189) { // -
        if (keyStatel == 0)
            Action(5); //buttonl
    } else if (e.keyCode == 187) { // + 
        if (keyStater == 0)
            Action(6);
    } else if (e.keycode == 27) {
        showMenu();
    }
    return false;
}

function MonitorKeyUp(e) {
    if (!e) e = window.event;
    if (e.keyCode == 32 || e.keyCode == 49) {
        keyState1 = 0;
    } else if (e.keyCode == 50) {
        keyState2 = 0;
    } else if (e.keyCode == 51 || e.keyCode == 13) {
        keyState3 = 0;
    } else if (e.keyCode == 52) {
        keyState4 = 0;

    } else if (e.keyCode == 189) {
        keyStatel = 0;
    } else if (e.keyCode == 187) {
        keyStater = 0;
    }
    return false;
}

var mouseState = 0;

function MonitorMouseDown(e) {
     e.preventDefault();
    if (!e) e = window.event;
    if (e.button == 0) {
        mouseState = 1;
        mouseX = e.clientX / canvas.scrollWidth;
        mouseY = 1.0 - e.clientY / canvas.scrollHeight;
    }
    PlaySound();
    return false;
}

function MonitorMouseUp(e) {
    if (!e) e = window.event;
    if (e.button == 0) {
        mouseState = 0;
    }
    return false;
}

var splash;
var button;
var button1;
var button2;
var button3;
var button4;
var button5;
var button6;
var button7;
var ibuttonl;
var ibuttonr;

function hideMenu() {
    splash.hidden = true;
    button.hidden = true;
    button1.hidden = true;
    button2.hidden = true;
    button3.hidden = true;
    button4.hidden = true;
    button5.hidden = true;
    button6.hidden = true;
    button6.hidden = true;
    button7.hidden = true;
    ibuttonl.hidden = false;
    ibuttonr.hidden = false;
    inMenu = false;
    crosshairs.hidden = true;
}

function showMenu() {
    splash.hidden = false;
    button.hidden = false;
    button1.hidden = false;
    button2.hidden = false;
    button3.hidden = false;
    button4.hidden = false;
    button5.hidden = false;
    button6.hidden = false;
    button6.hidden = false;
    button7.hidden = false;
    ibuttonl.hidden = true;
    ibuttonr.hidden = true;
    inMenu = true;
}

function Highlight() {
    button.style.opacity = .7;
    button1.style.opacity = .7;
    button2.style.opacity = .7;
    button3.style.opacity = .7;
    button4.style.opacity = .7;
    button5.style.opacity = .7;
    button6.style.opacity = .7;
    button7.style.opacity = .7;
    switch (menuItem) {
        case 1:
            button.style.opacity = 1.;
            break;
        case 2:
            button1.style.opacity = 1.;
            break;
        case 3:
            button2.style.opacity = 1.;
            break;
        case 4:
            button3.style.opacity = 1.;
            break;
        case 5:
            button4.style.opacity = 1.;
            break;
        case 6:
            button5.style.opacity = 1.;
            break;
        case 7:
            button6.style.opacity = 1.;
            break;
        case 8:
            button7.style.opacity = 1.;
            break;
    }
}

var particles;

function Go(i) {
    index = i - 1;
    activityNo = i
    current_program = programsArray[0];
    if (firstTime) {
        firstTime = false;
        if (document.body.requestFullscreen) {
            document.body.requestFullscreen();
        } else if (document.body.msRequestFullscreen) {
            document.body.msRequestFullscreen();
        } else if (document.body.mozRequestFullScreen) {
            document.body.mozRequestFullScreen();
        } else if (document.body.webkitRequestFullscreen) {
            document.body.webkitRequestFullscreen();
        }
    }

    switch (i) {
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
        case 7:
            break;
        case 8:
            break;

    }

    //   startAudio();
    hideMenu();
    try {
        tsParticles.destroy();
    } catch (e) {}
    GoSet(i);
    particles = tsParticles.domItem(0);
}


var c = document.getElementById("body");

function camStart() {
    contn = document.getElementById("container");
    prticles = document.querySelector('particles');
    splash = document.querySelector('splash');
    crosshairs = document.querySelector('crosshairs');
    crosshairs.hidden = true;
    button = document.querySelector('button');
    button1 = document.querySelector('button1');
    button2 = document.querySelector('button2');
    button3 = document.querySelector('button3');
    button4 = document.querySelector('button4');
    button5 = document.querySelector('button5');
    button6 = document.querySelector('button6');
    button7 = document.querySelector('button7');
    ibuttonl = document.querySelector('ibuttonl');
    ibuttonr = document.querySelector('ibuttonr');
    webcam = document.createElement('canvas'); //getElementById('webcam');
    keyState1 = 0;
    keyState2 = 0;
    keyState3 = 0;
    keyState4 = 0;
    ts = document.querySelector('#tsparticles');

    webGLStart();

    document.onkeydown = MonitorKeyDown;
    document.onkeyup = MonitorKeyUp;

    //ts.onmousedown = MonitorMouseDown;
    canvas.onmouseup = MonitorMouseUp;
    ts.onmousemove = function (e) {
        e = e || window.event;
        if (mouseState == 1) {
            mouseX = (mouseX + 7.0 * e.clientX / canvas.scrollWidth) / 8.0;
            mouseY = (mouseY + 7.0 * (1.0 - e.clientY / canvas.scrollHeight)) / 8.0;
        }
        crosshairs.style.left = e.clientX - crosshairs.offsetWidth / 2 + "px";
        crosshairs.style.top = e.clientY - crosshairs.offsetHeight / 2 + "px";
    }
    /*ts.ontouchstart = function (e) {
        e.preventDefault();
        toggleButtons();
        var touchs = e.changedTouches;
        mouseX = touchs[0].clientX / canvas.scrollWidth;
        mouseY = 1.0 - touchs[0].clientY / canvas.scrollHeight;
        PlaySound();
    };*/
    ts.ontouchend = function (e) {
        e.preventDefault();
    };
    ts.ontouchmove = function (e) {
        e.preventDefault();
        var touches = e.changedTouches;
        mouseX = touches[0].clientX / canvas.scrollWidth; //] (mouseX + 7.0*touches/canvas.scrollWidth)/8.0;
        mouseY = 1.0 - touches[0].clientY / canvas.scrollHeight; //(mouseY + 7.0*(1.0 - e.clientY/canvas.scrollHeight))/8.0;
    };
    ibuttonl.onmousedown = function (e) {
        showMenu(); //Action(5);
    }
    ibuttonr.onmousedown = function (e) {
        Action(6);
    }

    button.onmousedown = function (e) {
        Go(1);
    }
    button1.onmousedown = function (e) {
        Go(2);
    }
    button2.onmousedown = function (e) {
        Go(3);
    }
    button3.onmousedown = function (e) {
        Go(4);
    }
    button4.onmousedown = function (e) {
        Go(5);
    }
    button5.onmousedown = function (e) {
        Go(6);
    }
    button6.onmousedown = function (e) {
        Go(7);
    }
    button7.onmousedown = function (e) {
        Go(8);
    }

    ibuttonl.ontouchstart = function (e) {
        showMenu();
    }
    ibuttonr.ontouchstart = function (e) {
        e.preventDefault();
        Action(6);
    }

    button.ontouchstart = function (e) {
        Go(1);
    }
    button1.ontouchstart = function (e) {
        Go(2);
    }
    button2.ontouchstart = function (e) {
        Go(3);
    }
    button3.ontouchstart = function (e) {
        Go(4);
    }
    button4.ontouchstart = function (e) {
        Go(5);
    }
    button5.ontouchstart = function (e) {
        Go(6);
    }
    button6.ontouchstart = function (e) {
        Go(7);
    }
    button7.ontouchstart = function (e) {
        Go(8);
    }

    var point = {
        x: -10,
        y: 0
    };


    function MouseClick() {
        if (!inMenu) {
            var target = particles.interactivity.element;
            var evt = new MouseEvent("mouseup", {
                view: target,
                bubbles: true,
                cancelable: true,
                screenX: 200,
                screenY: 200,
                x: point.x,
                y: point.y,
            }); //new MouseEvent("click");
            target.dispatchEvent(evt);
        }
    }


    function MoveMouse(xm, ym) {
        var target = particles.interactivity.element;
        var xy = {
            x: this.x,
            y: this.y
        };
        crosshairs.hidden = false;
        try {
            var pos = particles.interactivity.mouse;
            if (pos.position == undefined) {
                xy.x = target.innerWidth / 2;
                xy.y = target.innerHeight / 2;
                //          particles.interactivity.mouse.position = xy;
            }
            if (point.x < 0) {
                point.x = target.innerWidth / 2;
                point.y = target.innerHeight / 2;
            }
            xy.x = point.x + xm;
            xy.y = point.y + ym;
            if (xy.x < 10)
                xy.x = 10;
            if (xy.y < 10)
                xy.y = 10;
            if (xy.x >= target.innerWidth - 10)
                xy.x = target.innerWidth - 10;
            if (xy.y >= target.innerHeight - 10)
                xy.y = target.innerHeight - 10;
            //pos.position.x = xy.x;
            //pos.position.y = xy.y;
            point.x = xy.x;
            point.y = xy.y;
            console.log('MoveTo: ', point.x, point.y);
            crosshairs.style.left = point.x - crosshairs.offsetWidth / 2 + "px";
            crosshairs.style.top = point.y - crosshairs.offsetHeight / 2 + "px";
            var moveType = "mousemove";
            var tmp = 1;
            var moveEvent = new MouseEvent(moveType, {
                view: target,
                bubbles: true,
                cancelable: true,
                clientX: point.x,
                clientY: point.y
                // you can pass any other needed properties here
            });
            target.dispatchEvent(moveEvent);


        } catch (e) {}
    }

    function JoystickMoveTo(jy, jx) {
        if (Math.abs(jx) < .1 && Math.abs(jy) < .1) {
            try {
                if (gpad.getButton(14).value > 0) // dpad left
                    MoveMouse(-10, 0);
                if (gpad.getButton(12).value > 0) // dup
                    MoveMouse(0, -7);
                if (gpad.getButton(13).value > 0) // ddown
                    MoveMouse(0, 7);
                if (gpad.getButton(15).value > 0) // dright
                    MoveMouse(10, 0);
            } catch (e) {}
            return;
        }
        MoveMouse(jx * 10, jy * 7);

    }

    function showPressedButton(index) {
        console.log("Press: ", index);
        if (inMenu) {
            switch (index) {
                case 0: // A
                case 1: // B
                case 2: // X
                case 3: // Y
                    Go(menuItem);
                    break;
                case 12: // dup
                    if (menuItem > 4)
                        menuItem -= 4;
                    Highlight();
                    break;
                case 13: // ddown
                    if (menuItem < 5)
                        menuItem += 4;
                    Highlight();
                    break;
                case 14: // dleft
                    if (menuItem > 1)
                        menuItem--;
                    Highlight();
                    break;
                case 15: // dright
                    if (menuItem < 8)
                        menuItem++;
                    Highlight();
                    break;
            }
            console.log("Menu: ", menuItem);
        } else switch (index) {
            case 0: // A
            case 7: //RTrig
                MouseClick();
                break;
            case 1: // B
            case 6://LTrig
            case 11:
            case 16:
                Action(1);
                break;
            case 8: //Full Screen  
                toggleButtons();
                break;
            case 2: // X
                Action(2);
                break;
            case 4: // LB
                Action(5);
                break;
            case 3: // Y
                Action(3);
                break;
            case 5: // LT
                Action(6);
                break;
            case 10: // LT
            case 9: //List
                showMenu();
                
                break;
            default:
        }
    }

    function removePressedButton(index) {
        console.log("Releasd: ", index);
    }

    function moveJoystick(values, isLeft) {
        if (!inMenu)
            JoystickMoveTo(values[1], values[0]);
    }

    var gpad;

    function getAxes() {
        //       console.log('Axis', gpad.getAxis(0), gpad.getAxis(1), gpad.getButton(14).value);

        if (!inMenu)
            JoystickMoveTo(gpad.getAxis(1), gpad.getAxis(0));
        setTimeout(function () {
            getAxes();
        }, 50);
    }

    gamepads.addEventListener('connect', e => {
        console.log('Gamepad connected:');
        console.log(e.gamepad);
        Highlight();
        gpad = e.gamepad;
        e.gamepad.addEventListener('buttonpress', e => showPressedButton(e.index));
        e.gamepad.addEventListener('buttonrelease', e => removePressedButton(e.index));
        //       e.gamepad.addEventListener('joystickmove', e => moveJoystick(e.values, true),
        //            StandardMapping.Axis.JOYSTICK_LEFT);
        //        e.gamepad.addEventListener('joystickmove', e => moveJoystick(e.values, false),
        //            StandardMapping.Axis.JOYSTICK_RIGHT);
        setTimeout(function () {
            getAxes();
        }, 50);
    });

    gamepads.addEventListener('disconnect', e => {
        console.log('Gamepad disconnected:');
        console.log(e.gamepad);
    });

    gamepads.start();

}
