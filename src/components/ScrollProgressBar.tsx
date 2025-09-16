'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgressBar() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const handleScroll = () => {
      const scrollBar = document.getElementById('scroll-progress-bar');
      if (!scrollBar) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      scrollBar.style.width = percent + '%';
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMounted]);

  if (!isMounted) {
    return <div id="scroll-progress-bar" style={{ width: '0%' }}></div>;
  }

  return <div id="scroll-progress-bar"></div>;
}