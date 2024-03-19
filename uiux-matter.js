function isDesktop() {
    return window.innerWidth > 767;
}

function rectangleHeight() {
    return window.innerWidth > 767 ? 64 : 37;
}

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

    var containerElement = document.querySelector(".tag-canvas"),
        containerWidth = containerElement.clientWidth + 2,
        containerHeight = containerElement.clientHeight + 2;

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

    var tagKomp = createTag(containerWidth / 2, 0, 416, 291,
        'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65bab3971dacfc909456a9aa_Komp.svg',
        'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65bab3a9b100f2dd832451a5_Komp%20%5BMob%5D.svg');

    var tagUIUX = createTag(containerWidth / 2 - 60, 60, 330, 238,
        'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65bab397bf2d77825adfe71c_UIUX.svg',
        'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65bab3a913db4a9af6ae2972_UIUX%20%5BMob%5D.svg');

    var tagNaplacivanje = createTag(containerWidth / 2 + 60, 100, 372, 270,
        'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65bab3978dcd5c2507706620_Naplacivanje.svg',
        'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65bab3a9de81713f4f2a9c9e_Naplacivanje%20%5BMob%5D.svg');
    var tagIT = createTag(containerWidth / 2 + 180, 180, 252, 166,
        'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65bab397f7e4edb943c77087_IT.svg',
        'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65bab3a9500996ad9367d334_IT%20%5BMob%5D.svg');

    var tagDizajn = createTag(containerWidth / 2 - 180, 210, 376, 274,
        'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65bab3978dcd5c250770663a_Dizajn.svg',
        'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65bab3a9ae949319355bc6a9_Dizajn%20%5BMob%5D.svg');

    var tagFigma = createTag(containerWidth / 2 + 200, 21, 294, 203,
        'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65bab3972db33e3ae6f5f9d8_Figma.svg',
        'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65bab3ab1f646966281dff7e_Figma%20%5BMob%5D.svg');

    var tagMentor = createTag(containerWidth / 2 + 300, 75, 290, 207,
        'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65bab3973601368c8183fe96_Mentor%20(1).svg',
        'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65bab3a907d79f9736749ce3_Mentor%20%5BMob%5D.svg');

    var tagApp = createTag(containerWidth / 2 - 160, 250, 435, 321,
        'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65bab3991d24f90bbeb105a8_Aplikacije.svg',
        'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65bab3a9f3ea68bb4289cdb7_Aplikacije%20%5BMob%5D.svg');

    var tagKlijenti = createTag(containerWidth / 2 - 80, 100, 376, 291,
        'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65bab397cecef4dbbb99debd_Klijenti%20(4).svg',
        'https://uploads-ssl.webflow.com/6114c0249ef45bc2232a4788/65ba9c9a3fd2fb43e0c5fcec_%5BMob%5D%20Klijenti.svg');

    World.add(engine.world, [ground, wallLeft, wallRight, roof, tagKomp, tagUIUX, tagNaplacivanje, tagIT, tagDizajn, tagFigma, tagMentor, tagApp, tagKlijenti]);

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
                        if (bodyUrl != undefined) {
                            window.open(bodyUrl, "_blank");
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
