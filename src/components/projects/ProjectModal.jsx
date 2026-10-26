import { useEffect, useRef, useCallback } from 'react'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import styles from './ProjectModal.module.css'

/** Real content only: skips null/empty values and any leftover "[EDIT …]" text. */
const hasContent = (value) =>
  typeof value === 'string' && value.trim() !== '' && !value.includes('[EDIT')

export function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null)
  const closeBtnRef = useRef(null)

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose]
  )

  useEffect(() => {
    const opener = document.activeElement
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    closeBtnRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      if (opener && typeof opener.focus === 'function') opener.focus()
    }
  }, [handleKeyDown])

  if (!project) return null

  const sections = [
    { key: 'overview', label: 'Overview', content: project.overview },
    { key: 'problem', label: 'Problem / requirement', content: project.problem },
    { key: 'contribution', label: 'My contribution', content: project.contribution },
    { key: 'implementation', label: 'Technical implementation', content: project.implementation },
    { key: 'decisions', label: 'Engineering decisions', content: project.decisions },
    { key: 'challenges', label: 'Challenges & solutions', content: project.challenges },
    { key: 'outcome', label: 'Outcome', content: project.outcome },
  ]

  return (
    <div
      className={styles.overlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      role="presentation"
    >
      <div
        ref={dialogRef}
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <div className={styles.header}>
          <div>
            <div className={styles.badges}>
              <Badge variant="accent">{project.category}</Badge>
              {project.status && <Badge>{project.status}</Badge>}
            </div>
            <h2 id="project-modal-title" className={styles.title}>
              {project.title}
            </h2>
            <p className={styles.tagline}>{project.tagline}</p>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="Close case study"
          >
            ×
          </button>
        </div>

        <div className={styles.body}>
          {project.image && (
            <img
              className={styles.cover}
              src={project.image}
              alt={`${project.title} screenshot`}
              loading="lazy"
              decoding="async"
            />
          )}

          {sections.map(
            (s) =>
              hasContent(s.content) && (
                <div key={s.key} className={styles.section}>
                  <h3>{s.label}</h3>
                  <p>{s.content}</p>
                </div>
              )
          )}

          {project.highlights?.length > 0 && (
            <div className={styles.section}>
              <h3>Highlights</h3>
              <ul className={styles.list}>
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          )}

          {project.stack?.length > 0 && (
            <div className={styles.section}>
              <h3>Technology stack</h3>
              <div className={styles.stack}>
                {project.stack.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className={styles.footer}>
          {project.liveUrl && (
            <Button href={project.liveUrl} variant="primary" external>
              Live project
            </Button>
          )}
          {project.repoUrl && (
            <Button href={project.repoUrl} variant="secondary" external>
              Source code
            </Button>
          )}
          <Button variant="ghost" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}
