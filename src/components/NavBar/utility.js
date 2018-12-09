export function intiateAnimation(nav) {
  let lastScrollTop = 0,
    latestKnownScrollTop = 0,
    ticking = false;

  const update = () => {
    // reset the tick
    ticking = false;

    let currScrollTop = latestKnownScrollTop;
    let isScrollingDown = currScrollTop > lastScrollTop;
    let isHeaderVisible = currScrollTop < 58;

    if (isScrollingDown && !isHeaderVisible) {
      this.setState({ show: false }, () => (lastScrollTop = currScrollTop));
    } else if (!isScrollingDown || !currScrollTop) {
      this.setState({ show: true }, () => (lastScrollTop = currScrollTop));
    }

    if (currScrollTop > 60) {
      // `is-hidden`  styles are in app.css
      nav.classList.add("is-hidden");
      setTimeout(() => this.setState({ changeNav: true }), 0);
    } else if (!currScrollTop) {
      this.setState({ changeNav: false });
    }
  };

  const onScroll = () => {
    latestKnownScrollTop = window.scrollY;
    requestTick();
  };

  function requestTick() {
    if (!ticking) {
      window.requestAnimationFrame(update);
    }
    ticking = true;
  }

  window.addEventListener("scroll", onScroll);
}
