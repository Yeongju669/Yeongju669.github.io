   /* Emoji Cursor.js */
   // this is function for emoji cursor

   (function emojiCursor() {
  
    let possibleEmoji = ["🌸", "⭐️", "🌼", "💜", "🌙","💕","🦋","🌈"]; // declare variables --list of emojis
    let width = window.innerWidth;// declare variables --width
    let height = window.innerHeight;// declare variables --height
    let cursor = {x: width/2, y: width/2};// declare variables --wxh of the cursor
    let particles = [];// declare variables --how many particles
    
    // ⭐️~the initial function~⭐️
    function init() {
      bindEvents();// list of eventListener with mouse interactions
      loop();// this allows emoji to loop and run the same code over and over again
    }

    function bindEvents() {// list of eventListener
      document.addEventListener('mousemove', onMouseMove);// emojis appear with mousemove
      document.addEventListener('touchmove', onTouchMove);// user moves the finger across the screen
      document.addEventListener('touchstart', onTouchMove);// When a touchstart event occurs, indicating that a new touch on the surface has occurred, the function is called.
      window.addEventListener('resize', onWindowResize);// it functions  when the document view (window) has been resized
    }
    
    function onWindowResize(e) {// window resize//declares the size of the window
      width = window.innerWidth;// inner width of the window 
      height = window.innerHeight;// inner height of the window 
    }

    // Adding random particles when user moves the finger
    function onTouchMove(e) {
      if( e.touches.length > 0 ) {
        for( let i = 0; i < e.touches.length; i++ ) {
          addParticle( e.touches[i].clientX, e.touches[i].clientY, possibleEmoji[Math.floor(Math.random()*possibleEmoji.length)]);
        }
      }
    }

    //Output the coordinates of the mouse pointer keep track of mouse move
    function onMouseMove(e) {  
      cursor.x = e.clientX;// Get the horizontal coordinate
      cursor.y = e.clientY;// Get the vertical coordinate
      addParticle( cursor.x, cursor.y, possibleEmoji[Math.floor(Math.random()*possibleEmoji.length)]);
    }
    
    // function to add particles
    function addParticle(x, y, character) {
      let particle = new Particle();
      particle.init(x, y, character);
      particles.push(particle);
    }

    // function to update particles as it disappear
    function updateParticles() { 
      // Updated
      for( var i = 0; i < particles.length; i++ ) {
        particles[i].update();
      }
      // Remove dead particles
      for( var i = particles.length -1; i >= 0; i-- ) {
        if( particles[i].lifeSpan < 0 ) {
          particles[i].die();
          particles.splice(i, 1);
        }
      }
    }

    // this allows emoji to loop and run the same code over and over again
    function loop() {
      requestAnimationFrame(loop);
      updateParticles();
    }
    
    // 🌈💕🌼Particles styles🌈💕🌼
    function Particle() {
      this.lifeSpan = 120; //ms life span of particles
      this.initialStyles ={
        "position": "absolute",
        "display": "block",
        "pointerEvents": "none",
        "z-index": "999",
        "fontSize": "26px",
        "will-change": "transform"
      };
  
      // Init, and set properties
      this.init = function(x, y, character) {
  
        this.velocity = {
          x:  (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2), // random horizontal
          y: 1
        };
        this.position = {x: x - 10, y: y - 20}; // position
        this.element = document.createElement('span'); //create span to add style
        this.element.innerHTML = character;
        applyProperties(this.element, this.initialStyles);
        this.update();
        
        document.body.appendChild(this.element);// append this element to body
      };
      
      // updates 
      this.update = function() {
        this.position.x += this.velocity.x; //addition assignment operator-->assigns the result to the variable
        this.position.y += this.velocity.y; //
        this.lifeSpan--;// decrements returns a value
        // without this all particles will stay in the smae position
        this.element.style.transform = "translate3d(" + this.position.x + "px," + this.position.y + "px,0) scale(" + (this.lifeSpan / 120) + ")"; 
      }
      // emojis disappear 
      this.die = function() {
        this.element.parentNode.removeChild(this.element);// remove span(this.element)
      }
      
    }
  
    // Applies css properties to an element.
    function applyProperties( target, properties ) {
      for( let key in properties ) {
        target.style[ key ] = properties[ key ];
      }
    }
    
    init();
  })();