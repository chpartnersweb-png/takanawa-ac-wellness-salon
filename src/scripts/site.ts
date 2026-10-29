import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

gsap.registerPlugin(ScrollTrigger);

// Native disclosure navigation remains usable without JavaScript.
const menu = document.querySelector<HTMLDetailsElement>('[data-mobile-menu]');
const summary = menu?.querySelector<HTMLElement>('summary');

if (menu && summary) {
  menu.addEventListener('toggle', () => {
    summary.setAttribute('aria-expanded', String(menu.open));
    summary.setAttribute('aria-label', menu.open ? 'メニューを閉じる' : 'メニューを開く');
  });
  menu.addEventListener('click', (event) => {
    if (event.target instanceof Element && event.target.closest('a')) menu.open = false;
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.open) {
      menu.open = false;
      summary.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (event.target instanceof Node && menu.open && !menu.contains(event.target)) menu.open = false;
  });
}

const media = gsap.matchMedia();
media.add(
  {
    motion: '(prefers-reduced-motion: no-preference)',
    desktop: '(min-width: 1024px)',
    finePointer: '(pointer: fine)',
    tall: '(min-height: 760px)',
  },
  (context) => {
    const { motion, desktop, finePointer, tall } = context.conditions ?? {};
    if (!motion) return;
    let lenis: Lenis | undefined;
    const tick = (seconds: number) => lenis?.raf(seconds * 1000);

    if (desktop && finePointer) {
      const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 108;
      lenis = new Lenis({ lerp: 0.085, smoothWheel: true, syncTouch: false, anchors: { offset: -(headerHeight + 20) } });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
    }

    gsap.from('[data-hero-image]', { scale: desktop ? 1.045 : 1.018, duration: 1.4, ease: 'power2.out', clearProps: 'transform' });
    gsap.from('[data-hero-copy]', { autoAlpha: 0, y: 13, duration: 0.85, stagger: 0.12, delay: 0.12, ease: 'power2.out', clearProps: 'all' });

    gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
      gsap.from(element, { autoAlpha: 0, y: desktop ? 22 : 14, duration: 0.85, ease: 'power2.out', clearProps: 'opacity,visibility,transform', scrollTrigger: { trigger: element, start: 'top 92%', once: true } });
    });
    gsap.utils.toArray<HTMLElement>('[data-line]').forEach((element) => {
      gsap.from(element, { scaleX: 0, duration: 1, ease: 'power2.inOut', scrollTrigger: { trigger: element, start: 'top 92%', once: true } });
    });
    gsap.utils.toArray<HTMLElement>('[data-image-reveal]').forEach((element) => {
      gsap.fromTo(element, { clipPath: 'inset(7% 4% 7% 4%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.2, ease: 'power3.out', clearProps: 'clipPath', scrollTrigger: { trigger: element, start: 'top 89%', once: true } });
    });

    const stage = document.querySelector<HTMLElement>('[data-care-stage]');
    const photo = document.querySelector<HTMLElement>('[data-care-photo]');
    const words = gsap.utils.toArray<HTMLElement>('[data-care-word]');
    if (desktop && finePointer && tall && stage && photo && words.length === 3) {
      gsap.set(words, { color: '#9ca7b3' });
      const careTimeline = gsap.timeline({ scrollTrigger: {
        trigger: stage,
        start: 'top 14%',
        end: () => `+=${Math.round(window.innerHeight * 0.7)}`,
        scrub: 0.7,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      } });
      careTimeline
        .fromTo(photo, { clipPath: 'inset(8% 5% 8% 5%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 3, ease: 'none' }, 0)
        .to(words[0], { color: '#f7f3ea', duration: 0.8 }, 0)
        .to(words[1], { color: '#f7f3ea', duration: 0.8 }, 1)
        .to(words[2], { color: '#f7f3ea', duration: 0.8 }, 2);
      gsap.to('.salon-composition__building .image-reveal img', { yPercent: -3, scale: 1.06, ease: 'none', scrollTrigger: { trigger: '.salon-composition', start: 'top bottom', end: 'bottom top', scrub: 0.8 } });
    }

    return () => { gsap.ticker.remove(tick); lenis?.destroy(); };
  },
);

// Japanese font loading can change the positions of the headings.
void document.fonts.ready.then(() => ScrollTrigger.refresh());
window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
