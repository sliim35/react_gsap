import { TweenMax, Elastic } from 'gsap';

const duration = 0.6;

export default {
  show(target, isAppearing) {
    return TweenMax.from(target, duration, {
      opacity: 0,
      x: 50,
      ease: Elastic.easeOut.config(0.25, 1)
    });
  },

  hide(target) {
    return TweenMax.to(target, 0.4, {
      opacity: 0,
      x: -500,
      ease: Elastic.easeOut.config(0.25, 1)
    });
  }
};
