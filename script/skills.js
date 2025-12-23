// Skills progress bar animation on scroll
(function() {
  var animated = false;

  function animateSkills() {
    if (animated) return;
    
    var aboutSection = document.getElementById('about');
    if (!aboutSection) return;
    
    var rect = aboutSection.getBoundingClientRect();
    var windowHeight = window.innerHeight;

    // Trigger when section is 80% visible
    if (rect.top < windowHeight * 0.8) {
      animated = true;
      
      var skills = document.querySelectorAll('.skill');
      
      for (var i = 0; i < skills.length; i++) {
        (function(index) {
          setTimeout(function() {
            var skill = skills[index];
            var progressBar = skill.querySelector('.skill-progress');
            var indicator = skill.querySelector('.skill-indicator');
            var targetProgress = progressBar.getAttribute('data-progress');
            
            // Animate progress bar width
            progressBar.style.width = targetProgress + '%';
            
            // Animate indicator position and show it
            indicator.style.left = targetProgress + '%';
            indicator.style.opacity = '1';
          }, index * 200);
        })(i);
      }
    }
  }

  // Run when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', animateSkills);
    // Check immediately in case already in view
    animateSkills();
  });
})();

