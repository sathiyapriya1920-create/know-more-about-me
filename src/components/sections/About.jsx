import { profile } from '../../data/profile'
import { SectionHeading } from '../ui/SectionHeading'
import { useReveal } from '../../hooks/useReveal'
import styles from './About.module.css'

export function About() {
  const ref = useReveal()

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <div ref={ref} className="reveal">
          <SectionHeading
            label="About"
            title="Professional journey"
            id="about-title"
          />

          <div className={styles.grid}>
            <div className={styles.block}>
              <h3 className={styles.blockTitle}>The path</h3>
              <p>{profile.about.journey}</p>
            </div>
            <div className={styles.block}>
              <h3 className={styles.blockTitle}>How I work</h3>
              <p>{profile.about.approach}</p>
            </div>
            <div className={styles.block}>
              <h3 className={styles.blockTitle}>Where I&apos;m growing</h3>
              <p>{profile.about.growth}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
