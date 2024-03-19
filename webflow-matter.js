function initSimulation() {
  var Engine = Matter.Engine,
    Render = Matter.Render,
    Events = Matter.Events,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Bodies = Matter.Bodies;

  var engine = Engine.create({ gravity: { scale: 0.002 } }),
    world = engine.world;
  var containerElement = document.querySelector(".tag-canvas");
  var containerWidth = containerElement.clientWidth + 2;
  var containerHeight = containerElement.clientHeight + 2;

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

  var ground = Bodies.rectangle(containerWidth / 2 + 160, containerHeight + 80, containerWidth + 480, 160, { render: { fillStyle: "#000000" }, isStatic: true });
  var wallLeft = Bodies.rectangle(-80, containerHeight / 2, 160, containerHeight, { isStatic: true });
  var wallRight = Bodies.rectangle(containerWidth + 80, containerHeight / 2, 160, 1280, { isStatic: true });
  var roof = Bodies.rectangle(containerWidth / 2 + 160, -80, containerWidth + 320, 160, { isStatic: true });
  var border = 1;
  var radius = 4;
  
  var tagNoCode = Bodies.rectangle(containerWidth / 2, 0, window.innerWidth > 767 ? 331 : 243, window.innerWidth > 767 ? 64 : 37, { chamfer: { radius: radius }, render: { sprite: { texture: window.innerWidth > 767 ? 'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65b6e21d8518a835a6a527e4_No-code%20deluje%20zanimljivo.svg' : 'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65b6e29d5a37c967e188ab43_%5BMob%5D%20No-code%20deluje%20zanimljivo.svg', xScale: 1, yScale: 1 } } });

  // Define other tag bodies similarly...
  
  World.add(engine.world, [ground, wallLeft, wallRight, roof, tagNoCode /* Add other tag bodies here */ ]);

  var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, { mouse: mouse, constraint: { stiffness: 0.2, render: { visible: false } } });

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
      for (i = 0; i < bodies.length; i++) {
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

var observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    checkIntersection(entry, observer);
  });
}, {});

var containerElement = document.querySelector(".gravity_trigger");
observer.observe(containerElement);
