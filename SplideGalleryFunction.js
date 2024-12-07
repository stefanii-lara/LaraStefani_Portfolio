// Initialize Splide for Magazines
var splideMagazines = new Splide('#splide-gallery-magazines', {
    type: 'loop',
    perPage: 3,
    focus: 'center',
    height: '40rem', // Height for desktop
    breakpoints: {
        900: {
            perPage: 1, // Adjust to 1 slide per page
        },
    },
});
splideMagazines.mount();

// Initialize Splide for Photography
var splidePhotography = new Splide('#splide-gallery-photography', {
    type: 'loop',
    perPage: 3,
    focus: 'center',
    height: '30rem',
    breakpoints: {
        900: {
            perPage: 1,
        },
    },
});
splidePhotography.mount();

// Initialize Splide for Branding Gallery
var splideBranding = new Splide('#splide-gallery-branding', {
    type: 'loop',
    perPage: 3,
    focus: 'center',
    height: '30rem',
    breakpoints: {
        900: {
            perPage: 1,
        },
    },
});
splideBranding.mount();

// Initialize Splide for Social Media Gallery
var splideSocialMedia = new Splide('#splide-gallery-social-media', {
    type: 'loop',
    perPage: 3,
    focus: 'center',
    height: '30rem',
    breakpoints: {
        900: {
            perPage: 1,
        },
    },
});
splideSocialMedia.mount();
