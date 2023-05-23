import data from "./productsTop.json";
import data2 from "./products.Bottom.json";
import "./onlineShop.css";

const OnlineShop = () => {
  return (
    <div>
      <h2>Task4</h2>
      <h4>Last viewed</h4>
      <ProductsTop />
      <h4>Advertising</h4>
      <ProductsBottom />
    </div>
  );
};
const ProductsTop = () => {
  return (
    <div>
      <div class="Cups">
        {data.map((item) => (
          <div class="catalog">
            <div>
              <img src={require(`${item.heart}`)} class="heartImg" alt="" />
            </div>
            <div>
              <img src={require(`${item.image}`)} alt=""></img>
            </div>
            <div class="catalog__title">
              <p>{item.title}</p>
            </div>
            <div>
              <p>{item.cost}</p>
            </div>
            <div class="inStock">
              <p>{item.inStock}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductsBottom = () => {
  return (
    <div class="Glass">
      {data2.map((item) => (
        <div class="catalog">
          <div>
            <img src={require(`${item.heart}`)} class="heartImg" alt="" />
          </div>
          <div>
            <img src={require(`${item.image}`)} alt=""></img>
          </div>
          <div class="catalog__title">
            <p>{item.title}</p>
          </div>
          <div class="bottomCost">
            <p>{item.cost}</p>
          </div>
          <div class="sale">
            <p>{item.sale}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OnlineShop;
