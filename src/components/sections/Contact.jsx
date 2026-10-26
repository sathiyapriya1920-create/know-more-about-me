import { useState, useCallback } from 'react'
import { profile } from '../../data/profile'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { useReveal } from '../../hooks/useReveal'
import styles from './Contact.module.css'

export function Contact() {
  const ref = useReveal()
  const [copied, setCopied] = useState(false)

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback: select is not needed; user can still use mailto
    }
  }, [])

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <div ref={ref} className={`reveal ${styles.wrap}`}>
          <SectionHeading
            label="Contact"
            title="Let&apos;s talk about the next project"
            id="contact-title"
            description="Open to WordPress Developer roles and collaborations involving theme and plugin engineering, Elementor systems, SEO tooling, or related frontend work."
          />

          <div className={styles.actions}>
            <Button
              href={`mailto:${profile.email}`}
              variant="primary"
              size="lg"
            >
              Email me
            </Button>
            <Button
              type="button"
              variant="secondary"
              size="lg"
              onClick={copyEmail}
            >
              {copied ? 'Copied!' : 'Copy email'}
            </Button>
          </div>

          <div className={styles.links}>
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                GitHub
              </a>
            )}
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                LinkedIn
              </a>
            )}
          </div>

          <p className={styles.emailDisplay}>
            <span className="mono">{profile.email}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
