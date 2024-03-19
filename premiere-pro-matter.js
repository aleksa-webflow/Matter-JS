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
  
   var tagNaplacujem = createTag(containerWidth / 2 - 60, 60, 312, 230,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba9c9663a05ed47ce750a4_Naplacujem.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba9c98f2fe50dc606c3865_%5BMob%5D%20Naplacujem.svg');
  
   var tagEditor = createTag(containerWidth / 2 + 60, 100, 370, 271,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baae12d732a9fcbff4606c_Editor.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa9960c95169e7390a68f_Premalo%20%5BMob%5D.svg');
  
   var tagPremierePro = createTag(containerWidth / 2 + 180, 180, 369, 257,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baae122ae54c8c249ff289_PremierePro.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baae2033dda2bd7817ea79_PremierePro%20%5BMob%5D.svg');
  
   var tagEfekti = createTag(containerWidth / 2 - 180, 210, 392, 275,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baae1252b7d97da135be2e_Efekti.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa996e27a705262f7b399_Efekte%20%20%5BMob%5D.svg');
  
   var tagMuzika = createTag(containerWidth / 2 + 200, 21, 386, 260,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baae1277c603a4f05cf62a_Muzika%20(1).svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa996038a28c4b05efcdc_Muzika%20%5BMob%5D.svg');
  
   var tagMontiram = createTag(containerWidth / 2 + 300, 75, 403, 280,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baae12cf1d280838090ab3_Montiram.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa996d42fd5474627c130_Naplatim%20%5BMob%5D.svg');
  
   var tagEditujem = createTag(containerWidth / 2 - 160, 250, 419, 300,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baae132a38da3bbbd6b789_Editujem%20(1).svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa9967df7d16d69687519_Editujem%20%5BMob%5D.svg');
  
   var tagKlijenti = createTag(containerWidth / 2 - 80, 100, 302, 212,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baae12d4aa663ba9dd5640_Klijenti%20(3).svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa998abfd5e6f6fea4842_Klijenti%20%5BMob%5D.svg');


  // Add bodies to the world
  World.add(engine.world, [
  ground, 
  wallLeft, 
  wallRight, 
  roof, 
  tagTalenat,
  tagNaplacujem,
  tagEditor,
  tagPremierePro,
  tagEfekti,
  tagMuzika,
  tagMontiram,
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
