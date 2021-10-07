import Button from "../button";

import { useContext } from "react";

import { CatalogueContext } from "../../Providers/catalogue.js";
import { CartContext } from "../../Providers/cart";
import { CartList, List, ProductListe } from "./style";

const ProductList = ({ type }) => {
  // type determinará se nosso componente será do tipo "catalogue" ou "cart"
  // veremos melhor como isso irá funcionar quando formos para nosso App.js
  const { catalogue } = useContext(CatalogueContext);
  const { cart } = useContext(CartContext);

  return (
    <List>
      {type === "catalogue" && (
        <ProductListe>
          <h3>Produtos</h3>
          {catalogue.map((item, index) => (
            <li key={index}>
              <div>
                <img src={item.img} alt="#" />
                <p>{item.name}</p>
              </div>
              <Button type={type} item={item} />
            </li>
          ))}
        </ProductListe>
      )}

      {type === "cart" && cart && (
        <CartList>
          <h3>Meu Carrinho</h3>
          {cart.map((item, index) => (
            <li key={index}>
              <img src={item.img} alt="#" />
              {item.name} <Button type={type} item={item} />
            </li>
          ))}
        </CartList>
      )}
    </List>
  );
};

export default ProductList;
