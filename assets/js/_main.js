/* Small, dependency-free controls for the research site. */
(function () {
  'use strict';

  const root = document.documentElement;
  const themeButton = document.getElementById('theme-toggle');
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  let storedTheme;
  try { storedTheme = localStorage.getItem('theme'); } catch (_) { /* Storage is optional. */ }
  if (storedTheme !== 'light' && storedTheme !== 'dark') storedTheme = null;

  function setTheme(theme) {
    const dark = theme === 'dark';
    if (dark) root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');
    themeButton.setAttribute('aria-pressed', String(dark));
    themeButton.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
    themeColor.setAttribute('content', dark ? '#474747' : '#ffffff');
  }
  setTheme(storedTheme || root.getAttribute('data-theme') || (preference.matches ? 'dark' : 'light'));
  preference.addEventListener('change', function (event) {
    if (!storedTheme) setTheme(event.matches ? 'dark' : 'light');
  });
  themeButton.addEventListener('click', function () {
    storedTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('theme', storedTheme); } catch (_) { /* Keep the page preference. */ }
    setTheme(storedTheme);
  });

  const nav = document.getElementById('site-nav');
  const menuButton = nav.querySelector('.nav-toggle');
  const visible = nav.querySelector('.visible-links');
  const overflow = document.getElementById('navigation-overflow');
  const tail = visible.querySelector('.tail');
  const links = Array.from(visible.children).filter(item => !item.classList.contains('persist'));
  const masthead = document.querySelector('.masthead');
  const profileButton = document.querySelector('.profile-toggle');
  const profileLinks = document.getElementById('profile-links');
  const mobile = window.matchMedia('(max-width: 924px)');

  function closeMenu(returnFocus) {
    overflow.classList.add('hidden');
    menuButton.classList.remove('close');
    menuButton.setAttribute('aria-expanded', 'false');
    if (returnFocus) menuButton.focus();
  }
  function updateNav() {
    // Measure the full row once, then move overflowing items as one batch.
    visible.style.width = 'max-content';
    links.forEach(item => visible.insertBefore(item, tail));
    menuButton.classList.remove('hidden');
    const available = nav.getBoundingClientRect().width;
    const widths = links.map(item => item.getBoundingClientRect().width);
    let width = visible.getBoundingClientRect().width;
    const reserve = menuButton.getBoundingClientRect().width + 16;
    let keep = links.length;
    if (width > available) {
      while (keep && width > available - reserve) width -= widths[--keep];
    }
    const fragment = document.createDocumentFragment();
    links.slice(keep).forEach(item => fragment.appendChild(item));
    overflow.appendChild(fragment);
    menuButton.classList.toggle('hidden', keep === links.length);
    // Fill the header after measuring: name on the left, controls at the right.
    visible.style.width = keep === links.length ? '100%' : (available - reserve) + 'px';
    if (keep === links.length) closeMenu(false);
    const headerHeight = masthead.getBoundingClientRect().height;
    document.body.style.paddingTop = headerHeight + 'px';
    document.documentElement.style.setProperty('--masthead-height', headerHeight + 'px');
  }
  menuButton.addEventListener('click', function () {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    overflow.classList.toggle('hidden', !open);
    menuButton.classList.toggle('close', open);
    menuButton.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') closeMenu(true);
  });
  document.addEventListener('click', function (event) {
    if (!nav.contains(event.target)) closeMenu(false);
  });

  if (profileButton && profileLinks) {
    function closeProfile(returnFocus) {
      profileButton.classList.remove('open');
      profileButton.setAttribute('aria-expanded', 'false');
      profileLinks.style.display = '';
      if (returnFocus) profileButton.focus();
    }
    profileButton.addEventListener('click', function () {
      const open = profileButton.getAttribute('aria-expanded') !== 'true';
      profileButton.classList.toggle('open', open);
      profileButton.setAttribute('aria-expanded', String(open));
      profileLinks.style.display = open ? 'block' : '';
    });
    document.querySelector('.author__urls-wrapper').addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && profileButton.getAttribute('aria-expanded') === 'true') closeProfile(true);
    });
    mobile.addEventListener('change', function () { closeProfile(false); });
  }

  let pendingResize = false;
  window.addEventListener('resize', function () {
    if (pendingResize) return;
    pendingResize = true;
    requestAnimationFrame(function () { updateNav(); pendingResize = false; });
  });
  updateNav();
  if (document.fonts) document.fonts.ready.then(updateNav);
})();
