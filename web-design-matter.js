  // Function to check if the window width is desktop
	function isDesktop() {
    return window.innerWidth > 767;
  }
  
  // Returns rectangle height according to screen size
  function rectangleHeight() {
  	return window.innerWidth > 767 ? 64 : 37
  }
  
  function initSimulation() {
    // Matter.js components
    var Engine = Matter.Engine,
        Render = Matter.Render,
        Events = Matter.Events,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Bodies = Matter.Bodies;

    // Create engine and world
    var engine = Engine.create({ gravity: { scale: 0.002 } }),
        world = engine.world;

    // Container information
    var containerElement = document.querySelector(".tag-canvas"),
        containerWidth = containerElement.clientWidth + 2,
        containerHeight = containerElement.clientHeight + 2;

    // Create rendering environment
    var render = Render.create({
      element: containerElement,
      engine: engine,
      options: {
        width: containerWidth,
        height: containerHeight,
        pixelRatio: 2,
        background: "transparent",
        border: "none",
        wireframes: false
      }
    });

    // Create static bodies (ground, walls, roof)
    var ground = Bodies.rectangle(containerWidth / 2 + 160, 
    containerHeight + 80, 
    containerWidth + 480, 
    160, 
    { render: { fillStyle: "#000000" }, isStatic: true });
    
    var wallLeft = Bodies.rectangle(-80, 
    containerHeight / 2, 
    160, 
    containerHeight, 
    { isStatic: true });
    
    var wallRight = Bodies.rectangle(containerWidth + 80, 
    containerHeight / 2, 
    160, 
    1280, 
    { isStatic: true });
    
    var roof = Bodies.rectangle(containerWidth / 2 + 160, 
    -80, 
    containerWidth + 320,
    160, 
    { isStatic: true });

    // Create tag bodies with sprites
    var radius = 4;
    
var createTag = function (x, y, rectangleWidthLarge, rectangleWidthSmall, textureUrlLarge, textureUrlSmall) {
      return Bodies.rectangle(x, y, 
      isDesktop() ? rectangleWidthLarge : rectangleWidthSmall, 
      rectangleHeight(),
        {
          chamfer: { radius: radius },
          render: { 
          	sprite: { 
            	texture: isDesktop() ? textureUrlLarge : textureUrlSmall, 
              xScale: 1, 
              yScale: 1 
              } 
           	}
        });
    };

    var tagPosao = createTag(containerWidth / 2, 0, 298, 213,
    'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba4c81d9e45cac2c0fb022_Jel%20moram%20na%20posao.svg',
    'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba4eab76fa9adcb177299b_%5BMob%5D%20Jel%20moram%20na%20posao.svg');
		
     var tagDizajn = createTag(containerWidth / 2 - 60, 60, 341, 243,
    'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba4c81a6e2036cd91186e9_Kako%20da%20popravim%20dizajn.svg',
    'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba4eada9214c51d219e357_%5BMob%5D%20Kako%20da%20popravim%20dizajn.svg');
		
     var tagFont = createTag(containerWidth / 2 + 60, 100, 322, 228,
    'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba4c82345d5f45eb44a51e_Koj%20font%20da%20odaberem.svg',
    'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba4eab24ad92f2339daf96_%5BMob%5D%20Koji%20font%20da%20odaberem.svg');
		
     var tagDosadno = createTag(containerWidth / 2, 260, 455, 329,
    'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba4c8270f0335b0eca2d58_Kako%20da%20mi%20sajt%20ne%20izgleda%20dosadno.svg',
    'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba4eab5f64ee01572734c3_%5BMob%5D%20Kako%20da%20mi%20sajt%20ne%20izgleda%20dosadno.svg');
		
     var tagPocnem = createTag(containerWidth / 2 - 180, 0, 286, 195,
    'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba4c828a6558d56c270f81_Odakle%20da%20pocnem.svg',
    'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba4eab345d5f45eb45fc6c_%5BMob%5D%20Odakle%20da%20pocnem.svg');
		
     var tagNisamSIguran = createTag(containerWidth / 2 + 200, 121, 331, 249,
    'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba4c8240c670f8f06904a2_Nisam%20siguran%20u%20svoj%20dizajn.svg',
    'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba4eabf6ac9ba799751818_%5BMob%5D%20Nisam%20siguran%20u%20svoj%20dizajn.svg');
		
     var tagNaplatim = createTag(containerWidth / 2 + 40, 200, 367, 278,
    'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba4c8235d800d17d58e603_Kako%20da%20naplatim%20ovaj%20sajt.svg',
    'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba4eab269edaea68fa895b_%5BMob%5D%20Kako%20da%20naplatim%20ovaj%20sajt.svg');
		
     var tagDobarDizajn = createTag(containerWidth / 2 - 20, 20, 296, 220,
    'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba4ca139695216f2854bcc_Jel%20ovo%20dobar%20dizajn.svg',
    'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba4eab45c86c0c94ab0a36_%5BMob%5D%20Jel%20ovo%20dobar%20dizajn.svg');
		
     var tagBoje = createTag(containerWidth / 2 - 80, 100, 319, 229,
    'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba690f37064f9d9a15fd97_Kako%20da%20uskladim%20boje.svg',
    'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba4eab060f0b85f2447a1d_%5BMob%5D%20Kako%20da%20uskladim%20boje.svg');


    // Add bodies to the world
    World.add(engine.world, [
    ground, 
    wallLeft, 
    wallRight, 
    roof, 
    tagPosao,
    tagDizajn,
    tagFont,
    tagDosadno,
    tagPocnem,
    tagNisamSIguran,
    tagNaplatim,
    tagDobarDizajn,
    tagBoje
    ]);

    // Mouse interaction setup
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
          mouse: mouse,
          constraint: {
            stiffness: 0.2,
            render: { visible: false }
          }
        });

    World.add(world, mouseConstraint);

    render.mouse = mouse;
    mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
    mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

    let click = false;

    document.addEventListener("mousedown", () => (click = true));
    document.addEventListener("mousemove", () => (click = false));
    document.addEventListener("mouseup", () => console.log(click ? "click" : "drag"));

    Events.on(mouseConstraint, "mouseup", function (event) {
      var mouseConstraint = event.source;
      var bodies = engine.world.bodies;

      if (!mouseConstraint.bodyB) {
        for (var i = 0; i < bodies.length; i++) {
          var body = bodies[i];
          if (click === true) {
            if (Matter.Bounds.contains(body.bounds, mouseConstraint.mouse.position)) {
              var bodyUrl = body.url;
              console.log("Body.Url >> " + bodyUrl);
              if (bodyUrl != undefined) {
                window.open(bodyUrl, "_blank");
                console.log("Hyperlink was opened");
              }
              break;
            }
          }
        }
      }
    });

    // Run the simulation
    Matter.Runner.run(engine);
    Render.run(render);
  }

  function checkIntersection(entry, observer) {
    if (entry.isIntersecting) {
      initSimulation();
      observer.disconnect();
    } else {
      observer.observe(containerElement);
    }
  }

  // Intersection observer setup
  var observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      checkIntersection(entry, observer);
    });
  }, {});

  var containerElement = document.querySelector(".gravity_trigger");
  observer.observe(containerElement);
