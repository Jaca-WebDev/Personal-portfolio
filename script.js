(() => {
    'use strict';

    const root = document.documentElement;
    root.classList.add('js');

    const BASE_TITLE = document.title;

    /* ----------------------------------------------------------------------
       Data
       Only verified information belongs here. A field that is empty or absent
       is not rendered. `images` entries: { src, alt, width, height }.
       ---------------------------------------------------------------------- */

    const projects = {
        'mosich': {
            index: '01',
            label: 'Production Commerce',
            title: 'MOSICH',
            subtitle: 'Production E-commerce Platform',
            description: 'A modern production commerce platform for a women’s fashion brand, engineered around product discovery, secure checkout, customer accounts, order management and operational workflows.',
            role: 'Software Engineer / Full-Stack Developer',
            stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Neon', 'Clerk', 'Paystack', 'Vercel'],
            liveUrl: 'https://www.mosichng.com',
            images: [], // TODO: assets/projects/mosich/{storefront,product,checkout}.webp
            highlights: [],
            sections: {
                overview: 'MOSICH is a production e-commerce platform for a women’s fashion brand. It is engineered around product discovery, secure checkout, customer accounts, order management and the operational workflows behind running the store.',
                role: 'Software Engineer / Full-Stack Developer. I designed and developed the production e-commerce platform, and built the customer and administrative functionality described below through to production deployment.',
                engineering: [
                    'Product discovery',
                    'Search',
                    'Collections',
                    'Wishlists',
                    'Authentication',
                    'Role-based access control',
                    'Checkout',
                    'Order management',
                    'Shipping workflows',
                    'Production deployment'
                ]
                // problem / outcome: add only once verified.
            }
        },

        'ecostream': {
            index: '02',
            label: 'Intelligent Computing',
            title: 'EcoStream',
            subtitle: '',
            description: 'A real-time intelligent streaming system combining browser APIs and carbon-intensity data to generate adaptive video-quality recommendations.',
            role: '',
            stack: [],
            liveUrl: '',
            images: [], // TODO: assets/projects/ecostream/
            highlights: [
                { value: '35%', label: 'Energy savings in testing' },
                { value: '12.5 g', label: 'CO₂ reduction per 45-minute session' }
            ],
            sections: {
                overview: 'EcoStream is a real-time intelligent streaming system. It combines browser APIs and carbon-intensity data to generate adaptive video-quality recommendations.',
                engineering: [
                    'Reinforcement learning',
                    'Carbon-aware computing',
                    'Adaptive streaming',
                    'Optimization'
                ],
                outcome: 'Testing demonstrated 35% energy savings and a 12.5 g CO₂ reduction per 45-minute session.'
            }
        },

        'biometric-attendance': {
            index: '03',
            label: 'Application Engineering',
            title: 'Biometric Staff Attendance & Shift Management System',
            subtitle: '',
            description: 'A role-based desktop system for staff attendance and shift management with fingerprint authentication, automated attendance tracking, administrative workflows and reporting.',
            role: '',
            stack: ['Java', 'JDBC', 'MySQL', 'DigitalPersona fingerprint integration'],
            liveUrl: '',
            images: [], // TODO: assets/projects/biometric/
            highlights: [],
            sections: {
                overview: 'A role-based desktop system for staff attendance and shift management, with fingerprint authentication, automated attendance tracking, administrative workflows and reporting.',
                engineering: [
                    'Fingerprint authentication',
                    'Attendance tracking',
                    'Staff management',
                    'Shift management',
                    'Shift-swap workflows',
                    'Reporting',
                    'CSV roster management',
                    'Administrative activity logging',
                    'Administrator dashboard',
                    'Supervisor dashboard',
                    'Staff dashboard'
                ]
            }
        },

        'tooth-fixers': {
            index: '04',
            label: 'Early Application',
            title: 'Tooth Fixers',
            subtitle: 'Dental Clinic System',
            description: 'A dental-clinic application supporting CRUD operations for patient records with a responsive interface for staff access across devices.',
            role: '',
            stack: [], // Technologies not yet verified; do not add.
            liveUrl: '',
            images: [], // TODO: assets/projects/tooth-fixers/
            highlights: [],
            sections: {
                overview: 'A dental-clinic application supporting CRUD operations for patient records, with a responsive interface for staff access across devices.'
            }
        }
    };

    const projectOrder = ['mosich', 'ecostream', 'biometric-attendance', 'tooth-fixers'];

    // Add entries only with verified details:
    // { title, issuer, date, url, credentialId, skills: [] }
    const certifications = [];

    /* ----------------------------------------------------------------------
       Helpers
       ---------------------------------------------------------------------- */

    function el(tag, options = {}, ...children) {
        const node = document.createElement(tag);
        if (options.className) node.className = options.className;
        if (options.text != null) node.textContent = options.text;
        if (options.attrs) {
            Object.entries(options.attrs).forEach(([key, value]) => node.setAttribute(key, value));
        }
        children.flat(Infinity).forEach((child) => {
            if (child) node.append(child);
        });
        return node;
    }

    const $ = (selector, scope = document) => scope.querySelector(selector);
    const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

    /* ----------------------------------------------------------------------
       Header, mobile menu, active link
       ---------------------------------------------------------------------- */

    const header = $('.site-header');
    const menuToggle = $('.nav-toggle');
    const primaryNav = $('#primary-nav');
    const mobileQuery = window.matchMedia('(max-width: 899.98px)');
    const pageRegions = [$('.skip-link'), $('#main'), $('.site-footer')];

    function updateHeader() {
        header.classList.toggle('is-scrolled', window.scrollY > 24);
    }
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();

    function setMenu(open, { restoreFocus = false } = {}) {
        const isOpen = open && mobileQuery.matches;
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.querySelector('.sr-only').textContent = isOpen ? 'Close menu' : 'Menu';
        primaryNav.classList.toggle('is-open', isOpen);
        root.classList.toggle('menu-open', isOpen);
        pageRegions.forEach((region) => {
            if (region) region.toggleAttribute('inert', isOpen);
        });
        if (!isOpen && restoreFocus) menuToggle.focus();
    }

    menuToggle.addEventListener('click', () => {
        setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
    });

    primaryNav.addEventListener('click', (event) => {
        if (event.target.closest('a')) setMenu(false);
    });

    document.addEventListener('keydown', (event) => {
        if (menuToggle.getAttribute('aria-expanded') !== 'true') return;

        if (event.key === 'Escape') {
            setMenu(false, { restoreFocus: true });
            return;
        }

        if (event.key === 'Tab') {
            const focusable = [$('.logo'), menuToggle, ...$$('a', primaryNav)];
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        }
    });

    mobileQuery.addEventListener('change', () => setMenu(false));

    // Active section link
    const navLinks = $$('.nav-list .nav-link[href^="#"]').filter((link) => !link.classList.contains('nav-link-cta'));
    const sectionMap = new Map();
    navLinks.forEach((link) => {
        const section = document.getElementById(link.getAttribute('href').slice(1));
        if (section) sectionMap.set(section, link);
    });
    // The data analytics band belongs to the Skills destination.
    const dataSection = document.getElementById('data');
    const skillsLink = navLinks.find((link) => link.getAttribute('href') === '#skills');
    if (dataSection && skillsLink) sectionMap.set(dataSection, skillsLink);

    function setActive(link) {
        navLinks.forEach((item) => {
            const active = item === link;
            item.classList.toggle('is-active', active);
            if (active) item.setAttribute('aria-current', 'true');
            else item.removeAttribute('aria-current');
        });
    }

    if ('IntersectionObserver' in window) {
        const activeObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) setActive(sectionMap.get(entry.target));
            });
        }, { rootMargin: '-45% 0px -50% 0px' });
        sectionMap.forEach((_, section) => activeObserver.observe(section));
    }

    /* ----------------------------------------------------------------------
       Scroll reveal
       ---------------------------------------------------------------------- */

    const revealItems = $$('.reveal');
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
        revealItems.forEach((item) => revealObserver.observe(item));
    } else {
        revealItems.forEach((item) => item.classList.add('is-visible'));
    }

    // Footer year
    $$('[data-year]').forEach((node) => { node.textContent = String(new Date().getFullYear()); });

    /* ----------------------------------------------------------------------
       Certifications (renders nothing until verified entries exist)
       ---------------------------------------------------------------------- */

    function renderCertifications(list) {
        if (!list.length) return;
        const contact = document.getElementById('contact');
        if (!contact) return;

        const cards = list.map((cert) => el('li', { className: 'cert' },
            el('h3', { text: cert.title }),
            cert.issuer && el('p', { text: cert.issuer }),
            cert.date && el('p', { className: 'cert-meta', text: cert.date }),
            cert.credentialId && el('p', { className: 'cert-meta', text: `Credential ID: ${cert.credentialId}` }),
            cert.skills && cert.skills.length && el('ul', { className: 'tech-list', attrs: { 'aria-label': 'Associated skills' } },
                cert.skills.map((skill) => el('li', { className: 'tech-pill', text: skill }))),
            cert.url && el('a', {
                className: 'text-link',
                text: 'View credential',
                attrs: { href: cert.url, target: '_blank', rel: 'noopener noreferrer' }
            })
        ));

        const section = el('section', { className: 'section section-dark', attrs: { id: 'certifications', 'aria-labelledby': 'certifications-title' } },
            el('div', { className: 'container' },
                el('header', { className: 'section-head' },
                    el('p', { className: 'eyebrow', text: 'Certifications' }),
                    el('h2', { className: 'section-title', text: 'Verified credentials.', attrs: { id: 'certifications-title' } })),
                el('ul', { className: 'cert-grid' }, cards)));

        contact.before(section);
    }
    renderCertifications(certifications);

    /* ----------------------------------------------------------------------
       Project detail view (hash routed: #project/<slug>)
       ---------------------------------------------------------------------- */

    const dialog = $('#project-dialog');
    const dialogContent = $('#project-content');
    const dialogLabel = $('#project-dialog-label');

    let openSlug = null;
    let canGoBack = false; // true when the detail view was opened from within this page

    const routeSlug = () => {
        const match = window.location.hash.match(/^#project\/([a-z0-9-]+)$/);
        return match ? match[1] : null;
    };

    function placeholderMedia(project) {
        return el('div', { className: 'media-placeholder', attrs: { 'data-pending-asset': project.title, 'aria-hidden': 'true' } },
            el('span', { className: 'ph-title', text: project.title.length > 24 ? project.label : project.title }),
            el('span', { className: 'ph-index', text: project.index }),
            el('span', { className: 'ph-note', text: 'Project imagery to be added' }));
    }

    function imageNode(image) {
        return el('img', {
            attrs: {
                src: image.src,
                alt: image.alt || '',
                width: image.width,
                height: image.height,
                loading: 'lazy',
                decoding: 'async'
            }
        });
    }

    function textBlock(value) {
        if (Array.isArray(value)) {
            return el('ul', { className: 'dp-list' }, value.map((item) => el('li', { text: item })));
        }
        return el('div', { className: 'dp-prose' }, el('p', { text: value }));
    }

    function section(heading, body) {
        return el('section', { className: 'dp-section' }, el('h3', { text: heading }), body);
    }

    function buildProject(slug) {
        const project = projects[slug];
        const container = (...children) => el('div', { className: 'container' }, children);
        const parts = project.sections || {};

        // Header block
        const meta = [];
        if (project.role) meta.push(el('div', {}, el('dt', { text: 'Role' }), el('dd', { text: project.role })));
        if (project.stack.length) meta.push(el('div', {}, el('dt', { text: 'Stack' }), el('dd', { text: project.stack.join(' · ') })));
        if (project.liveUrl) {
            meta.push(el('div', {}, el('dt', { text: 'Live site' }), el('dd', {},
                el('a', {
                    className: 'text-link',
                    text: project.liveUrl.replace(/^https?:\/\/(www\.)?/, ''),
                    attrs: { href: project.liveUrl, target: '_blank', rel: 'noopener noreferrer' }
                }))));
        }

        const stats = project.highlights.length
            ? el('dl', { className: 'dp-stats stat-list' }, project.highlights.map((item) =>
                el('div', { className: 'stat' }, el('dt', { text: item.label }), el('dd', { text: item.value }))))
            : null;

        const hero = el('header', { className: 'dp-hero' }, container(
            el('p', { className: 'project-label', text: `${project.index} / ${project.label}` }),
            el('h2', { className: `dp-title${project.title.length > 20 ? ' is-long' : ''}`, text: project.title, attrs: { id: 'project-dialog-title' } }),
            project.subtitle && el('p', { className: 'dp-subtitle', text: project.subtitle }),
            el('p', { className: 'dp-lede', text: project.description }),
            stats,
            meta.length ? el('dl', { className: 'dp-meta' }, meta) : null));

        const media = el('div', { className: 'dp-media' }, container(
            el('div', { className: 'dp-media-frame' }, project.images[0] ? imageNode(project.images[0]) : placeholderMedia(project))));

        // Body — only verified fields render
        const body = [];
        if (parts.overview) body.push(section('Overview', textBlock(parts.overview)));
        if (parts.problem) body.push(section('Problem', textBlock(parts.problem)));
        if (parts.role) body.push(section('My Role', textBlock(parts.role)));
        if (parts.engineering) body.push(section('Engineering', textBlock(parts.engineering)));
        if (project.stack.length) {
            body.push(section('Technology', el('ul', { className: 'tech-list' }, project.stack.map((item) => el('li', { className: 'tech-pill', text: item })))));
        }
        if (parts.outcome) body.push(section('Outcome', textBlock(parts.outcome)));
        if (project.images.length > 1) {
            body.push(section('Gallery', el('div', { className: 'dp-gallery' }, project.images.slice(1).map((image) => el('figure', {}, imageNode(image))))));
        }
        if (project.liveUrl) {
            body.push(section('Links', el('div', { className: 'dp-links' },
                el('a', {
                    className: 'btn btn-primary',
                    attrs: { href: project.liveUrl, target: '_blank', rel: 'noopener noreferrer' }
                }, 'Visit Live Site ', el('span', { className: 'arrow arrow-out', text: '↗', attrs: { 'aria-hidden': 'true' } }), el('span', { className: 'sr-only', text: ' (opens in a new tab)' })))));
        }

        // Next project
        const nextSlug = projectOrder[(projectOrder.indexOf(slug) + 1) % projectOrder.length];
        const next = projects[nextSlug];
        const nextLink = el('a', { className: 'dp-next-link container', attrs: { href: `#project/${nextSlug}`, 'data-next-project': nextSlug } },
            el('span', {}, el('span', { className: 'dp-next-label', text: 'Next project' }), el('span', { className: 'dp-next-title', text: next.title })),
            el('span', { className: 'arrow', text: '→', attrs: { 'aria-hidden': 'true' } }));

        return [hero, media, el('div', { className: 'dp-body' }, container(body)), el('nav', { className: 'dp-next', attrs: { 'aria-label': 'Next project' } }, nextLink)];
    }

    function renderProject(slug) {
        const project = projects[slug];
        dialogContent.replaceChildren(...buildProject(slug));
        dialogLabel.textContent = `${project.index} / ${project.label}`;
        document.title = `${project.title} | Jesse Charles-Agu`;
        dialog.scrollTop = 0;
        openSlug = slug;
    }

    function openProject(slug) {
        renderProject(slug);
        if (!dialog.open) {
            dialog.showModal();
            root.classList.add('has-dialog');
        }
        dialog.scrollTop = 0;
    }

    function closeProject({ focusCard = true } = {}) {
        const slug = openSlug;
        if (dialog.open) dialog.close();
        root.classList.remove('has-dialog');
        document.title = BASE_TITLE;
        openSlug = null;
        if (focusCard && slug) {
            const card = $(`[data-project-link="${slug}"]`);
            if (card) card.focus({ preventScroll: true });
        }
    }

    function syncRoute() {
        const slug = routeSlug();
        if (slug && projects[slug]) {
            if (!dialog.open) canGoBack = true;
            openProject(slug);
        } else if (dialog.open) {
            closeProject();
        } else if (slug) {
            // Unknown project: fall back to the projects section.
            history.replaceState(null, '', '#projects');
            document.getElementById('projects').scrollIntoView();
        }
    }

    // Close via the in-page controls and the Escape key keeps history consistent.
    function requestClose() {
        if (canGoBack) {
            canGoBack = false;
            history.back();
        } else {
            history.replaceState(null, '', '#projects');
            closeProject({ focusCard: false });
            const projectsSection = document.getElementById('projects');
            projectsSection.scrollIntoView({ behavior: 'auto' });
        }
    }

    dialog.addEventListener('cancel', (event) => {
        event.preventDefault();
        requestClose();
    });

    dialog.addEventListener('click', (event) => {
        if (event.target.closest('[data-dialog-close]')) {
            requestClose();
            return;
        }
        const nextLink = event.target.closest('[data-next-project]');
        if (nextLink) {
            event.preventDefault();
            const slug = nextLink.getAttribute('data-next-project');
            history.replaceState(null, '', `#project/${slug}`);
            renderProject(slug);
        }
    });

    window.addEventListener('hashchange', syncRoute);

    // Deep link on first load: the entry is the project itself, so closing returns to #projects.
    if (routeSlug() && projects[routeSlug()]) {
        canGoBack = false;
        openProject(routeSlug());
    } else {
        syncRoute();
    }
})();
