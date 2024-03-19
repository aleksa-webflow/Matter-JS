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

  var tagCRM = createTag(containerWidth / 2, 0, 101, 64,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65cd10db4e867507e04b24b0_CRM.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65cd10f955f7033200787636_%5BMob%5D%20CRM.svg');
  
   var tagAPI = createTag(containerWidth / 2 - 60, 60, 85, 55,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65cd10db037d79f2dbc2a67a_API.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65cd10f965a702198c7bac3c_%5BMob%5D%20API.svg');
  
   var tagWireframe = createTag(containerWidth / 2 + 60, 100, 166, 116,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65cd10dbbefb92fdc971aab4_Wireframe.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65cd10fa2e781d54010b760c_%5BMob%5D%20Wireframe.svg');
  
   var tagStakeholder = createTag(containerWidth / 2, 180, 180, 133,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65cd10db6f6b1a71158663b4_Stakeholder.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65cd10f942b07a0d6a96b925_%5BMob%5D%20Stakeholder.svg');
  
   var tagCAC = createTag(containerWidth / 2 - 100, 210, 439, 323,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65cd10db1849d69e54505d67_CAC.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65cd10fea775aa2a2590a56f_%5BMob%5D%20COC.svg');
  
   var tagQoQ = createTag(containerWidth / 2 + 200, 21, 303, 218,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65cd10db7aa96121fa43f9f3_QoQ.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65cd10fce961dbac1e95ecbb_%5BMob%5D%20QoQ.svg');
  
   var tagMVP = createTag(containerWidth / 2 + 300, 75, 214, 157,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65cd10db69f2f834c73fd83c_MVP.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65cd10f953e656fad537c79c_%5BMob%5D%20MVP.svg');
  
   var tagKPI = createTag(containerWidth / 2 - 160, 250, 349, 240,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65cd10dc7bea493da12f1e8a_KPI.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65cd10f99a1d9122a4acae82_%5BMob%5D%20KPI.svg');
  
   var tagGUI = createTag(containerWidth / 2 - 80, 100, 305, 212,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65cd10de0709aec97de1186e_GUI.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65cd10f96b37f87f758dc4b5_%5BMob%5D%20GUI.svg');


  // Add bodies to the world
  World.add(engine.world, [
  ground, 
  wallLeft, 
  wallRight, 
  roof, 
  tagCRM,
  tagAPI,
  tagWireframe,
  tagStakeholder,
  tagCAC,
  tagQoQ,
  tagMVP,
  tagKPI,
  tagGUI
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
