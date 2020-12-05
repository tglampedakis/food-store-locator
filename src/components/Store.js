import React from 'react'
import {Link} from 'react-router-dom'
import { Card, Rate, Typography } from 'antd';

const { Meta } = Card;
const { Paragraph } = Typography;

export default function Store({info}) {
  return (
    <Link to={`/details/${info.id}`}>
    <Card
        hoverable
        style={{ width: '100%' }}
        cover={
          <img style={{ height: 400 }} alt="example" src={info.image_url} />
        }
      >
        <Meta title={info.name} style={{ marginBottom: 5 }} />
        <Rate disabled allowHalf value={info.rating} />
        <Paragraph
          style={{ marginBottom: 0 }}
        >{`Reviews: ${info.review_count}`}</Paragraph>
      </Card>
      </Link>
  )
}
