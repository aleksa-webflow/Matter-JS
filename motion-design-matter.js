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

  var tagSpec = createTag(containerWidth / 2, 0, 392, 294,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa2ef81c089289c7b2b29_Spec.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa2fc88871f3d8a6501b2_%5BMob%5D%20Spec.svg');
  
   var tagOdakle = createTag(containerWidth / 2 - 60, 60, 286, 195,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa2f0987fe9d75a13185e_Odakle.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa2fc286438f47779dc3d_%5BMob%5D%20Odakle.svg');
  
   var tagKreativan = createTag(containerWidth / 2 + 60, 100, 398, 285,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa2f0b689d81f79a648f7_Kreativan.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa2fcf3b3ba13c87afd0f_%5BMob%5D%20Kreativan.svg');
  
   var tagZaradi = createTag(containerWidth / 2 + 180, 180, 438, 323,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa2f09768a6290a9907c3_Zaradi.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa2fcc84a08e024ae57cb_%5BMob%5D%20Zaradi.svg');
  
   var tagPrezanimljiv = createTag(containerWidth / 2 - 180, 210, 350, 265,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa2f0b17176021305fcda_Prezanimljiv.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa2fb88207779fed0eae5_%5BMob%5D%20Prezanimljiv.svg');
  
   var tagKlijenti = createTag(containerWidth / 2 + 200, 21, 367, 255,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa2f0038a28c4b05af18b_Klijenti%20(1).svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa2fcae4d2aac0e911926_%5BMob%5D%20Klijente.svg');
  
   var tagPortfolio = createTag(containerWidth / 2 + 300, 75, 349, 252,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa2f05138896d0a1cec89_Portfolio.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa2fc8ae2e7bc5f47dba5_%5BMob%5D%20Portfolio.svg');
  
   var tagAfterEffects = createTag(containerWidth / 2 - 160, 250, 363, 283,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa2f19e210d7aa43487ff_After%20Effects.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa2fcb1717602130600cb_%5BMob%5D%20After%20Effects.svg');
  
   var tagAnimacija = createTag(containerWidth / 2 - 80, 100, 372, 268,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa2f1eacbb16d3f8af2c7_Animacija.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65baa2fe2efa2f976db3af24_%5BMob%5D%20Animacija.svg');


  // Add bodies to the world
  World.add(engine.world, [
  ground, 
  wallLeft, 
  wallRight, 
  roof, 
  tagSpec,
  tagOdakle,
  tagKreativan,
  tagZaradi,
  tagPrezanimljiv,
  tagKlijenti,
  tagPortfolio,
  tagAfterEffects,
  tagAnimacija
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
