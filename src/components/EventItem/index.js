// Write your code here

import './index.css'

const EventItem = props => {
  const {Details, setActiveId, isActive} = props
  const {id, imageUrl, name, location} = Details

  const onClickChange = () => {
    setActiveId(id)
  }
  const colorBorder = isActive === true ? 'border-style' : ''
  return (
    <li className="list-container">
      <button className="button-style" type="submit" onClick={onClickChange}>
        <img
          src={imageUrl}
          alt="event"
          className={`img-sizing-list ${colorBorder}`}
        />
      </button>
      <p className="list-heading-style">{name}</p>
      <p className="list-para-style">{location}</p>
    </li>
  )
}
export default EventItem
