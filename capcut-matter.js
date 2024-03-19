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

  var tagTalenat = createTag(containerWidth / 2, 0, 343, 251,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba9c969768a6290a9505d8_Talenat.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa996c3ecea30f171847e_Talenat%20%5BMob%5D.svg');
  
   var tagAgencija = createTag(containerWidth / 2 - 60, 60, 339, 246,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa94e7e4424a0d0729af8_Agencija.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa99677c603a4f05a21c1_Agencija%20%5BMob%5D.svg');
  
   var tagMontaza = createTag(containerWidth / 2 + 60, 100, 278, 205,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa94ff3b3ba13c87ebbbe_Montaza.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa998e61adda5176c74c5_Montaza%20%20%5BMob%5D.svg');
  
   var tagNaplatim = createTag(containerWidth / 2 + 180, 180, 321, 280,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa94fac425b9b78b7be65_Naplatim.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa996d42fd5474627c130_Naplatim%20%5BMob%5D.svg');
  
   var tagPlasim = createTag(containerWidth / 2 - 180, 210, 234, 163,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa94ffb3120ab6c1c529c_Plasim.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa996eab501eb88c9f1eb_Plasim%20%5BMob%5D.svg');
  
   var tagMuzika = createTag(containerWidth / 2 + 200, 21, 395, 260,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa94fc826a4d9b360fe3e_Muzika.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa996038a28c4b05efcdc_Muzika%20%5BMob%5D.svg');
  
   var tagEfekat = createTag(containerWidth / 2 + 300, 75, 362, 275,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa94f72880d7761a9e178_Efekat.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa996e27a705262f7b399_Efekte%20%20%5BMob%5D.svg');
  
   var tagEditujem = createTag(containerWidth / 2 - 160, 250, 357, 300,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa950eb70f1fa07e3face_Editujem.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa9967df7d16d69687519_Editujem%20%5BMob%5D.svg');
  
   var tagKlijenti = createTag(containerWidth / 2 - 80, 100, 380, 212,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa953abfd5e6f6fea2a24_Klijenti%20(2).svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa998abfd5e6f6fea4842_Klijenti%20%5BMob%5D.svg');


  // Add bodies to the world
  World.add(engine.world, [
  ground, 
  wallLeft, 
  wallRight, 
  roof, 
  tagTalenat,
  tagAgencija,
  tagMontaza,
  tagNaplatim,
  tagPlasim,
  tagMuzika,
  tagEfekat,
  tagEditujem,
  tagKlijenti
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
