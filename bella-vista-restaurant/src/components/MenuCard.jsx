function MenuCard({ name, description, price, image }) {
  return (
    <div className="menu-card">
      <div className="menu-image">{image}</div>
      <div className="menu-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <span className="price">{price}</span>
      </div>
    </div>
  )
}

export default MenuCard