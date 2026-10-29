/**
 * Gorish Portfolio - Interactive Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navToggle.classList.toggle('open');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking on any nav link
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. Navbar Scrolled State
  const navbar = document.getElementById('navbar');
  const handleScroll = () => {
    if (window.scrollY > 20) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 3. Active Nav Link Scrollspy
  const sections = document.querySelectorAll('section[id]');
  const highlightNavLink = () => {
    const scrollY = window.pageYOffset + 120;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  };
  window.addEventListener('scroll', highlightNavLink, { passive: true });

  // 4. Copy Email to Clipboard
  const copyBtn = document.getElementById('copy-email-btn');
  const emailElem = document.getElementById('email-address');
  const copyTooltip = document.getElementById('copy-tooltip');

  if (copyBtn && emailElem && copyTooltip) {
    copyBtn.addEventListener('click', async () => {
      const emailText = emailElem.textContent.trim();
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(emailText);
        } else {
          // Fallback for non-secure contexts
          const textArea = document.createElement('textarea');
          textArea.value = emailText;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          textArea.remove();
        }

        // Show tooltip
        copyTooltip.classList.add('show');
        setTimeout(() => {
          copyTooltip.classList.remove('show');
        }, 2000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    });
  }
});

// 5. Contact Form Handler (Opens user's mail client)
function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;

  const targetEmail = document.getElementById('email-address')?.textContent?.trim() || 'your.email@example.com';
  const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
  const body = encodeURIComponent(
    `Hi Gorish,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`
  );

  window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
}

