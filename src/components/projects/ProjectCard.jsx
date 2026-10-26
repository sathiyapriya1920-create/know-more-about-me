import { Badge } from '../ui/Badge'
import styles from './ProjectCard.module.css'

/**
 * Shorten text for the card: prefer ending on a full sentence, otherwise cut
 * at a word boundary (never mid-word, never leaving dangling punctuation).
 */
function truncate(text, max = 180) {
  if (!text || text.length <= max) return text
  const window = text.slice(0, max)
  const lastSentence = Math.max(
    window.lastIndexOf('. '),
    window.lastIndexOf('! '),
    window.lastIndexOf('? ')
  )
  if (lastSentence > max * 0.5) return window.slice(0, lastSentence + 1)
  const cut = window.slice(0, window.lastIndexOf(' ')).replace(/[\s.,;:—-]+$/, '')
  return `${cut}…`
}

export function ProjectCard({ project, onSelect }) {
  const stack = (project.stack || []).slice(0, 4)
  const highlights = (project.highlights || []).slice(0, 3)

  return (
    <article className={styles.card}>
      {project.image && (
        <div className={styles.cover}>
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            decoding="async"
          />
        </div>
      )}

      <div className={styles.meta}>
        <Badge variant="accent">{project.category}</Badge>
        {project.featured && <Badge variant="violet">Featured</Badge>}
        <span className={styles.year}>{project.year}</span>
      </div>

      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.tagline}>{project.tagline}</p>

      <p className={styles.overview}>{truncate(project.overview)}</p>

      {highlights.length > 0 && (
        <ul className={styles.highlights}>
          {highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}

      <div className={styles.footer}>
        <div className={styles.stack}>
          {stack.map((t) => (
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
              aria-label={`Visit ${project.title} (opens in a new tab)`}
            >
              Visit ↗
            </a>
          )}
          <button
            type="button"
            className={styles.detailBtn}
            onClick={() => onSelect(project)}
            aria-label={`Open ${project.title} case study`}
          >
            Case study →
          </button>
        </div>
      </div>
    </article>
  )
}
