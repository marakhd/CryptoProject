import { Drawer } from "antd";

function CurrencyDrawer(props) {
    const { currency, open, setOpen } = props;
    return (
        <>
            <Drawer
                closable
                destroyOnClose
                title={<div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`} alt={`${currency.name}IMG`} width="50px" className="select-none" />
                            <span>{currency.name}</span>
                        </div>
                        <a href={`/info/currency/${currency.id}`} className="select-none">Страница {currency.name}</a>
                       </div>
                    }
                placement="right"
                styles={{
                    maxWidth: '400px',
                    minWidth: '300px',
                    width: '70vw',
                }}
                open={open}
                onClose={() => setOpen(false)}
            >
                <div className="gap-0 m-0 info drawer">
                    <div className="common-info">
                      <div className="content__common-info">
                        <p>Название: {currency.name}</p>
                        <p>Символ: {currency.symbol}</p>
                        <p>Дата добавление: {currency.date_added}</p>
                        <p>Цена: {currency.quote.USD.price}</p>
                      </div>
                    </div>
                    <div className="update-price">
                      <div className="content__update-price">
                        <p>Изменение цены за час: {currency.quote.USD.percent_change_1h}</p>
                        <p>Изменение цены за 24 часа: {currency.quote.USD.percent_change_24h}</p>
                        <p>Изменение цены за 7 дней: {currency.quote.USD.percent_change_7d}</p>
                        <p>Изменение цены за 30 дней: {currency.quote.USD.percent_change_30d}</p>
                      </div>
                    </div>
                    <div className="capital">
                      <div className="content__capital">
                        <p>Текущая капитализация: {currency.quote.USD.market_cap}</p>
                      </div>
                    </div>
                    <div className="last-update_drawer__div">
                        <p className="last-update_drawer">Последнее обновление: {currency.last_updated}</p>
                    </div>
                  </div>
            </Drawer>
        </>
    )
}

export default CurrencyDrawer;
