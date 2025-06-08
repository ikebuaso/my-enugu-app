 document.addEventListener('DOMContentLoaded', () => {
            // --- Bottom Nav Interaction ---
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(item => {
                item.addEventListener('click', (e) => {
                    // Prevent page jump for anchor tags
                    e.preventDefault(); 
                    navItems.forEach(nav => nav.classList.remove('active'));
                    item.classList.add('active');
                });
            });

            // --- Sidebar Navigation Interaction ---
            const menuIcon = document.getElementById('menu-icon');
            const sidebar = document.getElementById('sidebar');
            const sidebarOverlay = document.getElementById('sidebar-overlay');

            function toggleSidebar() {
                sidebar.classList.toggle('active');
                sidebarOverlay.classList.toggle('active');
            }

            // Open sidebar when menu icon is clicked
            if(menuIcon) {
                menuIcon.addEventListener('click', toggleSidebar);
            }

            // Close sidebar when the overlay is clicked
            if(sidebarOverlay) {
                sidebarOverlay.addEventListener('click', toggleSidebar);
            }
        });