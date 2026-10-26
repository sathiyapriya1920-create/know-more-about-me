import { Badge } from '../ui/Badge'
import styles from './ProjectCard.module.css'

export function ProjectCard({ project, onSelect }) {
  return (
    <article className={styles.card}>
      <div className={styles.meta}>
        <Badge variant="accent">{project.category}</Badge>
        {project.featured && <Badge variant="violet">Featured</Badge>}
        <span className={styles.year}>{project.year}</span>
      </div>

      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.tagline}>{project.tagline}</p>

      <p className={styles.overview}>
        {project.overview.length > 160
          ? `${project.overview.slice(0, 160)}…`
          : project.overview}
      </p>

      <ul className={styles.highlights}>
        {project.highlights.slice(0, 3).map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      <div className={styles.footer}>
        <div className={styles.stack}>
          {project.stack
            .filter((t) => !String(t).startsWith('[EDIT'))
            .slice(0, 4)
            .map((t) => (
              <span key={t} className={styles.tech}>
                {t}
              </span>
            ))}
        </div>
        <div className={styles.actions}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.liveLink}
              onClick={(e) => e.stopPropagation()}
            >
              Visit
            </a>
          )}
          <button
            type="button"
            className={styles.detailBtn}
            onClick={() => onSelect(project)}
          >
            Case study →
          </button>
        </div>
      </div>
    </article>
  )
}
