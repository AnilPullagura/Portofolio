import {Link, useLocation} from 'react-router-dom'
import {useState} from 'react'

import './index.css'

const headerList = [
  {
    id: 1,
    link: 'Home',
    path: '/',
  },
  {
    id: 2,
    link: 'about',
    path: '/about',
  },
  {
    id: 3,
    link: 'projects',
    path: '/projects',
  },
  {
    id: 4,
    link: 'skills',
    path: '/skills',
  },
]

const Header = () => {
  const location = useLocation()
  const [curentId, setId] = useState(
    () => headerList.find(h => h.path === location.pathname)?.id,
  )

  return (
    <div>
      <ul className="header-list">
        {headerList.map(each => (
          <li key={each.id}>
            <Link
              onClick={() => setId(each.id)}
              className={
                curentId === each.id ? 'link-item active ' : 'link-item'
              }
              to={each.path}
            >
              {each.link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Header
