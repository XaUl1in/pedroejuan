(function () {
  var nodes = document.querySelectorAll('.reveal-on-scroll');

  if (nodes.length) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach(function (el) {
        el.classList.add('is-visible');
      });
    } else {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          });
        },
        {
          root: null,
          rootMargin: '0px 0px -6% 0px',
          threshold: 0.08,
        }
      );

      nodes.forEach(function (el) {
        if (!el.classList.contains('is-visible')) {
          observer.observe(el);
        }
      });
    }
  }

})();

