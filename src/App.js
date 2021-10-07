import ProductList from "./components/product-list";
import { CatalogueProvider } from "./Providers/catalogue.js";
import { CartProvider } from "./Providers/cart.js";
import { Container } from "./style";
function App() {
  return (
    <div className="App">
      <CatalogueProvider>
        <CartProvider>
          <Container>
            <ProductList type="catalogue" />
            <ProductList type="cart" />
          </Container>
        </CartProvider>
      </CatalogueProvider>
    </div>
  );
}

export default App;
