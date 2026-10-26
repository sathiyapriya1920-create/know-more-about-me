import { profile } from '../../data/profile'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <p className={styles.copy}>
            © {year} {profile.fullName}. Built with React & Vite.
          </p>
        </div>
        <div className={styles.links}>
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
            >
              GitHub
            </a>
          )}
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
            >
              LinkedIn
            </a>
          )}
          {profile.email && (
            <a href={`mailto:${profile.email}`} className={styles.social}>
              Email
            </a>
          )}
        </div>
        <button
          type="button"
          className={styles.topBtn}
          onClick={scrollTop}
          aria-label="Back to top"
        >
          ↑ Top
        </button>
      </div>
    </footer>
  )
}
