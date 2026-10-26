/**
 * ============================================================
 * EDIT THIS FILE to update projects and case studies.
 *
 * Rules of thumb:
 *  - Any field set to null (or an empty array) is simply NOT shown,
 *    so never type placeholder text like "TODO" into a live project.
 *  - Add a screenshot: put the image in /public/images/ and set
 *    image: '/images/my-project.png'  (recommended: 1200x675, 16:9).
 *  - Only "featured" projects get the Featured badge — keep it to ~4.
 * ============================================================
 */

export const projects = [
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
      'A portfolio plugin for Elementor that builds grid, masonry and slider layouts with AJAX-filterable galleries. Built for the ZozoThemes ecosystem and published on WordPress.org.',
    problem:
      'Elementor users needed a lightweight, flexible way to present portfolio work with filtering and responsive layouts, without installing a large add-on suite.',
    contribution:
      'Created and maintained the plugin — custom post types, settings, display logic, and integration with theme and Elementor workflows.',
    implementation:
      'WordPress plugin architecture with custom post types, metadata, admin settings, Elementor widgets, and AJAX-powered filtering on the frontend.',
    decisions:
      'Kept the plugin focused on portfolio presentation and configuration rather than overloading it with unrelated features.',
    challenges:
      'Ensuring compatibility across multiple themes and Elementor setups while keeping the admin experience clear.',
    outcome:
      'Published on WordPress.org (v1.0, December 2025) with AJAX filtering, RTL language support, and custom fields for portfolio items.',
    stack: ['PHP', 'WordPress', 'Elementor', 'JavaScript', 'CSS'],
    liveUrl: 'https://wordpress.org/plugins/zozo-portfolio/',
    repoUrl: null,
    image: null,
    highlights: [
      'Published on WordPress.org',
      'Grid, masonry and slider layouts',
      'AJAX filtering, load more and infinite scroll',
      'RTL language support',
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
      'A lightweight real-estate plugin for property listings, agent profiles, location-based search and Google Maps integration, built to work with Elementor. Published on WordPress.org.',
    problem:
      'Real-estate sites needed structured content types and display patterns beyond generic posts, without the weight of a large real-estate suite.',
    contribution:
      'Built and maintained plugin functionality for real-estate content modeling and frontend presentation.',
    implementation:
      'Custom post types for properties and agents, metadata, admin options, and Elementor-based frontend presentation.',
    decisions:
      'Structured data and admin UX around real-estate content needs rather than forcing a generic post type into an unsuitable shape.',
    challenges:
      'Balancing flexibility for different theme layouts with a coherent default experience.',
    outcome: 'Published on WordPress.org (v1.0.0, July 2026).',
    stack: ['PHP', 'WordPress', 'Elementor', 'JavaScript', 'CSS'],
    liveUrl: 'https://wordpress.org/plugins/zozonest/',
    repoUrl: null,
    image: null,
    highlights: [
      'Published on WordPress.org',
      'Property and agent listings',
      'Search filters and Google Maps integration',
      'JSON import/export for plugin settings',
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
      'A React-based SEO Agent built to support practical SEO and development workflows. Designed to reduce friction in common SEO analysis and content-support tasks.',
    problem:
      'SEO work often involves repetitive checks, scattered tools, and manual analysis. The goal was a focused assistant that helps structure and speed up parts of that workflow.',
    contribution:
      'Designed and implemented the application as a React project — UI architecture, component structure, and the workflows the tool supports.',
    implementation:
      'Built with React and modern frontend practices, using a component-based structure.',
    decisions:
      'Prioritized a clear, developer-friendly interface and modular structure so features can be added without rewriting the core shell.',
    challenges:
      'Balancing useful automation with accuracy and transparency — the tool should assist without over-claiming capability.',
    outcome: null,
    stack: ['React', 'JavaScript', 'Vite', 'CSS'],
    liveUrl: 'https://seo-agent.cookieshift.com/',
    repoUrl: null,
    image: null,
    highlights: [
      'React-based product architecture',
      'SEO-oriented workflow support',
      'Developer-focused UI',
    ],
  },
  {
    id: 'cookieshift',
    title: 'Cookieshift',
    tagline: 'Cookie consent management platform',
    featured: true,
    category: 'SEO',
    categories: ['SEO', 'React'],
    year: '2026–Present',
    status: 'Live',
    overview:
      'Cookieshift is a cookie consent management platform that helps websites scan and categorize cookies, customize consent banners, and manage consent records. I contributed development and SEO-related work to the product.',
    problem:
      'Websites need clear, maintainable consent experiences and related tooling without heavy operational overhead.',
    contribution:
      'Development and SEO-related contributions supporting the product and its workflows.',
    implementation: null,
    decisions: null,
    challenges: null,
    outcome: null,
    stack: [],
    liveUrl: 'https://cookieshift.com/',
    repoUrl: null,
    image: null,
    highlights: [
      'Cookie scanning and consent banner customization',
      'Consent logs and cookie blocking',
      'Integrations for WordPress and Joomla',
    ],
  },
  {
    id: 'theme-maintenance',
    title: 'ZozoThemes Catalog Maintenance',
    tagline: '140+ themes — updates, bugs, reliability',
    featured: false,
    category: 'WordPress',
    categories: ['WordPress'],
    year: '2023–Present',
    status: 'Ongoing',
    overview:
      'Ongoing development and maintenance of 140+ WordPress themes in the ZozoThemes catalog — updates, compatibility, bug fixes, and consistency across a large commercial product line.',
    problem:
      'A large theme catalog requires disciplined maintenance so customers receive compatible, reliable products as WordPress, PHP, and plugins evolve.',
    contribution:
      'Performed regular maintenance, investigated reported issues, fixed theme bugs, improved compatibility, and worked within Git/GitLab workflows across many theme packages.',
    implementation:
      'Theme file structure, options frameworks, Elementor-related options, frontend layouts, and release/update processes.',
    decisions:
      'Prioritized stability and consistent patterns across themes so fixes and improvements could be applied systematically.',
    challenges:
      'Scale — many themes, shared patterns, and the need to resolve issues without introducing regressions.',
    outcome:
      'Sustained reliability and update cadence for a large commercial theme catalog.',
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
    title: 'Custom Elementor Addons & Widgets',
    tagline: 'Reusable Elementor building blocks',
    featured: false,
    category: 'WordPress',
    categories: ['WordPress'],
    year: '2023–Present',
    status: 'Product & project work',
    overview:
      'Custom Elementor widgets and addon development for layouts, portfolio carousels, custom post type integrations, and theme-aligned components.',
    problem:
      'Default Elementor widgets are not always enough for product themes that need portfolio carousels, CPT-driven sections, and consistent design system pieces.',
    contribution:
      'Designed and implemented custom widgets, carousel interactions, and integrations between Elementor, themes, and custom post types.',
    implementation:
      'Elementor widget API, PHP registration, frontend scripts, and styling consistent with theme design systems.',
    decisions:
      'Reusable, configurable widgets over one-off page-builder hacks that break when layouts change.',
    challenges:
      'Compatibility across Elementor versions and ensuring performance on pages with multiple dynamic widgets.',
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
    title: 'Client Website Maintenance',
    tagline: 'Production support, fixes, and customizations',
    featured: false,
    category: 'WordPress',
    categories: ['WordPress'],
    year: '2023–Present',
    status: 'Ongoing',
    overview:
      'Engineering work involved in maintaining production WordPress sites — diagnosing issues, resolving bugs, implementing customizations, and supporting clients without exposing confidential details.',
    problem:
      'Live sites require ongoing troubleshooting, updates, compatibility fixes, and feature requests under real production constraints.',
    contribution:
      'Diagnosed production issues, applied development fixes, handled customization requests, and provided technical support across themes and plugins.',
    implementation:
      'WordPress debugging, theme/plugin updates, compatibility work, and targeted PHP/JS/CSS changes as needed per site.',
    decisions:
      'Prioritize stable, reversible fixes and clear communication over speculative refactors on live client sites.',
    challenges:
      'Working within production constraints, limited visibility into third-party code, and time-sensitive issue resolution.',
    outcome:
      'Reliable ongoing support for production WordPress sites and client requirements.',
    stack: ['PHP', 'WordPress', 'JavaScript', 'CSS', 'Debugging tools'],
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
  {
    id: 'office-automation',
    title: 'Office Automation Workflows',
    tagline: 'Reducing repetitive internal work',
    featured: false,
    category: 'Automation',
    categories: ['Automation'],
    year: '2023–Present',
    status: 'Internal',
    overview:
      'Internal automation projects aimed at reducing repetitive manual work, improving consistency, and making routine office and development-adjacent processes easier to manage.',
    problem:
      'Repetitive manual steps slow teams down and introduce inconsistency. Automation was needed for selected internal workflows.',
    contribution:
      'Designed and implemented automation that replaced or simplified manual processes.',
    implementation: null,
    decisions:
      'Target high-friction, high-frequency tasks first so the automation delivered clear day-to-day value.',
    challenges:
      'Understanding real workflows well enough that automation matched how people actually work.',
    outcome: null,
    stack: [],
    liveUrl: null,
    repoUrl: null,
    image: null,
    highlights: [
      'Workflow streamlining',
      'Consistency improvements',
      'Reduced repetitive work',
    ],
  },
]

/**
 * Parked projects — NOT shown on the site.
 * Schema Booster has no public page I could verify, so it is kept here until
 * you have a public URL and your exact contribution. To publish it later,
 * fill in every field below, delete the "[EDIT …]" text, and move the object
 * into the `projects` array above.
 */
export const draftProjects = [
  {
    id: 'schema-booster',
    title: 'Schema Booster',
    tagline: 'Structured data / schema plugin work',
    featured: true,
    category: 'SEO',
    categories: ['WordPress', 'SEO'],
    year: '2023–Present',
    status: 'Product / SEO tooling',
    overview:
      'Schema and structured-data related development to help sites expose clearer machine-readable information for search engines.',
    problem:
      'Many WordPress sites ship incomplete or inconsistent structured data, which limits how search engines understand content.',
    contribution:
      '[EDIT — exact personal contribution.] Worked on schema-related plugin development and integration with theme and content structures.',
    implementation:
      '[EDIT — confirm schema types, configuration UI, and output approach.]',
    decisions:
      'Focused on practical, maintainable schema coverage for common content types rather than every possible schema type.',
    challenges:
      'Keeping markup valid and up to date as content models and SEO guidance evolve.',
    outcome:
      '[EDIT — confirmed outcome only.]',
    stack: ['PHP', 'WordPress', 'JSON-LD / Schema.org concepts', 'SEO'],
    liveUrl: null, // [EDIT — add public URL when confirmed]
    repoUrl: null,
    image: null,
    highlights: [
      'Structured data generation',
      'Content-type aware schema',
      'SEO-oriented configuration',
      '[EDIT — list confirmed schema types]',
    ],
  },
]

/** Filter labels shown in the Projects UI */
export const projectFilters = [
  { id: 'all', label: 'All Projects' },
  { id: 'WordPress', label: 'WordPress' },
  { id: 'React', label: 'React' },
  { id: 'SEO', label: 'SEO' },
  { id: 'Automation', label: 'Automation' },
]
