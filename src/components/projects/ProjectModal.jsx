import { useEffect, useRef, useCallback } from 'react'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import styles from './ProjectModal.module.css'

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
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    closeBtnRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
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
          {sections.map(
            (s) =>
              s.content &&
              s.content !== '—' &&
              !s.content.startsWith('[EDIT') && (
                <div key={s.key} className={styles.section}>
                  <h3>{s.label}</h3>
                  <p>{s.content}</p>
                </div>
              )
          )}

          {project.highlights?.length > 0 &&
            !project.highlights[0]?.startsWith('[EDIT') && (
              <div className={styles.section}>
                <h3>Highlights</h3>
                <ul className={styles.list}>
                  {project.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            )}

          <div className={styles.section}>
            <h3>Technology stack</h3>
            <div className={styles.stack}>
              {project.stack.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </div>
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
          {!project.liveUrl && !project.repoUrl && (
            <p className={styles.note}>
              Links: add liveUrl / repoUrl in <code>src/data/projects.js</code>{' '}
              when available.
            </p>
          )}
          <Button variant="ghost" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}
