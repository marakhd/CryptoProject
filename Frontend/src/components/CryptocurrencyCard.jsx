import { Card } from "antd";

function CryptocurrencyCard(props) {

    const { currency, setOpen } = props;
    const price = currency.quote.USD.price.toFixed(2);
    const cop = formatNumber(currency.quote.USD.market_cap);
    const replaceprice24h = currency.quote.USD.percent_change_24h.toFixed(2);
    
    function formatNumber(number) {
        const suffixes = {
            'B': 1000000000, // Миллиард
            'M': 1000000,    // Миллион
            'K': 1000,       // Тысяча
        };
        for (const suffix in suffixes) {
            if (Math.abs(number) >= suffixes[suffix]) {
                return (number / suffixes[suffix]).toFixed(3).replace(/\.?0+$/, '') + suffix;
            }
        }
    
        return number.toString();
    }

    const showDrawer = () => setOpen(true);

    return (
      <div>
        <Card
            title={
                <div className="flex items-center gap-3">
                    <img className="m-1" src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`} alt={`${currency.name}IMG`} width="64px" />
                    <span>{currency.name}</span>
                </div>
            }
            extra={<a onClick={showDrawer}>Подробнее</a>}
            style={{
                width: '50vw',
                maxWidth: '450px',
                minWidth: '350px',
            }}
            className="shadow-md"
        >
            <div className="flex items-center flex-col">
                <p>Текущая цена: { price } $</p>
                <p>Изменение цены за 24 часа: <span style={{ color: replaceprice24h > 0 ? 'lime' : 'red' }}>{replaceprice24h} %</span> </p>
                <p>Текущая капитализация: { cop } </p>
            </div>
        </Card>
      </div>
    )
  }
  
  export default CryptocurrencyCard
  