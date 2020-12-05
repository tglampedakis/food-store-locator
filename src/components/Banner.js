import React from 'react'
import {Row, Col, Typography} from "antd"
import { SearchOutlined } from '@ant-design/icons';

const {Title} = Typography

export default function Banner({message}) {
  return (
    <Row style={{backgroundColor: "darkcyan"}}>
      <Col
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        xs={4}
        sm={4}
        md={4}
        lg={4}
        xl={4}
      >
        <SearchOutlined style={{ fontSize: '10vw', color: 'darkslategray' }} />
      </Col>
      <Col xs={20}>
       <Row>
         <Col>
          <Title style={{
                fontSize: '5vw',
                margin: '0.2em 0.2em 0.1em 0.2em',
                color: 'white',
              }}
              level={1}>
            Welcome
            </Title>
         </Col>
       </Row>
       <Row>
          <Col>
            <Title
              style={{
                fontSize: '3vw',
                margin: '0.1em 0.2em 0.4em 0.2em',
                color: 'white',
              }}
              level={2}
            >
              {message}
            </Title>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
