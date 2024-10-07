import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// CTA button animation
const ctaButton = document.querySelector(".cta-button");

gsap.set(ctaButton, {
    position: 'absolute',
    bottom: '24px',
    right: '24px',
    opacity: 0,
    visibility: 'hidden',
    zIndex: 1000,
});

ScrollTrigger.create({
    trigger: 'body',
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: (self) => {
        if (scrollY >= 2160) {
            gsap.to(ctaButton, {
                position: 'fixed',
                opacity: 1,
                visibility: 'visible',
                duration: 0.3,
            });
        } else {
            gsap.to (ctaButton, {
                position: 'absolute',
                opacity: 0,
                visibility: 'hidden',
                duration: 0.3,
                onComplete: () => {
                    gsap.set(ctaButton, {
                        position: 'absolute'
                    });
                }
            })
        }
    }
})