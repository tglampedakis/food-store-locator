import React, {useState} from 'react'
import { Layout, Row,Col, Spin, Typography, Alert } from 'antd';

import Banner from "../components/Banner"
import Filters from "../components/Filters"
import Store from "../components/Store"
import FooterComponent from "../components/Footer"

const { Header, Footer, Content } = Layout;
const {Title} = Typography

export default function Homepage() {
  const [stores, setStores] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  return (
    <Layout style={{ backgroundColor: 'white', margin: '5vw 10vw' }}>
      <Header style={{ height: 'auto', padding: '0 12px',backgroundColor: 'white' }}> 
        <Banner message="Find your favourite food store!" />
        <Filters mitsos={setStores} setLoading={setLoading} setError={setError} />
        </Header>
      <Content>
        {loading ? (
            <div
              style={{
                height: '60vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Spin size="large" tip="Loading..." />
            </div>
          ) : (
            <>
              {error ? (
                <Alert
                  description={error}
                  type="error"
                  closable
                  style={{
                    padding: 5,
                    width: '60%',
                    margin: '10px auto',
                  }}
                />
              ) : !!stores.length ? (
                <Row style={{ margin: '12px 0' }} gutter={[24, 24]}>
                  {stores.map(store => (
                    <Col
                      key={store.id}
                      xs={24}
                      sm={24}
                      md={12}
                      lg={12}
                      xl={8}
                      xxl={6}
                    >
                      <Store info={store} />
                    </Col>
                  ))}
                </Row>
              ) : (
                <Title
                  level={3}
                  style={{
                    height: '50vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  There are no results. Please search...
                </Title>
              )}
            </>
          )}
      </Content>
      <Footer style={{
            backgroundColor: 'white',
            position: 'fixed',
            padding: '0px 16px 0 12px',
            bottom: 0,
            left: 0,
            margin: '0 10vw',
            width: '80%',
          }}>
        <FooterComponent />
      </Footer>
    </Layout>
  )
}
