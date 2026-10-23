import { Badge } from '../../components/Badge/Badge'

const VARIANTS = ['neutral', 'danger', 'warning', 'success', 'info'] as const
const SIZES = ['sm', 'md', 'lg'] as const

function BadgeExamples() {
  return (
    <>
      {VARIANTS.map((variant) => (
        <section key={variant} className="component-row">
          <h2>{variant}</h2>
          <div className="component-examples">
            {SIZES.map((size) => (
              <Badge key={size} size={size} variant={variant}>
                Label
              </Badge>
            ))}
          </div>
        </section>
      ))}
    </>
  )
}

export default BadgeExamples
