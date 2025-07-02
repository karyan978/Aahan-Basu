document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            
            mobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
            });
            
            // Close mobile menu when clicking on a link
            const mobileLinks = mobileMenu.querySelectorAll('a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mobileMenu.classList.add('hidden');
                });
            });
        });


        document.addEventListener('DOMContentLoaded', function() {
            // Smooth scroll for navigation links
            const navLinks = document.querySelectorAll('a[href^="#"]');
            
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Active navigation link highlighting
            const sections = document.querySelectorAll('section');
            const navItems = document.querySelectorAll('.nav-link');
            
            window.addEventListener('scroll', function() {
                let current = '';
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    
                    if (window.pageYOffset >= sectionTop - 200) {
                        current = section.getAttribute('id');
                    }
                });
                
                navItems.forEach(item => {
                    item.classList.remove('active-nav');
                    if (item.getAttribute('href') === `#${current}`) {
                        item.classList.add('active-nav');
                    }
                });
            });
        });


        document.addEventListener('DOMContentLoaded', function() {
            const cursor = document.querySelector('.custom-cursor');
            
            if (cursor) {
                document.addEventListener('mousemove', function(e) {
                    cursor.style.left = e.clientX + 'px';
                    cursor.style.top = e.clientY + 'px';
                });
                
                document.addEventListener('mousedown', function() {
                    cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
                });
                
                document.addEventListener('mouseup', function() {
                    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                });
                
                const links = document.querySelectorAll('a, button, .cursor-pointer');
                links.forEach(link => {
                    link.addEventListener('mouseenter', function() {
                        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                        cursor.style.backgroundColor = 'rgba(45, 212, 191, 0.2)';
                    });
                    
                    link.addEventListener('mouseleave', function() {
                        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                        cursor.style.backgroundColor = 'rgba(45, 212, 191, 0.5)';
                    });
                });
            }
        });

                document.addEventListener('DOMContentLoaded', function() {
            new Typed('#typed-text', {
                strings: ['Graphic Designer', 'Logo Designer', 'UI/UX Expert', 'Visual Creator'],
                typeSpeed: 50,
                backSpeed: 30,
                backDelay: 1500,
                startDelay: 500,
                loop: true
            });
        });

         document.addEventListener('DOMContentLoaded', function() {
            const floatingElements = document.querySelectorAll('.floating-element');
            
            floatingElements.forEach((element, index) => {
                gsap.to(element, {
                    x: `random(-20, 20)`,
                    y: `random(-20, 20)`,
                    duration: `random(3, 6)`,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                    delay: index * 0.2
                });
            });
        });


                document.addEventListener('DOMContentLoaded', function() {
            gsap.from('.hero-title', {
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 0.2,
                onComplete: function() {
                    gsap.to('.hero-title', { opacity: 1 });
                }
            });
            
            gsap.from('.hero-subtitle', {
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 0.4,
                onComplete: function() {
                    gsap.to('.hero-subtitle', { opacity: 1 });
                }
            });
            
            gsap.from('.hero-text', {
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 0.6,
                onComplete: function() {
                    gsap.to('.hero-text', { opacity: 1 });
                }
            });
            
            gsap.from('.hero-buttons', {
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 0.8,
                onComplete: function() {
                    gsap.to('.hero-buttons', { opacity: 1 });
                }
            });
            
            gsap.from('.hero-image', {
                opacity: 0,
                x: 50,
                duration: 1,
                delay: 0.6,
                onComplete: function() {
                    gsap.to('.hero-image', { opacity: 1 });
                }
            });
        });


document.addEventListener('DOMContentLoaded', function() {
            gsap.registerPlugin(ScrollTrigger);
            
            // About Section Animations
            gsap.from('.about-title', {
                scrollTrigger: {
                    trigger: '.about-title',
                    start: 'top 80%'
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                onComplete: function() {
                    gsap.to('.about-title', { opacity: 1 });
                }
            });
            
            gsap.from('.about-line', {
                scrollTrigger: {
                    trigger: '.about-line',
                    start: 'top 80%'
                },
                opacity: 0,
                width: 0,
                duration: 0.8,
                delay: 0.2,
                onComplete: function() {
                    gsap.to('.about-line', { opacity: 1 });
                }
            });
            
            gsap.from('.about-image', {
                scrollTrigger: {
                    trigger: '.about-image',
                    start: 'top 80%'
                },
                opacity: 0,
                x: -50,
                duration: 0.8,
                delay: 0.4,
                onComplete: function() {
                    gsap.to('.about-image', { opacity: 1 });
                }
            });
            
            gsap.from('.about-text-1', {
                scrollTrigger: {
                    trigger: '.about-text-1',
                    start: 'top 80%'
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 0.4,
                onComplete: function() {
                    gsap.to('.about-text-1', { opacity: 1 });
                }
            });
            
            gsap.from('.about-text-2', {
                scrollTrigger: {
                    trigger: '.about-text-2',
                    start: 'top 80%'
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 0.6,
                onComplete: function() {
                    gsap.to('.about-text-2', { opacity: 1 });
                }
            });
            
            gsap.from('.about-tools-title', {
                scrollTrigger: {
                    trigger: '.about-tools-title',
                    start: 'top 80%'
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 0.8,
                onComplete: function() {
                    gsap.to('.about-tools-title', { opacity: 1 });
                }
            });
            
            gsap.from('.about-tools', {
                scrollTrigger: {
                    trigger: '.about-tools',
                    start: 'top 80%'
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 1,
                onComplete: function() {
                    gsap.to('.about-tools', { opacity: 1 });
                }
            });
            
            gsap.from('.about-cta', {
                scrollTrigger: {
                    trigger: '.about-cta',
                    start: 'top 80%'
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 1.2,
                onComplete: function() {
                    gsap.to('.about-cta', { opacity: 1 });
                }
            });
            
            // Skills Section Animations
            gsap.from('.skills-title', {
                scrollTrigger: {
                    trigger: '.skills-title',
                    start: 'top 80%'
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                onComplete: function() {
                    gsap.to('.skills-title', { opacity: 1 });
                }
            });
            
            gsap.from('.skills-line', {
                scrollTrigger: {
                    trigger: '.skills-line',
                    start: 'top 80%'
                },
                opacity: 0,
                width: 0,
                duration: 0.8,
                delay: 0.2,
                onComplete: function() {
                    gsap.to('.skills-line', { opacity: 1 });
                }
            });
            
            gsap.from('.skills-subtitle', {
                scrollTrigger: {
                    trigger: '.skills-subtitle',
                    start: 'top 80%'
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 0.4,
                onComplete: function() {
                    gsap.to('.skills-subtitle', { opacity: 1 });
                }
            });
            
            gsap.from('.skill-card', {
                scrollTrigger: {
                    trigger: '.skills-grid',
                    start: 'top 80%'
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                stagger: 0.2,
                onComplete: function() {
                    document.querySelectorAll('.skill-card').forEach(card => {
                        card.style.opacity = 1;
                    });
                    
                    // Animate progress bars
                    document.querySelectorAll('.progress-fill').forEach(fill => {
                        const width = fill.getAttribute('data-width');
                        gsap.to(fill, {
                            width: width,
                            duration: 1.5,
                            ease: 'power2.out',
                            delay: 0.5
                        });
                    });
                }
            });
            
            // Projects Section Animations
            gsap.from('.projects-title', {
                scrollTrigger: {
                    trigger: '.projects-title',
                    start: 'top 80%'
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                onComplete: function() {
                    gsap.to('.projects-title', { opacity: 1 });
                }
            });
            
            gsap.from('.projects-line', {
                scrollTrigger: {
                    trigger: '.projects-line',
                    start: 'top 80%'
                },
                opacity: 0,
                width: 0,
                duration: 0.8,
                delay: 0.2,
                onComplete: function() {
                    gsap.to('.projects-line', { opacity: 1 });
                }
            });
            
            gsap.from('.projects-subtitle', {
                scrollTrigger: {
                    trigger: '.projects-subtitle',
                    start: 'top 80%'
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 0.4,
                onComplete: function() {
                    gsap.to('.projects-subtitle', { opacity: 1 });
                }
            });
            
            gsap.from('.projects-filter', {
                scrollTrigger: {
                    trigger: '.projects-filter',
                    start: 'top 80%'
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 0.6,
                onComplete: function() {
                    gsap.to('.projects-filter', { opacity: 1 });
                }
            });
            
            gsap.from('.project-card', {
                scrollTrigger: {
                    trigger: '.projects-grid',
                    start: 'top 80%'
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                stagger: 0.2,
                onComplete: function() {
                    document.querySelectorAll('.project-card').forEach(card => {
                        card.style.opacity = 1;
                    });
                }
            });
            
            gsap.from('.projects-more', {
                scrollTrigger: {
                    trigger: '.projects-more',
                    start: 'top 90%'
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 0.2,
                onComplete: function() {
                    gsap.to('.projects-more', { opacity: 1 });
                }
            });
            
            // Resume Section Animations
            gsap.from('.resume-title', {
                scrollTrigger: {
                    trigger: '.resume-title',
                    start: 'top 80%'
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                onComplete: function() {
                    gsap.to('.resume-title', { opacity: 1 });
                }
            });
            
            gsap.from('.resume-line', {
                scrollTrigger: {
                    trigger: '.resume-line',
                    start: 'top 80%'
                },
                opacity: 0,
                width: 0,
                duration: 0.8,
                delay: 0.2,
                onComplete: function() {
                    gsap.to('.resume-line', { opacity: 1 });
                }
            });
            
            gsap.from('.resume-subtitle', {
                scrollTrigger: {
                    trigger: '.resume-subtitle',
                    start: 'top 80%'
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 0.4,
                onComplete: function() {
                    gsap.to('.resume-subtitle', { opacity: 1 });
                }
            });
            
            gsap.from('.resume-experience-title', {
                scrollTrigger: {
                    trigger: '.resume-experience-title',
                    start: 'top 80%'
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 0.6,
                onComplete: function() {
                    gsap.to('.resume-experience-title', { opacity: 1 });
                }
            });
            
            gsap.from('.resume-item-1', {
                scrollTrigger: {
                    trigger: '.resume-item-1',
                    start: 'top 80%'
                },
                opacity: 0,
                x: -30,
                duration: 0.8,
                delay: 0.8,
                onComplete: function() {
                    gsap.to('.resume-item-1', { opacity: 1 });
                }
            });
            
            gsap.from('.resume-item-2', {
                scrollTrigger: {
                    trigger: '.resume-item-2',
                    start: 'top 80%'
                },
                opacity: 0,
                x: -30,
                duration: 0.8,
                delay: 1,
                onComplete: function() {
                    gsap.to('.resume-item-2', { opacity: 1 });
                }
            });
            
            gsap.from('.resume-item-3', {
                scrollTrigger: {
                    trigger: '.resume-item-3',
                    start: 'top 80%'
                },
                opacity: 0,
                x: -30,
                duration: 0.8,
                delay: 1.2,
                onComplete: function() {
                    gsap.to('.resume-item-3', { opacity: 1 });
                }
            });
            
            gsap.from('.resume-education-title', {
                scrollTrigger: {
                    trigger: '.resume-education-title',
                    start: 'top 80%'
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 0.6,
                onComplete: function() {
                    gsap.to('.resume-education-title', { opacity: 1 });
                }
            });
            
            gsap.from('.resume-edu-1', {
                scrollTrigger: {
                    trigger: '.resume-edu-1',
                    start: 'top 80%'
                },
                opacity: 0,
                x: -30,
                duration: 0.8,
                delay: 0.8,
                onComplete: function() {
                    gsap.to('.resume-edu-1', { opacity: 1 });
                }
            });
            
            gsap.from('.resume-edu-2', {
                scrollTrigger: {
                    trigger: '.resume-edu-2',
                    start: 'top 80%'
                },
                opacity: 0,
                x: -30,
                duration: 0.8,
                delay: 1,
                onComplete: function() {
                    gsap.to('.resume-edu-2', { opacity: 1 });
                }
            });
            
            gsap.from('.resume-certifications-title', {
                scrollTrigger: {
                    trigger: '.resume-certifications-title',
                    start: 'top 80%'
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 0.6,
                onComplete: function() {
                    gsap.to('.resume-certifications-title', { opacity: 1 });
                }
            });
            
            gsap.from('.resume-cert-1', {
                scrollTrigger: {
                    trigger: '.resume-cert-1',
                    start: 'top 80%'
                },
                opacity: 0,
                x: -30,
                duration: 0.8,
                delay: 0.8,
                onComplete: function() {
                    gsap.to('.resume-cert-1', { opacity: 1 });
                }
            });
            
            gsap.from('.resume-cert-2', {
                scrollTrigger: {
                    trigger: '.resume-cert-2',
                    start: 'top 80%'
                },
                opacity: 0,
                x: -30,
                duration: 0.8,
                delay: 1,
                onComplete: function() {
                    gsap.to('.resume-cert-2', { opacity: 1 });
                }
            });
            
            gsap.from('.resume-download', {
                scrollTrigger: {
                    trigger: '.resume-download',
                    start: 'top 90%'
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 0.2,
                onComplete: function() {
                    gsap.to('.resume-download', { opacity: 1 });
                }
            });
            
            // Contact Section Animations
            gsap.from('.contact-title', {
                scrollTrigger: {
                    trigger: '.contact-title',
                    start: 'top 80%'
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                onComplete: function() {
                    gsap.to('.contact-title', { opacity: 1 });
                }
            });
            
            gsap.from('.contact-line', {
                scrollTrigger: {
                    trigger: '.contact-line',
                    start: 'top 80%'
                },
                opacity: 0,
                width: 0,
                duration: 0.8,
                delay: 0.2,
                onComplete: function() {
                    gsap.to('.contact-line', { opacity: 1 });
                }
            });
            
            gsap.from('.contact-subtitle', {
                scrollTrigger: {
                    trigger: '.contact-subtitle',
                    start: 'top 80%'
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 0.4,
                onComplete: function() {
                    gsap.to('.contact-subtitle', { opacity: 1 });
                }
            });
            
            gsap.from('.contact-form-container', {
                scrollTrigger: {
                    trigger: '.contact-form-container',
                    start: 'top 80%'
                },
                opacity: 0,
                x: -50,
                duration: 0.8,
                delay: 0.6,
                onComplete: function() {
                    gsap.to('.contact-form-container', { opacity: 1 });
                }
            });
            
            gsap.from('.contact-info', {
                scrollTrigger: {
                    trigger: '.contact-info',
                    start: 'top 80%'
                },
                opacity: 0,
                x: 50,
                duration: 0.8,
                delay: 0.8,
                onComplete: function() {
                    gsap.to('.contact-info', { opacity: 1 });
                }
            });
        });



        document.addEventListener('DOMContentLoaded', function() {
            const filterButtons = document.querySelectorAll('.filter-btn');
            const projectCards = document.querySelectorAll('.project-card');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Update active button
                    filterButtons.forEach(btn => btn.classList.remove('active', 'bg-primary', 'text-white'));
                    this.classList.add('active', 'bg-primary', 'text-white');
                    
                    const filter = this.getAttribute('data-filter');
                    
                    // Filter projects
                    projectCards.forEach(card => {
                        if (filter === 'all' || card.getAttribute('data-category') === filter) {
                            gsap.to(card, {
                                opacity: 1,
                                scale: 1,
                                duration: 0.4,
                                display: 'block'
                            });
                        } else {
                            gsap.to(card, {
                                opacity: 0,
                                scale: 0.8,
                                duration: 0.4,
                                display: 'none'
                            });
                        }
                    });
                });
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
            const contactForm = document.getElementById('contact-form');
            const successModal = document.getElementById('success-modal');
            const closeModal = document.getElementById('close-modal');
            
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Simulate form submission
                setTimeout(function() {
                    successModal.classList.remove('hidden');
                    contactForm.reset();
                }, 1000);
            });
            
            closeModal.addEventListener('click', function() {
                successModal.classList.add('hidden');
            });
            
            // Close modal when clicking outside
            successModal.addEventListener('click', function(e) {
                if (e.target === successModal) {
                    successModal.classList.add('hidden');
                }
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
            const downloadButton = document.getElementById('download-resume');
            
            downloadButton.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Create a dummy PDF file and trigger download
                const link = document.createElement('a');
                link.href = '#'; // In a real scenario, this would be the path to the resume PDF
                link.download = 'asset/resume.jpg';
                link.click();
            });
        });

        const toggleBtn = document.getElementById('mode-toggle');

  // Check if user has saved preference
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    toggleBtn.textContent = '🌙';
  }

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    toggleBtn.textContent = isDark ? '🌙' : '☀️';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });


   const topBtn = document.getElementById("topBtn");
    window.onscroll = function() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topBtn.style.display = "block";
      } else {
        topBtn.style.display = "none";
      }
    };

    // Jab button click ho to top par le jao
    topBtn.addEventListener("click", function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });