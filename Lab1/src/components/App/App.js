import Table from '../Table/Table';
import OnlineShop from '../OnlineShop/OnlineShop';
import Cities from '../Cities/Cities';
import Technique from '../Technique/technique';
import Color from '../Color/Color';

const App = () => {
  const name1 = 'Product1';
  const name2 = 'Product2';

  const cities = [
    {
      id: 1,
      name: 'Chicago',
    },
    {
      id: 2,
      name: 'Los Angeles',
    },
    {
      id: 3,
      name: 'New York',
    },
  ];

  return (
    <div>
      <Table />
      <h2>Task3</h2>
      <Technique name={name1} cost={462} />
      <Technique name={name2} cost={839} />
      <OnlineShop />
      <h2>Task5</h2>
      <Cities cities={cities} />
      <Color />
    </div>
  );
};

export default App;
