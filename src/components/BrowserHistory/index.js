import './index.css'

const BrowserHistory = props => {
  const {searchDetails, onDeleteSearch} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = searchDetails

  const onDelete = () => {
    onDeleteSearch(id)
  }

  return (
    <li className="search-card-container">
      <div className="search-details-container">
        <p className="time-accessed">{timeAccessed}</p>
        <img src={logoUrl} className="logo-url" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button type="button" className="delete-button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}
export default BrowserHistory
