'use client';
import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const cursorRef = useRef(null);
  const isTouch = typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  useEffect(() => {
    if (isTouch) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMove = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top  = e.clientY + 'px';
    };

    const onEnter = () => cursor.classList.add('cursor--hover');
    const onLeave = () => cursor.classList.remove('cursor--hover');

    document.addEventListener('mousemove', onMove);

    const interactives = document.querySelectorAll(
      'a, button, .filter-tab, .work-card, .service-card, .faq-question, .process-num-pill'
    );
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, [isTouch]);

  if (isTouch) return null;

  return <div ref={cursorRef} className="cursor-glow" aria-hidden="true" />;
}