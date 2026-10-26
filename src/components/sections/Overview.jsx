import { profile } from '../../data/profile'
import { SectionHeading } from '../ui/SectionHeading'
import { useReveal } from '../../hooks/useReveal'
import { useCountUp } from '../../hooks/useCountUp'
import styles from './Overview.module.css'

function MetricCard({ metric }) {
  const isNumeric = metric.animate && typeof metric.value === 'number'
  const { value, ref } = useCountUp(isNumeric ? metric.value : 0, {
    enabled: isNumeric,
  })

  const display = isNumeric
    ? `${value}${metric.suffix || ''}`
    : metric.value

  return (
    <article ref={ref} className={styles.metric}>
      <p className={styles.value} aria-label={isNumeric ? `${metric.value}${metric.suffix || ''} ${metric.label}` : undefined}>
        {display}
      </p>
      <p className={styles.label}>{metric.label}</p>
      <p className={styles.desc}>{metric.description}</p>
    </article>
  )
}

export function Overview() {
  const ref = useReveal()

  return (
    <section id="overview" className="section" aria-labelledby="overview-title">
      <div className="container">
        <div ref={ref} className="reveal">
          <SectionHeading
            label="Professional overview"
            title="WordPress product work at scale"
            id="overview-title"
            description="Theme engineering across a large catalog, plugin products, Elementor systems, SEO tooling, client support, and automation."
          />

          <div className={styles.metrics}>
            {profile.metrics.map((m) => (
              <MetricCard key={m.label} metric={m} />
            ))}
          </div>

          <div className={styles.pillars}>
            <div className={styles.pillar}>
              <h3>Product development</h3>
              <p>
                Custom themes, plugins (Zozo Portfolio and Zozo Nest on
                WordPress.org), Elementor addons, and React-based tools such as
                the SEO Agent.
              </p>
            </div>
            <div className={styles.pillar}>
              <h3>Production maintenance</h3>
              <p>
                Ongoing reliability for 140+ themes — updates, compatibility,
                bug fixes, and issue resolution across the ZozoThemes catalog.
              </p>
            </div>
            <div className={styles.pillar}>
              <h3>SEO & automation</h3>
              <p>
                Technical SEO, structured data, keyword workflows, SEO Agent
                product work, and internal office automation.
              </p>
            </div>
            <div className={styles.pillar}>
              <h3>Collaboration & support</h3>
              <p>
                Supporting junior developers, resolving technical issues, and
                handling client website troubleshooting and customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
