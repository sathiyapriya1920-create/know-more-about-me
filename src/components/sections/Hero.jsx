import { profile } from '../../data/profile'
import { Button } from '../ui/Button'
import { useTyping } from '../../hooks/useTyping'
import styles from './Hero.module.css'

export function Hero() {
  const hasResume = Boolean(profile.resumeFilename)
  const typedRole = useTyping(profile.roles || [profile.jobTitle])

  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.bgGrid} aria-hidden="true" />
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className={styles.bgOrb} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <div className={styles.textCol}>
          <p className={`${styles.greeting} ${styles.stagger1}`}>
            <span className={styles.dot} aria-hidden="true" />
            Available for WordPress Developer roles
          </p>

          <h1 id="hero-heading" className={`${styles.name} ${styles.stagger2}`}>
            {profile.fullName}
          </h1>

          <p className={`${styles.title} ${styles.stagger3}`} aria-live="polite">
            <span className={styles.roleText}>{typedRole}</span>
            <span className={styles.cursor} aria-hidden="true" />
          </p>

          <p className={`${styles.headline} ${styles.stagger4}`}>{profile.headline}</p>

          <p className={`${styles.intro} ${styles.stagger5}`}>{profile.introduction}</p>

          <div className={`${styles.actions} ${styles.stagger6}`}>
            <Button href="#projects" variant="primary" size="lg">
              View Projects
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Contact Me
            </Button>
            {hasResume && (
              <Button
                href={`/documents/${profile.resumeFilename}`}
                variant="ghost"
                size="lg"
                external
              >
                Download Résumé
              </Button>
            )}
          </div>

          <div className={`${styles.meta} ${styles.stagger7}`}>
            <span>{profile.location}</span>
            <span className={styles.metaSep} aria-hidden="true" />
            <span>ZozoThemes · Since Sep 2023</span>
          </div>
        </div>

        <div className={`${styles.visual} ${styles.stagger8}`} aria-hidden="true">
          <div className={styles.codeBlock}>
            <div className={styles.codeHeader}>
              <span className={styles.codeDot} data-color="red" />
              <span className={styles.codeDot} data-color="yellow" />
              <span className={styles.codeDot} data-color="green" />
              <span className={styles.codeFile}>developer.js</span>
            </div>
            <pre className={styles.codeBody}>
              <code>
                <span className={styles.kw}>const</span>{' '}
                <span className={styles.fn}>sathiya</span> = {'{\n'}
                {'  '}role:{' '}
                <span className={styles.str}>&quot;WordPress Developer&quot;</span>,{'\n'}
                {'  '}themes:{' '}
                <span className={styles.num}>140</span>+,{'\n'}
                {'  '}focus: [{'\n'}
                {'    '}
                <span className={styles.str}>&quot;themes&quot;</span>,{' '}
                <span className={styles.str}>&quot;plugins&quot;</span>,{'\n'}
                {'    '}
                <span className={styles.str}>&quot;Elementor&quot;</span>,{' '}
                <span className={styles.str}>&quot;SEO&quot;</span>{'\n'}
                {'  '}],{'\n'}
                {'  '}growing:{' '}
                <span className={styles.str}>&quot;React&quot;</span>,{'\n'}
                {'  '}location:{' '}
                <span className={styles.str}>&quot;Coimbatore&quot;</span>
                {'\n'}
                {'}'};{'\n'}
              </code>
            </pre>
          </div>
        </div>
      </div>

      <a href="#overview" className={styles.scrollHint} aria-label="Scroll to overview">
        <span className={styles.scrollMouse} />
        <span className={styles.scrollText}>Scroll</span>
      </a>
    </section>
  )
}
