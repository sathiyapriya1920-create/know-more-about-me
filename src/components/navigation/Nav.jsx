import { useState, useEffect, useCallback } from 'react'
import { profile } from '../../data/profile'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import styles from './Nav.module.css'

const NAV_LINKS = [
  { id: 'overview', label: 'Overview' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'philosophy', label: 'Philosophy' },
  { id: 'contact', label: 'Contact' },
]

const NAV_IDS = NAV_LINKS.map((l) => l.id)

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeId = useScrollSpy(NAV_IDS, 120)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, close])

  const handleNavClick = useCallback(
    (e, id) => {
      e.preventDefault()
      close()
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        history.replaceState(null, '', `#${id}`)
      }
    },
    [close]
  )

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a
          href="#hero"
          className={styles.brand}
          onClick={(e) => handleNavClick(e, 'hero')}
        >
          <span className={styles.brandMark} aria-hidden="true">
            &lt;/&gt;
          </span>
          <span className={styles.brandName}>{profile.fullName}</span>
        </a>

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.list}>
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`${styles.link} ${activeId === link.id ? styles.active : ''}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={styles.menuBtn}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`${styles.bar} ${open ? styles.barOpen : ''}`} />
          <span className={`${styles.bar} ${open ? styles.barOpen : ''}`} />
          <span className={`${styles.bar} ${open ? styles.barOpen : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        <nav aria-label="Mobile primary">
          <ul className={styles.drawerList}>
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`${styles.drawerLink} ${activeId === link.id ? styles.active : ''}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {open && (
        <div
          className={styles.backdrop}
          onClick={close}
          aria-hidden="true"
        />
      )}
    </header>
  )
}
