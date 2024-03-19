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
  
  var tagNoCode = createTag(containerWidth / 2, 0, 331, 243,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65b6e21d8518a835a6a527e4_No-code%20deluje%20zanimljivo.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65b6e29d5a37c967e188ab43_%5BMob%5D%20No-code%20deluje%20zanimljivo.svg');
  
   var tagHome = createTag(containerWidth / 2 - 60, 60, 349, 253,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65b6e21ccebba152b5f2b88a_Trazim%20nesto%20za%20rad%20od%20kuce.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65b6e29fe29fd2c57455fa73_%5BMob%5D%20Trazim%20nesto%20za%20rad%20od%20kuce.svg');
  
   var tagHow = createTag(containerWidth / 2 + 60, 100, 314, 228,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65b6e21d1c3ea7472223f24e_Kako%20da%20napravim%20sajt.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65b6e29d56665f9199b82e12_%5BMob%5D%20Kako%20da%20napravim%20sajt.svg');
  
   var tagAnim = createTag(containerWidth / 2 + 180, 180, 360, 259,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65b6e21d5a37c967e1887371_Zelim%20da%20pravim%20kul%20animacije.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65b6e29dc5c203af176c716c_%5BMob%5D%20Zelim%20da%20pravim%20kul%20animacije.svg');
  
   var tagLive = createTag(containerWidth / 2 - 180, 210, 328, 241,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65b6e21d8518a835a6a527f1_Zelim%20da%20ozivim%20svoj%20dizajn.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65b6e29d245ce6b52a7467cb_%5BMob%5D%20Zelim%20da%20ozivim%20svoj%20dizajn.svg');
  
   var tagPay = createTag(containerWidth / 2 + 200, 21, 298, 225,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65b6e21d7966128030e3fd36_Koliko%20da%20naplatim%20sajt.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65b6e29df75ecb84ae88fe03_%5BMob%5D%20Koliko%20da%20naplatim%20sajt.svg');
  
   var tagComp = createTag(containerWidth / 2 + 300, 100, 366, 264,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65b6e21f070493c28ad4efa3_Kod%20izgleda%20prekomplikovano.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65b6e29d7db264a75d2e71a3_%5BMob%5D%20Kod%20izgleda%20prekomplikovano.svg');
  
   var tagMent = createTag(containerWidth / 2 - 160, 250, 359, 255,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65b6e22025cc1be731b24a44_Treba%20mi%20mentor%20za%20Webflow.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65b6e29d2f3e57f14b17e16a_%5BMob%5D%20Treba%20mi%20mentor%20za%20Webflow.svg');
  
   var tagCli = createTag(containerWidth / 2 - 80, 100, 349, 240,
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65b6e21dc7bf7e4f2e47c32f_Ne%20umem%20da%20nadjem%20klijente.svg',
  'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65b6e29d83424289c1fc28f5_%5BMob%5D%20Ne%20umem%20da%20nadjem%20klijente.svg');


  // Add bodies to the world
  World.add(engine.world, [
  ground, 
  wallLeft, 
  wallRight, 
  roof, 
  tagNoCode,
  tagHome,
  tagHow,
  tagAnim,
  tagLive,
  tagPay,
  tagComp,
  tagMent,
  tagCli
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
