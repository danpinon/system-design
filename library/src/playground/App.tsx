import { Badge } from '../components/Badge/Badge'
import './playground.css'

function App(): React.JSX.Element {
  return (
    <main className="playground">
      <h1>Design System</h1>
      <p>Development space for our components</p>

      <div className="badge-examples">
        <Badge size="sm" variant="neutral">Label</Badge>
        <Badge size="md" variant="neutral">Label</Badge>
        <Badge size="lg" variant="neutral">Label</Badge>

        <Badge size="sm" variant="danger">Label</Badge>
        <Badge size="md" variant="danger">Label</Badge>
        <Badge size="lg" variant="danger">Label</Badge>

        <Badge size="sm" variant="warning">Label</Badge>
        <Badge size="md" variant="warning">Label</Badge>
        <Badge size="lg" variant="warning">Label</Badge>

        <Badge size="sm" variant="success">Label</Badge>
        <Badge size="md" variant="success">Label</Badge>
        <Badge size="lg" variant="success">Label</Badge>

        <Badge size="sm" variant="info">Label</Badge>
        <Badge size="md" variant="info">Label</Badge>
        <Badge size="lg" variant="info">Label</Badge>
      </div>
    </main>
  )
}

export default App
