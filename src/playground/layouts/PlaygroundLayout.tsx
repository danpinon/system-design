import { NavLink, Outlet } from 'react-router'

const NAV_ITEMS = [
  { to: '/', label: 'Components', end: true },
  { to: '/badges', label: 'Badge', end: false },
] as const

function PlaygroundLayout() {
  return (
    <>
      <nav className="playground-nav">
        {NAV_ITEMS.map(({ to, label, end }) => (
          <NavLink key={to} to={to} end={end}>
            {label}
          </NavLink>
        ))}
      </nav>

      <Outlet />
    </>
  )
}

export default PlaygroundLayout
