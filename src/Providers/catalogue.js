// fazer os imports
import { createContext, useState } from "react";
import bookimg from "../components/product-list/blueopenbook.png";
import tshirt from "../components/product-list/t-shirt.png";
import banana from "../components/product-list/banana.png";
// criar o context
export const CatalogueContext = createContext([]);

// criar o provider
export const CatalogueProvider = ({ children }) => {
  const [catalogue, setCatalogue] = useState([
    { name: "Book", price: 20, img: bookimg },
    { name: "T-shirt", price: 50, img: tshirt },
    { name: "Banana", price: 3, img: banana },
  ]);

  // criar a lógica para adicionar
  const addToCatalogue = (item) => {
    setCatalogue([...catalogue, item]);
  };

  // criar a lógica para remover
  const removeFromCatalogue = (item) => {
    const newCatalogue = catalogue.filter(
      (itemOnCatalogue) => itemOnCatalogue.name !== item.name
    );
    setCatalogue(newCatalogue);
  };

  return (
    <CatalogueContext.Provider
      value={{ catalogue, addToCatalogue, removeFromCatalogue }}
    >
      {children}
    </CatalogueContext.Provider>
  );
};
