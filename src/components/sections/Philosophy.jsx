import { profile } from '../../data/profile'
import { SectionHeading } from '../ui/SectionHeading'
import { useReveal } from '../../hooks/useReveal'
import styles from './Philosophy.module.css'

export function Philosophy() {
  const ref = useReveal()

  return (
    <section
      id="philosophy"
      className="section"
      aria-labelledby="philosophy-title"
    >
      <div className="container">
        <div ref={ref} className="reveal">
          <SectionHeading
            label="Development philosophy"
            title="How I approach the work"
            id="philosophy-title"
            description="Principles that guide product development, maintenance, and collaboration."
          />

          <div className={styles.grid}>
            {profile.philosophy.map((item) => (
              <article key={item.title} className={styles.card}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.desc}>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
