/**
 * ============================================================
 * EDIT THIS FILE to customize your personal information.
 * ============================================================
 */

// Professional start date (month is 0-indexed: 8 = September)
const CAREER_START = new Date(2023, 8, 1)
const yearsExperience = Math.max(
  1,
  Math.floor((Date.now() - CAREER_START.getTime()) / (365.25 * 24 * 60 * 60 * 1000))
)

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
  resumeFilename: 'Sathiya_Priya_C_Resume.pdf', // e.g. 'resume.pdf'

  // --- Hero ---
  headline: 'WordPress Developer building and maintaining production themes, plugins, and tools',
  introduction:
    'WordPress developer at AbileWeb Technologies Private Limited (ZozoThemes) since September 2023. I maintain 140+ commercial themes, build plugins and Elementor components, support client sites, and contribute SEO and automation work — with growing experience in React-based tooling.',

  // Rotating professional descriptors for hero typing effect
  roles: [
    'WordPress Developer',
    'Plugin Developer',
    'Elementor Developer',
  ],

  // --- Overview metrics (keep these verifiable) ---
  metrics: [
    {
      value: yearsExperience,
      suffix: '+',
      label: 'Years of experience',
      description: 'Professional WordPress development since September 2023',
      animate: true,
    },
    {
      value: 140,
      suffix: '+',
      label: 'Themes maintained',
      description: 'Updates, bug fixes, and compatibility across the ZozoThemes catalog',
      animate: true,
    },
    {
      value: 2,
      label: 'Plugins on WordPress.org',
      description: 'Zozo Portfolio and Zozo Nest, published and publicly available',
      animate: true,
    },
  ],

  // --- About ---
  about: {
    journey:
      'I joined AbileWeb Technologies Private Limited (ZozoThemes) in September 2023 as a WordPress developer. My work centers on theme and plugin development, production maintenance of 140+ themes, Elementor customization, client website support, SEO-related development, and office automation. I also support junior developers and help resolve technical issues as part of day-to-day collaboration.',
    approach:
      'I focus on practical problem-solving: diagnosing production issues, writing maintainable PHP and JavaScript, designing reusable WordPress components, and balancing feature work with the ongoing reliability of live products.',
    growth:
      'WordPress development is my core professional strength. Full product ownership of Cookieshift (server through client support), React tooling such as the SEO Agent, and LLM-assisted server automation with Hermes reflect intentional growth beyond theme maintenance alone.',
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
  ],
}
