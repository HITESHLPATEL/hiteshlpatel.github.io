/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function () {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var storedTheme = null;
  try { storedTheme = localStorage.getItem("theme"); } catch (error) { /* Storage may be disabled. */ }
  // detect OS/browser preference
  const browserPref = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';

  // Set the theme on page load or when explicitly called
  var setTheme = function (theme) {
    const use_theme =
      theme ||
      storedTheme ||
      $("html").attr("data-theme") ||
      browserPref;

    $("#theme-toggle").attr("aria-pressed", String(use_theme === "dark"));
    $('meta[name="theme-color"]').attr("content", use_theme === "dark" ? "#474747" : "#ffffff");
    if (use_theme === "dark") {
      $("html").attr("data-theme", "dark");
      $("#theme-icon").removeClass("fa-sun").addClass("fa-moon");
    } else if (use_theme === "light") {
      $("html").removeAttr("data-theme");
      $("#theme-icon").removeClass("fa-moon").addClass("fa-sun");
    }
  };

  setTheme();

  // if user hasn't chosen a theme, follow OS changes
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener("change", (e) => {
      if (!storedTheme) {
        setTheme(e.matches ? "dark" : "light");
      }
    });

  // Toggle the theme manually
  var toggleTheme = function () {
    const current_theme = $("html").attr("data-theme");
    const new_theme = current_theme === "dark" ? "light" : "dark";
    storedTheme = new_theme;
    try { localStorage.setItem("theme", new_theme); } catch (error) { /* Keep the theme for this page. */ }
    setTheme(new_theme);
  };

  $('#theme-toggle').on('click', toggleTheme);

  // These should be the same as the settings in _variables.scss
  const scssLarge = 925; // pixels

  // Sticky footer
  var bumpIt = function () {
    $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
  },
    didResize = false;

  bumpIt();

  $(window).resize(function () {
    didResize = true;
  });
  setInterval(function () {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);

  // FitVids init
  fitvids();

  // Contact links expand in the page flow on small screens.
  var $profileButton = $(".profile-toggle");
  var $profileLinks = $("#profile-links");
  function closeProfile(returnFocus) {
    $profileButton.removeClass("open").attr("aria-expanded", "false");
    $profileLinks.css("display", "");
    if (returnFocus) $profileButton.trigger("focus");
  }
  $profileButton.on("click", function () {
    var open = $(this).attr("aria-expanded") !== "true";
    $(this).toggleClass("open", open).attr("aria-expanded", String(open));
    $profileLinks.toggle(open);
  });
  $(".author__urls-wrapper").on("keydown", function (event) {
    if (event.key === "Escape" && $profileButton.attr("aria-expanded") === "true") closeProfile(true);
  });
  var wasMobile = $(window).width() < scssLarge;
  $(window).on("resize", function () {
    var isMobile = $(window).width() < scssLarge;
    if (isMobile !== wasMobile) closeProfile(false);
    wasMobile = isMobile;
  });

  // Native anchors preserve URL fragments, focus, and reduced-motion preferences.

  // add lightbox class to all image links
  // Add "image-popup" to links ending in image extensions,
  // but skip any <a> that already contains an <img>
  $("a[href$='.jpg'],\
  a[href$='.jpeg'],\
  a[href$='.JPG'],\
  a[href$='.png'],\
  a[href$='.gif'],\
  a[href$='.webp']")
      .not(':has(img)')
      .addClass("image-popup");

  // 1) Wrap every <p><img> (except emoji images) in an <a> pointing at the image, and give it the lightbox class
  $('p > img').not('.emoji').each(function() {
    var $img = $(this);
    // skip if it’s already wrapped in an <a.image-popup>
    if ( ! $img.parent().is('a.image-popup') ) {
      $('<a>')
        .addClass('image-popup')
        .attr('href', $img.attr('src'))
        .insertBefore($img)   // place the <a> right before the <img>
        .append($img);        // move the <img> into the <a>
    }
  });

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: reducedMotion ? 0 : 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function () {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

});
