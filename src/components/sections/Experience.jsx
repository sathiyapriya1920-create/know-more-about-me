import { useState, useCallback } from 'react'
import { experience } from '../../data/experience'
import { SectionHeading } from '../ui/SectionHeading'
import { Badge } from '../ui/Badge'
import { useReveal } from '../../hooks/useReveal'
import styles from './Experience.module.css'

export function Experience() {
  const ref = useReveal()
  const [expanded, setExpanded] = useState(() => {
    // Expand first area by default
    const first = experience[0]?.areas?.[0]
    return first ? { [first.id || first.title]: true } : {}
  })

  const toggle = useCallback((key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }))
  }, [])

  return (
    <section
      id="experience"
      className="section"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <div ref={ref} className="reveal">
          <SectionHeading
            label="Professional experience"
            title="Where I've built and maintained"
            id="experience-title"
            description="Hands-on work across theme catalogs, plugin products, Elementor systems, SEO, client support, automation, and team collaboration."
          />

          {experience.map((job) => (
            <article key={job.id} className={styles.job}>
              <div className={styles.timeline}>
                <div className={styles.timelineDot} aria-hidden="true" />
                <div className={styles.timelineLine} aria-hidden="true" />
              </div>

              <div className={styles.jobContent}>
                <header className={styles.jobHeader}>
                  <div>
                    <h3 className={styles.company}>{job.company}</h3>
                    <p className={styles.role}>{job.role}</p>
                  </div>
                  <div className={styles.meta}>
                    <Badge variant="accent">
                      {job.startDate} — {job.endDate}
                    </Badge>
                    {job.location && <Badge>{job.location}</Badge>}
                  </div>
                </header>

                <p className={styles.summary}>{job.summary}</p>

                <div className={styles.areas}>
                  {job.areas.map((area) => {
                    const key = area.id || area.title
                    const isOpen = Boolean(expanded[key])
                    return (
                      <div key={key} className={styles.area}>
                        <button
                          type="button"
                          className={styles.areaToggle}
                          onClick={() => toggle(key)}
                          aria-expanded={isOpen}
                          id={`area-btn-${key}`}
                        >
                          <span className={styles.areaTitle}>{area.title}</span>
                          <span className={styles.chevron} aria-hidden="true">
                            {isOpen ? '−' : '+'}
                          </span>
                        </button>
                        <div
                          id={`area-panel-${key}`}
                          role="region"
                          aria-labelledby={`area-btn-${key}`}
                          className={`${styles.areaBody} ${isOpen ? styles.areaOpen : ''}`}
                          hidden={!isOpen}
                        >
                          <ul className={styles.highlights}>
                            {area.highlights.map((h) => (
                              <li key={h}>{h}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
