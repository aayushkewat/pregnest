// src/pages/ProductPage.tsx
import React from 'react';
import '../style/ProductPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  link: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Baby Diapers',
    description: 'Comfortable and absorbent baby diapers.',
    image: require('../assets/home.png'),
    price: 19.99,
    link: 'https://www.amazon.com/dp/B08K3N8VG3'
  },
  {
    id: 2,
    name: 'Baby Bottle',
    description: 'Safe and easy to clean baby bottle.',
    image: require('../assets/home.png'),
    price: 9.99,
    link: 'https://www.amazon.com/dp/B07WGJ6FT8'
  },
  {
    id: 3,
    name: 'Baby Stroller',
    description: 'Lightweight and durable baby stroller.',
    image: require('../assets/home.png'),
    price: 129.99,
    link: 'https://www.amazon.com/dp/B07Y8W2KTN'
  },
  {
    id: 4,
    name: 'Baby Monitor',
    description: 'Keep an eye on your baby with this reliable monitor.',
    image: require('../assets/home.png'),
    price: 69.99,
    link: 'https://www.amazon.com/dp/B08FXT3TK3'
  }
];

const ProductPage: React.FC = () => {
  // Add state for search functionality
  const [searchTerm, setSearchTerm] = React.useState('');
  
  // Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-page">
      <header className="product-hero">
        <h1>Our Products</h1>
        <p>Check out our range of baby products available on Amazon</p>
        {/* Add search input */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </header>
      
      <section className="products">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <a href={product.link} target="_blank" rel="noopener noreferrer" className="product-link">Buy on Amazon</a>
            </div>
          </div>
        ))}
      </section>
      
      <footer className="footer">
        <div className="footer-content">
          <div className="section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/class">Classes</a></li>
              <li><a href="/product">Products</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="section">
            <h3>Follow Us</h3>
            <div className="footer-social">
              <a href="/"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
              <a href="/"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
              <a href="/"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
              <a href="/"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Prenatal Care. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductPage;
