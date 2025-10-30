
import React from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
}
 
export interface UserProfileCardProps {
  user: User;
  showEmail?: boolean;
  showRole?: boolean;
  onEdit?: (userId: string) => void;
  children?: React.ReactNode;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
  inStock: boolean;
}
 
export interface ProductDisplayProps {
  product: Product;
  showDescription?: boolean;
  showStockStatus?: boolean;
  onAddToCart?: (productId: string) => void;
  children?: React.ReactNode;
}

function ProductDisplay( {
    product,
    showDescription,
    showStockStatus,
    onAddToCart,
    children,
  }:ProductDisplayProps) {

    const { id, name, price, description, imageUrl, inStock } = (product);

    
    return (
        <>
      <div className="product">
        <div className="product image">
          {imageUrl ? (
            <img src={imageUrl} alt={name} />
          ) : (
            <div className="product placeholder">No image</div>
          )}
        </div>

        <div className="product body">
          <div className="product header">
            <h2 className="product title">{name}</h2>
            {showStockStatus && (
              <span className={`pill ${inStock ? "pill--ok" : "pill--bad"}`}>
                {inStock ? "In stock" : "Out of stock"}
              </span>
            )}
          </div>

          <div className="product price">{(price)}</div>

          {showDescription && description && (
            <p className="product description">{description}</p>
          )}

          {children && <div className="product">{children}</div>}

          <div className="product actions">
            {onAddToCart && (
              <button
                type="button"
                onClick={() => onAddToCart(id)}
                disabled={!inStock}
              >
                {inStock ? "Add to cart" : "Unavailable"}
              </button>
            )}
            <button
              type="button"
              onClick={() => console.log(`Viewing details for ${id}`)}
            >
              View details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDisplay;