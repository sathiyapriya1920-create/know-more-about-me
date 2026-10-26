import { useState, useCallback } from 'react'
import { skillCategories } from '../../data/skills'
import { SectionHeading } from '../ui/SectionHeading'
import { useReveal } from '../../hooks/useReveal'
import styles from './Skills.module.css'

export function Skills() {
  const ref = useReveal()
  const [activeId, setActiveId] = useState(skillCategories[0]?.id)
  const [selectedSkill, setSelectedSkill] = useState(null)

  const activeCategory =
    skillCategories.find((c) => c.id === activeId) || skillCategories[0]

  const handleTab = useCallback((id) => {
    setActiveId(id)
    setSelectedSkill(null)
  }, [])

  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <div ref={ref} className="reveal">
          <SectionHeading
            label="Technical expertise"
            title="Skills & tools"
            id="skills-title"
            description="Organized by domain — WordPress is the core professional stack, with deliberate expansion into modern React frontend engineering."
          />

          <div className={styles.explorer} role="tablist" aria-label="Skill categories">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                id={`tab-${cat.id}`}
                aria-selected={activeId === cat.id}
                aria-controls={`panel-${cat.id}`}
                className={`${styles.tab} ${activeId === cat.id ? styles.tabActive : ''}`}
                onClick={() => handleTab(cat.id)}
              >
                {cat.title}
              </button>
            ))}
          </div>

          <div
            id={`panel-${activeCategory.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeCategory.id}`}
            className={styles.panel}
          >
            <p className={styles.panelDesc}>{activeCategory.description}</p>
            <ul className={styles.skillList}>
              {activeCategory.skills.map((skill) => {
                const name = typeof skill === 'string' ? skill : skill.name
                const note = typeof skill === 'object' ? skill.note : null
                const isSelected = selectedSkill === name
                return (
                  <li key={name}>
                    <button
                      type="button"
                      className={`${styles.skillItem} ${isSelected ? styles.skillSelected : ''}`}
                      onClick={() =>
                        setSelectedSkill(isSelected ? null : name)
                      }
                      aria-expanded={note ? isSelected : undefined}
                    >
                      <span className={styles.skillName}>{name}</span>
                      {note && isSelected && (
                        <span className={styles.skillNote}>{note}</span>
                      )}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
