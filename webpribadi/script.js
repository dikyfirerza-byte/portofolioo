/**
 * ========================================================
 * DIKY FIRERZA - PERSONAL PORTFOLIO 2026
 * JAVASCRIPT LOGIC (script.js)
 * ========================================================
 */

document.addEventListener("DOMContentLoaded", () => {
    
    /* ========================================================
       1. DATA KEAHLIAN / SKILLS
       CATATAN: Anda dapat mengubah nama, persentase, ikon, 
       atau status "Masih Belajar" langsung pada array di bawah ini!
       ======================================================== */
    const skillsData = [
        {
            name: "Python",
            percentage: 50,
            icon: "fa-brands fa-python",
            status: "50%",
            isLearning: false
        },
        {
            name: "HTML, CSS & JavaScript",
            percentage: 35,
            icon: "fa-brands fa-js",
            status: "Masih Belajar (35%)",
            isLearning: true
        },
        {
            name: "UI / UX Design",
            percentage: 30,
            icon: "fa-solid fa-pen-ruler",
            status: "Masih Belajar (30%)",
            isLearning: true
        },
        {
            name: "Perancangan Basis Data (SQL)",
            percentage: 25,
            icon: "fa-solid fa-database",
            status: "Masih Belajar (25%)",
            isLearning: true
        }
    ];

    /* ========================================================
       2. DATA RECAP PROJECT 2026
       CATATAN: Cukup edit judul, deskripsi, gambar, atau link di array 
       ini tanpa perlu mengubah struktur file HTML!
       ======================================================== */
    const projectsData = [
        {
            id: 1,
            title: "Mini MOBA 2D (Mobile Legends Web)",
            desc: "Game pertempuran 2D dengan sistem AI hero lawan, gelombang minion, turret, dan audio synthesizer.",
            image: "assets/img/project-1.jpg",
            category: "Game Dev",
            tags: ["HTML5", "Canvas", "JavaScript"],
            codeLink: "https://github.com/dikyfirerza-byte"
        },
        {
            id: 2,
            title: "Flappy Bird Web Game",
            desc: "Rekreasi game kasual klasik dengan simulasi fisika gravitasi, deteksi tabrakan pipa, dan skor lokal.",
            image: "assets/img/project-2.jpg",
            category: "Game Dev",
            tags: ["JavaScript", "Canvas", "Web Audio"],
            codeLink: "https://github.com/dikyfirerza-byte"
        },
        {
            id: 3,
            title: "Sistem Autentikasi Login",
            desc: "Tampilan login responsif dengan validasi form cerdas, tema modern, dan integrasi aksesibilitas.",
            image: "assets/img/project-3.jpg",
            category: "Frontend UI",
            tags: ["HTML5", "CSS3 Modern", "A11y"],
            codeLink: "https://github.com/dikyfirerza-byte"
        },
        {
            id: 4,
            title: "Python Data Automation",
            desc: "Skrip otomatisasi pengolahan data dan manipulasi berkas menggunakan bahasa pemrograman Python.",
            image: "assets/img/project-4.jpg",
            category: "Automation",
            tags: ["Python 3", "CLI", "File System"],
            codeLink: "https://github.com/dikyfirerza-byte"
        },
        {
            id: 5,
            title: "Sistem Informasi Akademik",
            desc: "Perancangan sistem informasi terpadu, pemodelan UML, flowchart proses bisnis, dan skema database relasional.",
            image: "assets/img/project-5.jpg",
            category: "System Analysis",
            tags: ["Sistem Informasi", "UML", "Database"],
            codeLink: "https://github.com/dikyfirerza-byte"
        },
        {
            id: 6,
            title: "Personal Portfolio 2026",
            desc: "Website portofolio single-page berkinerja tinggi, responsif, dan siap dideploy langsung ke Vercel.",
            image: "assets/img/project-6.jpg",
            category: "Web Portfolio",
            tags: ["HTML5", "CSS3", "JavaScript"],
            codeLink: "https://github.com/dikyfirerza-byte"
        }
    ];

    /* ========================================================
       3. RENDER KEAHLIAN / SKILLS KE DALAM DOM
       ======================================================== */
    const skillsContainer = document.getElementById("skillsContainer");
    if (skillsContainer) {
        skillsContainer.innerHTML = skillsData.map(skill => `
            <div class="skill-item">
                <div class="skill-header">
                    <span class="skill-name">
                        <i class="${skill.icon}"></i> ${skill.name}
                    </span>
                    <span class="skill-status ${skill.isLearning ? 'learning' : ''}">
                        ${skill.status}
                    </span>
                </div>
                <div class="skill-progress-track">
                    <div class="skill-progress-bar" data-progress="${skill.percentage}"></div>
                </div>
            </div>
        `).join("");
    }

    /* ========================================================
       4. RENDER PROYEK KE DALAM DOM (GRID PROJECT 2026)
       ======================================================== */
    const projectsContainer = document.getElementById("projectsContainer");
    if (projectsContainer) {
        projectsContainer.innerHTML = projectsData.map(proj => `
            <article class="project-card fade-in-section">
                <div class="project-thumb-wrap">
                    <img 
                        src="${proj.image}" 
                        alt="${proj.title}" 
                        class="project-thumb"
                        loading="lazy"
                        onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80';"
                    >
                    <div class="project-overlay">
                        <span class="project-category">${proj.category}</span>
                    </div>
                </div>
                <div class="project-body">
                    <div>
                        <h3 class="project-title">${proj.title}</h3>
                        <p class="project-desc">${proj.desc}</p>
                        <div class="project-tags">
                            ${proj.tags.map(tag => `<span class="tech-badge">${tag}</span>`).join("")}
                        </div>
                    </div>
                    <div class="project-footer">
                        <a href="${proj.codeLink}" target="_blank" rel="noopener noreferrer" class="btn-code">
                            <i class="fa-brands fa-github"></i> Lihat Kode
                        </a>
                        <span style="font-size: 11px; color: var(--text-muted);">2026</span>
                    </div>
                </div>
            </article>
        `).join("");
    }

    /* ========================================================
       5. ANIMASI PROGRESS BAR SAAT SCROLL (INTERSECTION OBSERVER)
       ======================================================== */
    const progressBars = document.querySelectorAll(".skill-progress-bar");
    if ("IntersectionObserver" in window) {
        const skillsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const targetWidth = bar.getAttribute("data-progress") + "%";
                    bar.style.width = targetWidth;
                    observer.unobserve(bar);
                }
            });
        }, { threshold: 0.2 });

        progressBars.forEach(bar => skillsObserver.observe(bar));
    } else {
        // Fallback untuk browser lawas
        progressBars.forEach(bar => {
            bar.style.width = bar.getAttribute("data-progress") + "%";
        });
    }

    /* ========================================================
       6. ANIMASI FADE-IN SAAT SCROLL
       ======================================================== */
    const fadeSections = document.querySelectorAll(".section, .project-card, .info-card");
    fadeSections.forEach(sec => sec.classList.add("fade-in-section"));

    if ("IntersectionObserver" in window) {
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                }
            });
        }, { threshold: 0.1 });

        fadeSections.forEach(sec => fadeObserver.observe(sec));
    } else {
        fadeSections.forEach(sec => sec.classList.add("is-visible"));
    }

    /* ========================================================
       7. NAVBAR SCROLLSPY (Pill Menu Aktif Berubah Mengikuti Scroll)
       ======================================================== */
    const navItems = document.querySelectorAll(".nav-item");
    const sections = [
        { id: "hero", nav: "hero" },
        { id: "about", nav: "hero" },        // Sub-bagian dari Profil
        { id: "experience", nav: "hero" },   // Sub-bagian dari Profil
        { id: "projects", nav: "projects" }, // Bagian Project
        { id: "contact", nav: "contact" }    // Bagian Contact Person
    ];

    function updateActiveNavbar() {
        const scrollPosition = window.scrollY + 200;

        for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i].id);
            if (el && el.offsetTop <= scrollPosition) {
                const targetNav = sections[i].nav;
                navItems.forEach(item => {
                    if (item.getAttribute("data-section") === targetNav) {
                        item.classList.add("active");
                    } else {
                        item.classList.remove("active");
                    }
                });
                break;
            }
        }
    }

    window.addEventListener("scroll", updateActiveNavbar, { passive: true });
    updateActiveNavbar();

    /* ========================================================
       8. HAMBURGER MENU UNTUK TAMPILAN MOBILE (HP)
       ======================================================== */
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const mobileDrawer = document.getElementById("mobileDrawer");

    if (hamburgerBtn && mobileDrawer) {
        hamburgerBtn.addEventListener("click", () => {
            const isOpen = mobileDrawer.classList.toggle("open");
            hamburgerBtn.classList.toggle("active");
            hamburgerBtn.setAttribute("aria-expanded", isOpen);
        });

        // Tutup menu saat link diklik
        document.querySelectorAll(".mobile-nav-item").forEach(link => {
            link.addEventListener("click", () => {
                mobileDrawer.classList.remove("open");
                hamburgerBtn.classList.remove("active");
                hamburgerBtn.setAttribute("aria-expanded", "false");
            });
        });

        // Tutup menu saat area luar diklik
        document.addEventListener("click", (e) => {
            if (!mobileDrawer.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                mobileDrawer.classList.remove("open");
                hamburgerBtn.classList.remove("active");
                hamburgerBtn.setAttribute("aria-expanded", "false");
            }
        });
    }

    console.log("Personal Portfolio Diky Firerza (NIM H1101261071) - Loaded Successfully.");
});

