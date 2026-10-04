import { useLayoutEffect } from 'react';
import { getGsap, MOTION_QUERIES } from '../lib/motion.js';

/**
 * Desktop-only hero sequence (native scroll, scrubbed, ~1 extra viewport).
 *
 * 1. The machine starts low, only its top showing beneath the headline.
 * 2. Scrolling lifts the headline away and raises the machine to centre.
 * 3. Three callouts draw in turn, pinning each statement to a machine part.
 *
 * Hidden states and the `is-cinematic` layout class are applied only after
 * GSAP initialises, and `mm.revert()` removes them on cleanup, so content is
 * visible if animation fails and React Strict Mode double-mounting is safe.
 */
export function useHeroSequence(rootRef) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    let mm;
    try {
      const { gsap } = getGsap();
      mm = gsap.matchMedia();

      mm.add(MOTION_QUERIES.cinematic, () => {
        const q = (sel) => root.querySelector(sel);
        const copy = q('[data-hero-copy]');
        const machine = q('[data-hero-machine]');
        const callouts = gsap.utils.toArray(root.querySelectorAll('[data-callout]'));
        if (!copy || !machine || callouts.length === 0) return undefined;

        root.classList.add('is-cinematic');

        // Start position: push the machine down so only its top peeks in.
        const startY = () => Math.round(window.innerHeight * 0.58);

        gsap.set(machine, { y: startY });
        callouts.forEach((c) => {
          gsap.set(c.querySelector('[data-callout-dot]'), { scale: 0 });
          gsap.set(c.querySelector('[data-callout-line]'), { scaleX: 0 });
          gsap.set(c.querySelector('[data-callout-label]'), { autoAlpha: 0, y: 14 });
        });

        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: root,
            start: 'top top',
            end: '+=110%',
            pin: true,
            scrub: 0.6,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.to(copy, { y: () => -window.innerHeight * 0.32, autoAlpha: 0, duration: 1, ease: 'power1.in' }, 0)
          .to(q('[data-hero-cue]'), { autoAlpha: 0, duration: 0.3 }, 0)
          .to(machine, { y: 0, scale: 1.02, duration: 1.3, ease: 'power1.inOut' }, 0)
          .to(q('[data-hero-light]'), { scale: 1.15, opacity: 1, duration: 1.3 }, 0);

        callouts.forEach((c, i) => {
          const at = 1.15 + i * 0.55;
          tl.to(c.querySelector('[data-callout-dot]'), { scale: 1, duration: 0.15, ease: 'back.out(3)' }, at)
            .to(c.querySelector('[data-callout-line]'), { scaleX: 1, duration: 0.3, ease: 'power2.out' }, at + 0.05)
            .to(c.querySelector('[data-callout-label]'), { autoAlpha: 1, y: 0, duration: 0.3, ease: 'power2.out' }, at + 0.2);
        });
        tl.to({}, { duration: 0.4 });

        return () => root.classList.remove('is-cinematic');
      });
    } catch (err) {
      console.warn('[Vendora] Hero sequence disabled:', err);
    }

    return () => mm && mm.revert();
  }, [rootRef]);
}
