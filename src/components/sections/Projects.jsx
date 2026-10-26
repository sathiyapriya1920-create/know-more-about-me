import { useState, useCallback, useMemo } from 'react'
import { projects, projectFilters } from '../../data/projects'
import { SectionHeading } from '../ui/SectionHeading'
import { ProjectModal } from '../projects/ProjectModal'
import { Badge } from '../ui/Badge'
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
            label="Work timeline"
            title="Projects & products"
            id="projects-title"
            description="A timeline of product work — from theme catalog maintenance to published plugins, full product ownership, React tooling, and LLM-assisted automation."
          />

          <div className={styles.filters} role="group" aria-label="Filter projects">
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

          <ol className={styles.timeline}>
            {filtered.map((project, i) => (
              <li key={project.id} className={styles.item} style={{ '--i': i }}>
                <div className={styles.rail} aria-hidden="true">
                  <span className={styles.railDot} />
                  <span className={styles.railLine} />
                </div>
                <article className={styles.card}>
                  <div className={styles.meta}>
                    <time className={styles.year}>{project.year}</time>
                    <Badge variant="accent">{project.category}</Badge>
                    {project.featured && <Badge variant="violet">Featured</Badge>}
                    {project.status && <span className={styles.status}>{project.status}</span>}
                  </div>
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.tagline}>{project.tagline}</p>
                  <p className={styles.overview}>
                    {project.overview.length > 180
                      ? `${project.overview.slice(0, 180)}…`
                      : project.overview}
                  </p>
                  <ul className={styles.highlights}>
                    {project.highlights.slice(0, 4).map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <div className={styles.footer}>
                    <div className={styles.stack}>
                      {project.stack.slice(0, 5).map((t) => (
                        <span key={t} className={styles.tech}>{t}</span>
                      ))}
                    </div>
                    <div className={styles.actions}>
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.liveLink}>
                          Visit
                        </a>
                      )}
                      <button type="button" className={styles.detailBtn} onClick={() => handleSelect(project)}>
                        Case study →
                      </button>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ol>

          {filtered.length === 0 && (
            <p className={styles.empty}>No projects in this category yet.</p>
          )}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={handleClose} />}
    </section>
  )
}
