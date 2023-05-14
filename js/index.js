$(document).ready(function() {
      // Define click handler
      function onClickButton(event) {
         alert(`You clicked the \'${event.currentTarget.innerText}\' button!`);
      }
      // Get our DOM element we want to target
      const footerLinks = $('.footer-link');
      // Apply click handler to our DOM element
      footerLinks.each(function() {
         $(this).click(onClickButton);
      });
});