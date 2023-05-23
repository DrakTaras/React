import data from "./productsTop.json";
import data2 from "./productsBottom.json";
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
      <div className="Cups">
        {data.map((item) => (
          <div className="catalog" key={item.id}>
            <div>
              <img src={require(`${item.heart}`)} className="heartImg" alt="" />
            </div>
            <div>
              <img src={require(`${item.image}`)} alt="" />
            </div>
            <div className="catalog__title">
              <p>{item.title}</p>
            </div>
            <div>
              <p>{item.cost}</p>
            </div>
            <div className="inStock">
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
    <div className="Glass">
      {data2.map((item) => (
        <div className="catalog" key={item.id}>
          <div>
            <img src={require(`${item.heart}`)} className="heartImg" alt="" />
          </div>
          <div>
            <img src={require(`${item.image}`)} alt="" />
          </div>
          <div className="catalog__title">
            <p>{item.title}</p>
          </div>
          <div className="bottomCost">
            <p>{item.cost}</p>
          </div>
          <div className="sale">
            <p>{item.sale}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OnlineShop;
