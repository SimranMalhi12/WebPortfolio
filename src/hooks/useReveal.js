import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const useReveal = (ref, options = {}) => {
  const { delay = 0, duration = 1, y = 50, stagger = 0 } = options;

  useEffect(() => {
    if (!ref.current) return

    const element = ref.current;

    // Set initial state to avoid flash of unstyled content
    gsap.set(element, { opacity: 0, y: y });

    const animation = gsap.to(
      element,
      {
        opacity: 1,
        y: 0,
        duration: duration,
        delay: delay,
        stagger: stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    )

    return () => {
      if (animation.scrollTrigger) {
        animation.scrollTrigger.kill()
      }
      animation.kill()
    }
  }, [ref, delay, duration, y, stagger])
}
