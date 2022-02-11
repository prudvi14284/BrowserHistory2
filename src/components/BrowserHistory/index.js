import './index.css'

const BrowserHistory = props => {
  const {searchDetails, onDeleteSearch} = props
  const {timeAccessed, logoUrl, title, domainUrl, uniqueNo} = searchDetails

  const onDelete = () => {
    onDeleteSearch(uniqueNo)
  }

  return (
    <li className="search-card-container">
      <div className="search-details-container">
        <p className="time-accessed">{timeAccessed}</p>
        <img src={logoUrl} className="logo-url" alt="logo url" />
        <h1 className="title">{title}</h1>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button type="button" className="delete-button" onChange={onDelete}>
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
