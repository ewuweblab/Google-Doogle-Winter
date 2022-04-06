// GSAP included in `index.html`
console.log('OK');

// Animate with GSAP
gsap.to('#big-heart' , {
  scale: 1.5,
  duration: 2,
  repeat: -1,
  yoyo: true, 
  transformOrigin: '50% 50%'
});

gsap.from( '#small-heart', {
  opacity: 0,
  duration: 3,
  repeat: 5
});

gsap.from( '.letter', {
  y: -500, 
  stagger: 1, 
  ease: 'elastic'
});

