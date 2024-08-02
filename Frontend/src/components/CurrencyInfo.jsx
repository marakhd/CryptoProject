import axios from "axios";
import { Skeleton, Breadcrumb, Card } from 'antd';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function CurrencyInfo() {
    const { id } = useParams()

    const [currency, setCurrency] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchCurrency = () => {
        if (id) {
          axios.get(`/api/cryptocurrencies/${id}`).then(r => {
            setCurrency(r.data);
            setLoading(false);
          }).catch(error => {
            console.error(`Error fetching currency with ID ${id}:`, error);
          });
        }
    }
    
    useEffect(() => {
        fetchCurrency()
      }, []);

    return (
      <>
        { loading ? (
          <>
            <div className="-my-3">
              <Skeleton 
              active
              title={{width: 170}}
              paragraph={false}
              className="m-0"
              />
            </div>
            <div className="flex justify-center items-center m-auto min-h-screen min-w-full">
              <Card
              title={
                <div className="flex items-center gap-3">
                  <Skeleton
                  active
                  className="w-10/12"
                  paragraph={{
                    rows: 1,
                  }}
                  />
                </div>
              }
              style={{
                width: '90vw',
                maxWidth: '420px',
                minWidth: '320px',
              }}
              className="shadow-md"
              >
                <Skeleton
                active
                title={false}
                className="w-10/12"
                paragraph={{
                  rows: 13,
                }}
                />
              </Card>
            </div>
          </>
          ) : (
            <>
              <div>
                <Breadcrumb
                  separator=">"
                  items={[
                    {
                      title: 'Криптовалюты',
                      href: '/',
                    },
                    {
                      title: currency.name,
                    },
                  ]}
                  className="m-1"
                />
              </div>
              <div className="flex justify-center items-center m-auto min-h-screen min-w-full">
                <Card
                  title={
                    <div className="flex items-center gap-3">
                        <img className="m-2" src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`} alt={`${currency.name}IMG`} width="64px" />
                        <span>{currency.name}</span>
                    </div>
                }
                  bordered={false}
                  style={{
                    width: '90vw',
                    maxWidth: '420px',
                    minWidth: '320px',
                  }}
                  className="shadow-md"
                >
                  <div className="gap-0 m-0 info">
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
                    <p className="last-update">Последнее обновление: {currency.last_updated}</p>
                  </div>
                </Card>
              </div>
            </>
          )
          }
       </>
    )
}

export default CurrencyInfo
