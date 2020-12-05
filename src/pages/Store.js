import React from 'react'
import { Layout } from 'antd';

import StoreDetails from '../components/StoreDetails'
import FooterComponent from '../components/Footer'

const { Footer, Content } = Layout;

export default function Store() {
  return (
    <Layout
      style={{ margin: '0 auto', backgroundColor: 'white', width: '50%' }}
    >
      <Content>
        <StoreDetails />
      </Content>
      <Footer
        style={{
          backgroundColor: 'white',
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          margin: '0 auto',
          width: '50%',
          padding: 0,
        }}
      >
        <FooterComponent />
      </Footer>
    </Layout>
  )
}
