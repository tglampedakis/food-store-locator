import React from 'react';
import { Row, Col, Typography } from 'antd';

const { Paragraph, Text } = Typography;

const Footer = () => {
  return (
    <Row
      style={{
        backgroundColor: 'darkcyan',
        padding: '5px 10px',
        fontSize: 16,
      }}
      type="flex"
      justify="space-between"
    >
      <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
        <Paragraph
          style={{
            marginBottom: 0,
            color: 'white',
          }}
        >
          Property of:
          <Text
            style={{
              fontWeight: 'bold',
              marginLeft: 5,
              color: 'white',
            }}
          >
            Intrasoft International
          </Text>
        </Paragraph>
      </Col>
      <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
        <Paragraph
          style={{
            marginBottom: 0,
            color: 'white',
            textAlign: 'end',
          }}
        >
          Created by:
          <Text
            style={{
              fontWeight: 'bold',
              marginLeft: 5,
              color: 'white',
            }}
          >
            Glampedakis Theodore
          </Text>
        </Paragraph>
      </Col>
    </Row>
  );
};

export default Footer;
