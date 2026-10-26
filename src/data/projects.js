/**
 * Projects rendered as a vertical timeline (newest / featured first in UI sort).
 * Cookieshift is full solo ownership as confirmed by Sathiya.
 */

export const projects = [
  {
    id: 'cookieshift',
    title: 'Cookieshift',
    tagline: 'Cookie consent platform — full product ownership',
    featured: true,
    category: 'Product',
    categories: ['Product', 'SEO', 'React'],
    year: '2026–Present',
    status: 'Live',
    overview:
      'Cookieshift is a cookie consent management platform. I handle the product end to end — server, development, design, SEO, marketing, and client support.',
    problem:
      'Websites need reliable cookie scanning, customizable consent banners, consent logs, and blocking without heavy operational overhead.',
    contribution:
      'Single-handed ownership of the full stack: server setup and maintenance, application development, UI/UX design, SEO and marketing, and ongoing client support.',
    implementation:
      'Server infrastructure, application development, consent banner and scanning workflows, WordPress and Joomla integrations, and production operations.',
    decisions:
      'Owned the product as a complete system — from infrastructure to client-facing support — so shipping and iteration stay aligned.',
    challenges:
      'Balancing product development with server reliability, SEO visibility, and direct client support as a solo operator.',
    outcome:
      'Live platform at cookieshift.com serving cookie consent and related workflows.',
    stack: ['Server', 'Development', 'Design', 'SEO', 'Marketing', 'Client support'],
    liveUrl: 'https://cookieshift.com/',
    repoUrl: null,
    image: null,
    highlights: [
      'Full solo ownership (server → support)',
      'Cookie scanning & consent banners',
      'Consent logs and cookie blocking',
      'WordPress & Joomla integrations',
    ],
  },
  {
    id: 'seo-agent',
    title: 'SEO Agent',
    tagline: 'React-based SEO tooling',
    featured: true,
    category: 'React',
    categories: ['React', 'SEO'],
    year: '2024–Present',
    status: 'Live',
    overview:
      'A React-based SEO Agent built to support practical SEO and development workflows and reduce friction in common analysis tasks.',
    problem:
      'SEO work often involves repetitive checks and scattered tools. The goal was a focused assistant for structured SEO workflows.',
    contribution:
      'Designed and implemented the application as a React project — UI architecture, components, and supported workflows.',
    implementation:
      'Built with React and modern frontend practices using a modular component structure.',
    decisions:
      'Prioritized a clear, developer-friendly interface so features can grow without rewriting the core shell.',
    challenges:
      'Keeping automation useful and transparent without over-claiming capability.',
    outcome: null,
    stack: ['React', 'JavaScript', 'Vite', 'CSS'],
    liveUrl: 'https://seo-agent.cookieshift.com/',
    repoUrl: null,
    image: null,
    highlights: [
      'React product architecture',
      'SEO-oriented workflows',
      'Developer-focused UI',
    ],
  },
  {
    id: 'hermes-automation',
    title: 'Server AI bot automation',
    tagline: 'Hermes + LLM for theme & server ops',
    featured: true,
    category: 'Automation',
    categories: ['Automation'],
    year: '2025–Present',
    status: 'Internal / production use',
    overview:
      'Automation of server handling, theme updates, and maintenance using Hermes and LLM-based bots — reducing repetitive operational work across theme and server workflows.',
    problem:
      'Manual theme updates and server maintenance at catalog scale are repetitive and error-prone.',
    contribution:
      'Designed and implemented automation that uses Hermes and LLM capabilities to assist with server handling and theme update/maintenance workflows.',
    implementation:
      'Hermes-based automation integrated with theme update and server maintenance processes.',
    decisions:
      'Automate high-frequency operational steps first so consistency improves without removing human oversight where it matters.',
    challenges:
      'Keeping automated theme and server actions safe and reviewable on production systems.',
    outcome: null,
    stack: ['Hermes', 'LLM automation', 'Server ops', 'Theme maintenance'],
    liveUrl: null,
    repoUrl: null,
    image: null,
    highlights: [
      'Server handling automation',
      'Theme update & maintenance bots',
      'Hermes + LLM workflows',
    ],
  },
  {
    id: 'zozo-portfolio',
    title: 'Zozo Portfolio',
    tagline: 'Elementor portfolio plugin on WordPress.org',
    featured: true,
    category: 'WordPress',
    categories: ['WordPress'],
    year: '2025–Present',
    status: 'Published on WordPress.org',
    overview:
      'A portfolio plugin for Elementor with grid, masonry and slider layouts and AJAX-filterable galleries. Built for ZozoThemes and published on WordPress.org.',
    problem:
      'Elementor users needed a lightweight way to present portfolio work with filtering and responsive layouts.',
    contribution:
      'Created and maintained the plugin — custom post types, settings, display logic, and Elementor integration.',
    implementation:
      'WordPress plugin architecture with CPTs, metadata, admin settings, Elementor widgets, and AJAX filtering.',
    decisions:
      'Kept the plugin focused on portfolio presentation rather than unrelated features.',
    challenges:
      'Compatibility across themes and Elementor setups while keeping admin UX clear.',
    outcome:
      'Published on WordPress.org with AJAX filtering, RTL support, and custom fields.',
    stack: ['PHP', 'WordPress', 'Elementor', 'JavaScript', 'CSS'],
    liveUrl: 'https://wordpress.org/plugins/zozo-portfolio/',
    repoUrl: null,
    image: null,
    highlights: [
      'Published on WordPress.org',
      'Grid, masonry & slider layouts',
      'AJAX filtering & infinite scroll',
      'RTL support',
    ],
  },
  {
    id: 'zozo-nest',
    title: 'Zozo Nest',
    tagline: 'Real-estate plugin on WordPress.org',
    featured: true,
    category: 'WordPress',
    categories: ['WordPress'],
    year: '2026',
    status: 'Published on WordPress.org',
    overview:
      'A lightweight real-estate plugin for property listings, agent profiles, location search and maps, built for Elementor and published on WordPress.org.',
    problem:
      'Real-estate sites needed structured content types beyond generic posts without a heavy suite.',
    contribution:
      'Built and maintained plugin functionality for real-estate content modeling and frontend presentation.',
    implementation:
      'Custom post types for properties and agents, metadata, admin options, Elementor presentation.',
    decisions:
      'Structured data and admin UX around real-estate needs.',
    challenges:
      'Flexibility across theme layouts with a coherent default experience.',
    outcome: 'Published on WordPress.org.',
    stack: ['PHP', 'WordPress', 'Elementor', 'JavaScript', 'CSS'],
    liveUrl: 'https://wordpress.org/plugins/zozonest/',
    repoUrl: null,
    image: null,
    highlights: [
      'Published on WordPress.org',
      'Property & agent listings',
      'Search filters & maps',
      'JSON import/export',
    ],
  },
  {
    id: 'theme-maintenance',
    title: 'ZozoThemes catalog maintenance',
    tagline: '140+ themes — updates, bugs, reliability',
    featured: false,
    category: 'WordPress',
    categories: ['WordPress'],
    year: '2023–Present',
    status: 'Ongoing',
    overview:
      'Ongoing development and maintenance of 140+ WordPress themes — updates, compatibility, bug fixes, and consistency across the ZozoThemes catalog.',
    problem:
      'A large theme catalog needs disciplined maintenance as WordPress, PHP, and plugins evolve.',
    contribution:
      'Regular maintenance, issue investigation, bug fixes, compatibility work, and Git/GitLab workflows across many theme packages.',
    implementation:
      'Theme structure, options frameworks, Elementor-related options, frontend layouts, release processes.',
    decisions:
      'Stability and consistent patterns so fixes apply systematically.',
    challenges:
      'Scale across many themes without introducing regressions.',
    outcome:
      'Sustained reliability and update cadence for a large commercial catalog.',
    stack: ['PHP', 'WordPress', 'Git / GitLab', 'CSS', 'JavaScript', 'Elementor'],
    liveUrl: 'https://zozothemes.com/',
    repoUrl: null,
    image: null,
    highlights: [
      '140+ themes maintained',
      'Bug fixes & compatibility',
      'Elementor-related options',
      'Git-based release workflow',
    ],
  },
  {
    id: 'elementor-addons',
    title: 'Custom Elementor addons & widgets',
    tagline: 'Reusable Elementor building blocks',
    featured: false,
    category: 'WordPress',
    categories: ['WordPress'],
    year: '2023–Present',
    status: 'Product & project work',
    overview:
      'Custom Elementor widgets and addons for layouts, portfolio carousels, CPT integrations, and theme-aligned components.',
    problem:
      'Default Elementor widgets were not enough for product themes needing portfolio carousels and CPT-driven sections.',
    contribution:
      'Designed and implemented custom widgets, carousel interactions, and Elementor–theme–CPT integrations.',
    implementation:
      'Elementor widget API, PHP registration, frontend scripts, theme-aligned styling.',
    decisions:
      'Reusable, configurable widgets over one-off page-builder hacks.',
    challenges:
      'Elementor version compatibility and performance with multiple dynamic widgets.',
    outcome:
      'Reusable components used across ZozoThemes products and client customizations.',
    stack: ['PHP', 'JavaScript', 'Elementor API', 'CSS', 'Swiper'],
    liveUrl: null,
    repoUrl: null,
    image: null,
    highlights: [
      'Custom Elementor widgets',
      'Portfolio carousels',
      'CPT integrations',
      'Theme settings integration',
    ],
  },
  {
    id: 'client-maintenance',
    title: 'Client website maintenance',
    tagline: 'Production support, fixes, customizations',
    featured: false,
    category: 'WordPress',
    categories: ['WordPress'],
    year: '2023–Present',
    status: 'Ongoing',
    overview:
      'Engineering work for production WordPress sites — diagnosing issues, resolving bugs, implementing customizations, and supporting clients.',
    problem:
      'Live sites need ongoing troubleshooting, updates, and feature requests under production constraints.',
    contribution:
      'Diagnosed production issues, applied fixes, handled customizations, and provided technical support.',
    implementation:
      'WordPress debugging, theme/plugin updates, compatibility work, targeted PHP/JS/CSS changes.',
    decisions:
      'Stable, reversible fixes and clear communication over speculative refactors on live sites.',
    challenges:
      'Production constraints and time-sensitive issue resolution.',
    outcome:
      'Reliable ongoing support for production WordPress sites.',
    stack: ['PHP', 'WordPress', 'JavaScript', 'CSS'],
    liveUrl: null,
    repoUrl: null,
    image: null,
    highlights: [
      'Production troubleshooting',
      'Bug fixes & compatibility',
      'Customization requests',
      'Technical support',
    ],
  },
]

export const projectFilters = [
  { id: 'all', label: 'All' },
  { id: 'WordPress', label: 'WordPress' },
  { id: 'Product', label: 'Product' },
  { id: 'React', label: 'React' },
  { id: 'SEO', label: 'SEO' },
  { id: 'Automation', label: 'Automation' },
]
