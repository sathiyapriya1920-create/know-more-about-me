import { journey } from '../../data/journey'
import { SectionHeading } from '../ui/SectionHeading'
import { useReveal } from '../../hooks/useReveal'
import styles from './Journey.module.css'

export function Journey() {
  const ref = useReveal()

  return (
    <section id="journey" className="section" aria-labelledby="journey-title">
      <div className="container">
        <div ref={ref} className="reveal">
          <SectionHeading
            label="Growth path"
            title="From themes to products & automation"
            id="journey-title"
            description="A chronological path through the work — theme maintenance, Elementor systems, published plugins, full product ownership, React tooling, server ops, and LLM-assisted automation."
          />

          <ol className={styles.timeline}>
            {journey.map((item, index) => (
              <li
                key={item.id}
                className={styles.item}
                style={{ '--i': index }}
              >
                <div className={styles.marker} aria-hidden="true">
                  <span className={styles.dot} />
                  {index < journey.length - 1 && <span className={styles.line} />}
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTop}>
                    <time className={styles.period}>{item.period}</time>
                    {item.highlight && (
                      <span className={styles.badge}>{item.highlight}</span>
                    )}
                  </div>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.summary}>{item.summary}</p>
                  <ul className={styles.skills}>
                    {item.skills.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      View live →
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
