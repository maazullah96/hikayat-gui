import { Link } from 'react-router-dom'

function DropdownMenu({ items, basePath }) {
  return (
    <div className='dropdown-content-right'>
      {items.map((item, index) => (
        <Link
          to={`${basePath}/${index}`}
          key={index}
          className='dropdown-item pb-2'
        >
          {item}
        </Link>
      ))}
      <Link to={`${basePath}`} key={-1} className='dropdown-item pb-2'>
        {`More ${basePath.charAt(0).toUpperCase() + basePath.slice(1)}...`}
      </Link>
    </div>
  )
}

export default DropdownMenu
