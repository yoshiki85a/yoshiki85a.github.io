'usestrict';

{
  // API
  function inViewCallback(entries, obs) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  function onScrollCallback(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add('scrolled');
        toTop.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
        toTop.classList.remove('scrolled');
      }
    });
  }

  const header = document.querySelector('header');
  const toTop = document.getElementById('to-top');

  const inViewObserver = new IntersectionObserver(inViewCallback, {
    threshold: .2,
  });

  document.querySelectorAll('.animate').forEach(el => {
    inViewObserver.observe(el);
  });

  const onScrollObserver = new IntersectionObserver(onScrollCallback);
  onScrollObserver.observe(document.getElementById('target'));

  toTop.addEventListener('click', e => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}


{
  // slide
  function play() {
    setTimeout(() => {
      images[currentIndex].classList.remove('current');
      currentIndex++
      if (currentIndex > images.length - 1) {
        currentIndex = 0;
      }
      images[currentIndex].classList.add('current');
      play();
    },3000);
  }

  const images = document.querySelectorAll('.slide img');
  let currentIndex = 0;

  play();
}


{
  // hamburger
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const overlay = document.querySelector('.overlay');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
}