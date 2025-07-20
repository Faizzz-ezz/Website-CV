function ScrollAnimations() {
  try {
    React.useEffect(() => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;
            
            if (element.hasAttribute('data-animate-left')) {
              element.classList.add('animate-slide-in-left');
            }
            if (element.hasAttribute('data-animate-right')) {
              element.classList.add('animate-slide-in-right');
            }
            if (element.hasAttribute('data-animate-up')) {
              element.classList.add('animate-slide-in-up');
            }
            if (element.hasAttribute('data-animate-fade')) {
              element.classList.add('animate-fade-in');
            }
            
            element.classList.remove('opacity-0');
            observer.unobserve(element);
          }
        });
      }, observerOptions);

      const animatedElements = document.querySelectorAll('[data-animate-left], [data-animate-right], [data-animate-up], [data-animate-fade]');
      animatedElements.forEach((el) => {
        el.classList.add('opacity-0');
        observer.observe(el);
      });

      return () => observer.disconnect();
    }, []);

    return null;
  } catch (error) {
    console.error('ScrollAnimations component error:', error);
    return null;
  }
}