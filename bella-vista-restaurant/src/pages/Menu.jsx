import MenuCard from '../components/MenuCard'

function Menu() {
  const menuItems = [
    {
      id: 1,
      name: 'Margherita Pizza',
      description: 'Classic pizza with tomato sauce, fresh mozzarella and basil.',
      price: '₦4,500',
      image: '🍕'
    },
    {
      id: 2,
      name: 'Spaghetti Carbonara',
      description: 'Homemade pasta with creamy egg sauce, pancetta and Parmesan.',
      price: '₦5,200',
      image: '🍝'
    },
    {
      id: 3,
      name: 'Grilled Salmon',
      description: 'Fresh salmon fillet served with lemon butter sauce and vegetables.',
      price: '₦7,800',
      image: '🐟'
    },
    {
      id: 4,
      name: 'Chicken Parmigiana',
      description: 'Breaded chicken breast topped with tomato sauce and melted cheese.',
      price: '₦6,500',
      image: '🍗'
    },
    {
      id: 5,
      name: 'Tiramisu',
      description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone.',
      price: '₦3,200',
      image: '🍰'
    },
    {
      id: 6,
      name: 'Caprese Salad',
      description: 'Fresh tomatoes, mozzarella, basil and olive oil.',
      price: '₦3,800',
      image: '🥗'
    }
  ]

  return (
    <div className="page menu">
      <h1>Our Menu</h1>
      <p className="section-intro">
        Discover our selection of authentic Italian dishes prepared fresh every day.
      </p>

      <div className="menu-grid">
        {menuItems.map((item) => (
          <MenuCard
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Menu