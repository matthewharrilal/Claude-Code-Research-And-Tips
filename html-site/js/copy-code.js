// Copy button functionality for code blocks
document.addEventListener('DOMContentLoaded', function() {
  // Add copy buttons to all pre elements
  document.querySelectorAll('pre').forEach(function(pre) {
    const button = document.createElement('button');
    button.className = 'copy-btn';
    button.textContent = 'Copy';
    button.addEventListener('click', function() {
      const code = pre.querySelector('code') || pre;
      navigator.clipboard.writeText(code.textContent).then(function() {
        button.textContent = 'Copied!';
        setTimeout(function() {
          button.textContent = 'Copy';
        }, 2000);
      });
    });
    pre.style.position = 'relative';
    pre.appendChild(button);
  });
});
