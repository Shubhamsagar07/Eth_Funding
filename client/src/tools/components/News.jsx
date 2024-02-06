import React, { useState } from 'react'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Select, Typography, Card, Row, Col, Avatar, Button } from 'antd';
import moment from 'moment';

const { Text, Title } = Typography;
const { Option } = Select;
const demoImage = "https://images.livemint.com/img/2022/10/04/600x338/FINTECH-CRYPTOCURRENCY-0_1653472291506_1664851187645_1664851187645.JPG"

export default function News({ simplified }) {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency")
  const count = simplified ? 3 : 10;

  const { data } = useGetCryptosQuery(100);

  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: newsCategory, count: count });

  if (!cryptoNews?.value) return "loading...";

  console.log(cryptoNews)

  return (
    <>


      <Row gutter={[24, 24]} >
        {!simplified ?
          <Col span={24}>
            <Select
              showSearch
              className='select-news'
              placeholder="Select a Crypto"
              optionFilterProp='children'
              onChange={(value) => setNewsCategory(value)}
              filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase() >= 0)}
            >
              {data?.data?.coins.map((coin) => <Option value={coin.name} >{coin.name}</Option>)}
            </Select>
          </Col>
          : <></>}
        {cryptoNews.value.map((news, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <Card
              hoverable
              className='news-card'
            >
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className='news-image-container'>
                  <Title className='news-title' level={4} >{news.name}</Title>
                  <img style={{ "maxWidth": "200px", "maxHeight": "100px" }} src={news?.image?.thumbnail?.contentUrl || demoImage} alt="" ></img>
                </div>
                <p>
                  {news.description > 100 ? `${news.description.substring(0, 100)}...` : news.description}
                </p>
                <div className='provider-container'>
                  <div>
                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                    <Text className='provider-name'>{news.provider[0]?.name}</Text>
                  </div>
                  <Text>{moment(news.datePublished).startOf("ss").fromNow()}</Text>
                </div>
                <Button style={{ "marginTop": "20px" }}>Read Now</Button>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}
