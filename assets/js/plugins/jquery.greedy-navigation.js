/* Responsive navigation keeps the same links and order at every width. */
var $nav = $('#site-nav');
var $btn = $('#site-nav .nav-toggle');
var $vlinks = $('#site-nav .visible-links');
var $tail = $vlinks.children('.persist.tail');
var $hlinks = $('#navigation-overflow');

function closeNavigation(returnFocus) {
  $hlinks.addClass('hidden');
  $btn.removeClass('close').attr('aria-expanded', 'false');
  if (returnFocus) $btn.trigger('focus');
}

function updateNav() {
  // Recalculate from the full list to avoid stale widths across breakpoints.
  $hlinks.children().insertBefore($tail);
  $btn.addClass('hidden');
  while ($vlinks.outerWidth() > $nav.width() - ($btn.hasClass('hidden') ? 0 : $btn.outerWidth() + 16) && $vlinks.children(':not(.persist)').length) {
    $vlinks.children(':not(.persist)').last().prependTo($hlinks);
    $btn.removeClass('hidden');
  }
  if (!$hlinks.children().length) closeNavigation(false);
  var mastheadHeight = $('.masthead').outerHeight();
  $('body').css('padding-top', mastheadHeight + 'px');
  $('.sidebar').css('padding-top', $('.profile-toggle').is(':visible') ? '' : mastheadHeight + 'px');
}

$(window).on('resize', updateNav);
$btn.on('click', function () {
  var open = $(this).attr('aria-expanded') !== 'true';
  $hlinks.toggleClass('hidden', !open);
  $btn.toggleClass('close', open).attr('aria-expanded', String(open));
});
$nav.on('keydown', function (event) {
  if (event.key === 'Escape' && $btn.attr('aria-expanded') === 'true') closeNavigation(true);
});
$(document).on('click', function (event) {
  if (!$nav[0].contains(event.target)) closeNavigation(false);
});
updateNav();
