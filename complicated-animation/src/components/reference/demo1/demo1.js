import gsap from "gsap";

export function gsapInit() {
    // console.clear();

    const selectAll = (e) => document.querySelectorAll(e);

    const cubes = selectAll(".cube");
    const cubeYPos = 10;

    gsap.set(".container", { autoAlpha: 1 });
    gsap.set(".scene", { rotateX: -30 });

    gsap.to(".cube", {
        duration: 4,
        scaleY: 3,
        rotateY: 180,
        y: (i) => {
            return cubeYPos * i - (cubes.length - 1) * cubeYPos;
        },
        ease: "sine.inOut",
        stagger: {
            each: 0.08,
            yoyo: true,
            repeat: -1,
            from: "start",
        },
    });

}