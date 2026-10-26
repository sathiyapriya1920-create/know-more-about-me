export function SectionHeading({ label, title, description, id }) {
  return (
    <header className="section-header">
      {label && <span className="section-label">{label}</span>}
      {title && (
        <h2 className="section-title" id={id}>
          {title}
        </h2>
      )}
      {description && <p className="section-desc">{description}</p>}
    </header>
  )
}
