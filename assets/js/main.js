gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".fade-text").forEach((element) => {
    const text = new SplitType(element, { types: "chars" });
    const scrollConfig = {
        trigger: element,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        toggleActions: "play play reverse reverse",
    };

    gsap.fromTo(
        text.chars,
        { opacity: 0.4 },
        {
            opacity: 1,
            duration: 0.3,
            stagger: 0.02,
            scrollTrigger: scrollConfig,
        },
    );

    gsap.fromTo(
        element.querySelectorAll("span .char"),
        { color: "#000000" },
        {
            color: "#ff0000",
            duration: 0.3,
            stagger: 0.02,
            scrollTrigger: scrollConfig,
        },
    );
});

const lenis = new Lenis();
requestAnimationFrame(function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
});
