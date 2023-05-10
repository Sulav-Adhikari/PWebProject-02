function scrollToSection(aboutUs) {
    const section = document.getElementById(aboutUs);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
