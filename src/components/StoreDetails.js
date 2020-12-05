import React, {useState, useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { Carousel, Rate, Alert, Spin, Typography, Layout } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

export default function StoreDetails() {
  const {id} = useParams()
  const history = useHistory()

  const [storeDetails, setStoreDetails] = useState(null)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStoreDetails = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/v3/businesses/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer lwPc06tYIYavAVCqw16hZ6Ur-w6n7zj70Iz0hFHxotmgleqLJONro7fmtvKRr_uarRNHKnlQrTarN3le2xHuK6W7tiRKUd7_ZB8SVwDqvF_X52vkPg-p57jq-xT2XnYx',
          },
        });
        setStoreDetails(data);
        setLoading(false);
        setError('');
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(error.message);
      }
    };
    fetchStoreDetails()
      console.log("Hi")

    return () => {
      console.log("Hello")
    }
  }, [])

  return (
    <>
      {loading ? (
        <div
          style={{
            height: '100vh',
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
          ) : (
            storeDetails && (
              <Content>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: '0px 0px 5px 0px',
                    backgroundColor: 'darkcyan',
                  }}
                >
                  <ArrowLeftOutlined
                    style={{ fontSize: 30, color: 'white' }}
                    onClick={() => history.push('/home')}
                  />
                  <Title level={2} style={{ margin: '0 5px', color: 'white' }}>
                    {storeDetails.name}
                  </Title>
                </div>
                <Carousel autoplay>
                  {storeDetails.photos.map((photo, index) => (
                    <div key={photo}>
                      <img
                        style={{ width: '100%', height: 500 }}
                        alt={`foto ${index}`}
                        src={photo}
                      />
                    </div>
                  ))}
                </Carousel>
                <>
                  <Paragraph
                    style={{ marginBottom: 5 }}
                  >{`Address: ${storeDetails.location.address1}, ${storeDetails.location.city}`}</Paragraph>
                  <Paragraph
                    style={{ marginBottom: 5 }}
                  >{`Phone: ${storeDetails.display_phone}`}</Paragraph>
                  <Paragraph style={{ marginBottom: 5 }}>{`Price: ${
                    storeDetails.price ? storeDetails.price : 'Unknown'
                  }`}</Paragraph>
                  <Rate allowHalf value={storeDetails.rating} />
                  <Paragraph
                    style={{ marginBottom: 5 }}
                  >{`Reviews: ${storeDetails.review_count}`}</Paragraph>
                </>
              </Content>
            )
          )}
        </>
      )}
    </>
  );
};
