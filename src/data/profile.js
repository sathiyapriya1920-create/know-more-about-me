/**
 * ============================================================
 * EDIT THIS FILE to customize your personal information.
 * Confirmed values are set; only unconfirmed fields remain editable.
 * ============================================================
 */

export const profile = {
  // --- Identity ---
  fullName: 'Sathiya Priya C',
  firstName: 'Sathiya',
  jobTitle: 'WordPress Developer',
  location: 'Coimbatore, India',

  // --- Contact & Social ---
  email: 'sathiyapriyac1920@gmail.com',
  github: 'https://github.com/sathiyapriyac-coder',
  linkedin: 'https://www.linkedin.com/in/sathiya-priya-c-4a59a8444/',
  // Set to a filename in /public/documents/ once you add a real résumé PDF
  resumeFilename: null, // e.g. 'resume.pdf'

  // --- Hero ---
  headline: 'WordPress Developer building and maintaining production themes, plugins, and tools',
  introduction:
    'WordPress developer at AbileWeb Technologies Private Limited (ZozoThemes) since September 2023. I maintain 140+ commercial themes, build plugins and Elementor components, support client sites, and contribute SEO and automation work — with growing experience in React-based tooling.',

  // Rotating professional descriptors for hero typing effect
  roles: [
    'WordPress Developer',
    'Plugin Developer',
    'Theme Maintenance Engineer',
    'Elementor Specialist',
    'Web Solutions Engineer',
  ],

  // --- Overview metrics (only confirmed values) ---
  metrics: [
    {
      value: 140,
      suffix: '+',
      label: 'Themes maintained',
      description: 'Active maintenance, updates, and reliability across the ZozoThemes catalog',
      animate: true,
    },
    {
      value: 'Sep 2023',
      label: 'Joined ZozoThemes',
      description: 'WordPress development, plugins, Elementor, SEO, and client support',
      animate: false,
    },
    {
      value: 'Present',
      label: 'Current role',
      description: 'Themes, plugins, Elementor, SEO tooling, automation, and production support',
      animate: false,
    },
  ],

  // --- About ---
  about: {
    journey:
      'I joined AbileWeb Technologies Private Limited (ZozoThemes) in September 2023 as a WordPress developer. My work centers on theme and plugin development, production maintenance of 140+ themes, Elementor customization, client website support, SEO-related development, and office automation. I also support junior developers and help resolve technical issues as part of day-to-day collaboration.',
    approach:
      'I focus on practical problem-solving: diagnosing production issues, writing maintainable PHP and JavaScript, designing reusable WordPress components, and balancing feature work with the ongoing reliability of live products.',
    growth:
      'WordPress development is my core professional strength. Building this portfolio and the SEO Agent in React reflects intentional growth into modern frontend architecture and component-driven interfaces.',
  },

  // --- Philosophy ---
  philosophy: [
    {
      title: 'Maintainable code',
      description: 'Write code that the next developer — including future you — can understand and safely change.',
    },
    {
      title: 'Reusable components',
      description: 'Prefer small, composable building blocks over one-off solutions that cannot scale.',
    },
    {
      title: 'Accessible interfaces',
      description: 'Keyboard navigation, semantic markup, and clear focus states are part of the product, not optional polish.',
    },
    {
      title: 'Performance awareness',
      description: 'Every asset, query, and render path should justify its cost on real devices and networks.',
    },
    {
      title: 'Practical problem-solving',
      description: 'Ship reliable fixes and features that solve the actual problem, not the most impressive architecture on paper.',
    },
    {
      title: 'Continuous learning',
      description: 'Stay current with WordPress, modern JavaScript, and frontend patterns without abandoning production realities.',
    },
  ],
}
