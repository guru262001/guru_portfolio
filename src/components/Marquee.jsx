import { TOOLS } from '../data/tools'

export default function Marquee() {
  const items = [...TOOLS, ...TOOLS] // duplicated for seamless loop
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((t, i) => (
          <span className="marquee__item" key={i}>
            <img
              src={t.logo}
              alt=""
              className="marquee__logo"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            /> {t.name}
          </span>
        ))}
      </div>
    </div>
  )
}
