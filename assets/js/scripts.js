const fullPage = new fullpage('#fullpage', {
  //options here
  sectionsColor: ['#fff', '#f0f0f0', '#ddd', 'f0f0f0', '#eff2fc', '#fff', '#f0f0f0', '#ddd'],
  navigation: true,
  slidesNavigation: true,
  navigationTooltips: ['Introduction', 'Schedule', 'Our Story', 'Gallery', 'FAQs', 'Registry', 'RSVP'],
  showActiveTooltip: true,
});

simplyCountdown("#countdown", {
  year: 2025,
  month: 10,
  day: 12,
});

jQuery(document).ready(function ($) {
  $("#faqs").accordionjs();
});