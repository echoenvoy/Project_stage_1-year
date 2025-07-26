
    // Page Navigation
    document.querySelectorAll('.nav-link, .card-btn, .back-btn').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const page = this.getAttribute('data-page');
        
        // Hide all pages
        /*document.querySelectorAll('#dashboard-page, #products-page, #delivery-page').forEach(page => {
          page.style.display = 'none';
        });*/
        
        // Show selected page
        if (page === 'dashboard') {
          document.getElementById('dashboard-page').style.display = 'block';
        } else if (page === 'products') {
          document.getElementById('products-page').style.display = 'block';
        } else if (page === 'delivery') {
          document.getElementById('delivery-page').style.display = 'block';
        }
        
        // Update active navigation
        document.querySelectorAll('.nav-link').forEach(nav => {
          nav.classList.remove('active');
        });
        
        if (page) {
          const activeNav = document.querySelector(`.nav-link[data-page="${page}"]`);
          if (activeNav) {
            activeNav.classList.add('active');
          }
        }
      });
    });
    
    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      
      if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
      } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
      }
    });
    
    // Status badges
    document.querySelectorAll('.status-badge').forEach(badge => {
      const text = badge.textContent.trim();
      
      if (text === 'Livré') {
        badge.classList.add('delivered');
      } else if (text === 'En cours') {
        badge.classList.add('in-progress');
      } else if (text === 'En attente') {
        badge.classList.add('pending');
      }
    });
    
    // Add CSS for status badges
    const style = document.createElement('style');
    style.textContent = `
      .status-badge {
        display: inline-block;
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-size: 0.85rem;
        font-weight: 500;
      }
      .status-badge.delivered {
        background-color: rgba(16, 185, 129, 0.1);
        color: #10b981;
      }
      .status-badge.in-progress {
        background-color: rgba(245, 158, 11, 0.1);
        color: #f59e0b;
      }
      .status-badge.pending {
        background-color: rgba(59, 130, 246, 0.1);
        color: #3b82f6;
      }
    `;
    document.head.appendChild(style);