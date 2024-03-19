<!-- Matter JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js"></script>
<script>
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

    var tagMentor = createTag(containerWidth / 2, 0, 379, 251,
    'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba9c9672880d7761a26428_Mentor.svg',
    'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba9c98c7d0b776fdb7274b_%5BMob%5D%20Mentor.svg');
		
     var tagTalenat = createTag(containerWidth / 2 - 60, 60, 343, 251,
    'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba9c969768a6290a9505d8_Talenat.svg',
    'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba9c980ecc350442f6893f_%5BMob%5D%20Talenat.svg');
		
     var tagInspiracija = createTag(containerWidth / 2 + 60, 100, 315, 261,
    'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba9c96a2831f7be7c7f18b_Inspiracija.svg',
    'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba9c986e626a19fc36850e_%5BMob%5D%20Inspiracija.svg');
		
     var tagNaplacujem = createTag(containerWidth / 2 + 180, 180, 312, 230,
    'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba9c9663a05ed47ce750a4_Naplacujem.svg',
    'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba9c98f2fe50dc606c3865_%5BMob%5D%20Naplacujem.svg');
		
     var tagSiguran = createTag(containerWidth / 2 - 180, 210, 331, 249,
    'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba9c963cbf4d7fa296ca5e_Siguran%20u%20dizajn.svg',
    'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba9c9875d3b4affcff23f6_%5BMob%5D%20Siguran.svg');
		
     var tagPraviLogo = createTag(containerWidth / 2 + 200, 21, 324, 238,
    'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba9c96042bb71f5b781811_Pravi%20Logo.svg',
    'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba9c9af3b3ba13c87705f9_%5BMob%5D%20Pravi%20Logo.svg');
		
     var tagNaucim = createTag(containerWidth / 2 + 300, 75, 330, 249,
    'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba9c983de3bb80b96f5bf1_Naucim.svg',
    'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba9c964cb8013de9b7da53_%5BMob%5D%20Naucim.svg');
		
     var tagKlijenti = createTag(containerWidth / 2 - 160, 250, 343, 242,
    'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba9c98e6bb76702ea663e7_Klijenti.svg',
    'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba9c9a3fd2fb43e0c5fcec_%5BMob%5D%20Klijenti.svg');
		
     var tagPrviLogo = createTag(containerWidth / 2 - 80, 100, 390, 288,
    'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba9c98c7d0b776fdb72755_Prvi%20Logo.svg',
    'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba9c96042bb71f5b7817cc_%5BMob%5D%20Prvi%20Logo.svg');


    // Add bodies to the world
    World.add(engine.world, [
    ground, 
    wallLeft, 
    wallRight, 
    roof, 
    tagMentor,
    tagTalenat,
    tagInspiracija,
    tagNaplacujem,
    tagSiguran,
    tagPraviLogo,
    tagNaucim,
    tagKlijenti,
    tagPrviLogo
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
</script>
