import CryptocurrencyCard from './components/CryptocurrencyCard.jsx';
import CurrencyDrawer from './components/CurrencyDrawer.jsx';
import { Menu, Spin } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import cryptoIcon from './assets/crypto.png';
const App = () => {
  const [currencies, setCurrencies] = useState([]);  
  const [currencyId, setCurrencyId] = useState(1);
  const [currencyData, setCurrencyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const fetchCurrencies = () => {
    setLoading(true);
    axios.get('http://127.0.0.1:8000/cryptocurrencies').then(r => {
      const currenciesResponse = r.data;
      const menuItems = currenciesResponse.map((currency, index) => ({
        // key: `currency-${index}`,
        key: currency.id,
        icon: <img src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${currency.id}.png`} width="24px" />,
        label: `${currency.name} (${currency.symbol})`, // Предположим, что у объекта есть поле name
      }));
      
      setCurrencies([
        {
          key: 'g1',
          label: 'Список криптовалют',
          // icon: <img src={ cryptoIcon } />,
          type: 'group',
          children: menuItems,
        },
      ]);
      setLoading(false);
    }).catch(error => {
      console.error('Error fetching currencies:', error);
      setLoading(false); // Устанавливаем состояние загрузки в false в случае ошибки
    });
  }

  const fetchCurrency = () => {
    if (currencyId) {
      axios.get(`http://127.0.0.1:8000/cryptocurrencies/${currencyId}`).then(r => {
        setCurrencyData(r.data)
      }).catch(error => {
        console.error(`Error fetching currency with ID ${currencyId}:`, error);
      });
    }
  }

  useEffect(() => {
    fetchCurrencies()
  }, []);

  useEffect(() => {
    setCurrencyData(null)
    fetchCurrency()
  }, [currencyId]);

  const onClick = (e) => {
    setCurrencyId(e.key)
  };
  return (
    <div className='flex'>
    {loading ? (
      <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center'>
        <Spin size='large' />
      </div>
    ) : (
      <>
        <Menu
          onClick={onClick}
          style={{
            width: 256,
          }}
          selectedKeys={[currencyId]}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          items={currencies}
          className='h-screen overscroll-x menu'
        />
        <div className="m-auto">
          {currencyData ? <CryptocurrencyCard currency={currencyData} setOpen={setOpen} /> : <Spin size='large'/>}
        </div>
        <div className="">
          { currencyData ? <CurrencyDrawer currency={currencyData} open={open} setOpen={setOpen} /> : "" }
        </div>
      </>
      )}
      </div>
  );
};
export default App;