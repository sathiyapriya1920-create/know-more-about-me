import { useState, useCallback, useMemo } from 'react'
import { projects, projectFilters } from '../../data/projects'
import { SectionHeading } from '../ui/SectionHeading'
import { ProjectCard } from '../projects/ProjectCard'
import { ProjectModal } from '../projects/ProjectModal'
import { useReveal } from '../../hooks/useReveal'
import styles from './Projects.module.css'

export function Projects() {
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState('all')
  const ref = useReveal()

  const filtered = useMemo(() => {
    if (filter === 'all') return projects
    return projects.filter(
      (p) =>
        p.category === filter ||
        (p.categories && p.categories.includes(filter))
    )
  }, [filter])

  const handleSelect = useCallback((project) => setSelected(project), [])
  const handleClose = useCallback(() => setSelected(null), [])

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <div ref={ref} className="reveal">
          <SectionHeading
            label="Featured work"
            title="Projects & case studies"
            id="projects-title"
            description="Product plugins, theme maintenance at scale, Elementor systems, SEO tooling, and automation — selected work from ZozoThemes and related development."
          />

          <div
            className={styles.filters}
            role="group"
            aria-label="Filter projects by category"
          >
            {projectFilters.map((f) => (
              <button
                key={f.id}
                type="button"
                className={`${styles.filterBtn} ${filter === f.id ? styles.filterActive : ''}`}
                onClick={() => setFilter(f.id)}
                aria-pressed={filter === f.id}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            {filtered.map((project, i) => (
              <div
                key={project.id}
                className={styles.cardWrap}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <ProjectCard project={project} onSelect={handleSelect} />
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className={styles.empty}>No projects in this category yet.</p>
          )}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={handleClose} />
      )}
    </section>
  )
}
