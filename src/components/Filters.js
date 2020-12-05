import React, { Component } from 'react'
import { Row, Col, Input, Select, Button } from 'antd';
import axios from "axios"

const {Option} = Select

export default class Filters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: '',
      location: '',
      limit: '',
    }
  }

  onChange = (key, val) => {
    this.setState(() => {
      return {
        [key]: val
      }
    })
  }

  onTermChange = e => {
    const term = e.target.value
    this.setState(() => {
      return {
        term
      }
    })
  }

  onLocationChange = location => {
    this.setState(() => ({
      location
    }))
  }

  onLimitChange = limit => {
    this.setState(() => ({
      limit
    }))
  }

  onSearchClick = async () => {
    const {term, location, limit} = this.state 
    const {mitsos, setLoading, setError} = this.props
    try {
      setLoading(true)
    const { data } = await axios.get('/v3/businesses/search', {
        params: {
          limit,
          term,
          location,
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer lwPc06tYIYavAVCqw16hZ6Ur-w6n7zj70Iz0hFHxotmgleqLJONro7fmtvKRr_uarRNHKnlQrTarN3le2xHuK6W7tiRKUd7_ZB8SVwDqvF_X52vkPg-p57jq-xT2XnYx',
        },
      });
      mitsos(data.businesses)
      setLoading(false)
      setError('')
    } catch (error) {
      console.log(error);
      setLoading(false)
      setError(error.message)
    }

    this.setState(() => ({
      term: '',
      location: '',
      limit: ''
    }))
  }

  render() {
    const {term, location, limit} = this.state
    return (
      <Row
        style={{
          padding: 20,
          backgroundColor: 'darkcyan',
          margin: 0,
          borderTop: '1px solid darkslategray',
        }}
        gutter={8}
        type="flex"
        justify="center"
      >
      <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={4}>
       <Input
          size="large"
          placeholder="Search term"
          onChange={(e) => this.onChange('term', e.target.value)}
          value={term}
        />
      </Col>
      <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={4}>
          <Select
            size="large"
            style={{ width: '100%' }}
            onChange={this.onLocationChange}
            value={location}
          >
            <Option value="">Select Location</Option>
            <Option value="New York">New York</Option>
            <Option value="Los Angeles">Los Angeles</Option>
            <Option value="Chicago">Chicago</Option>
            <Option value="	Houston"> Houston</Option>
            <Option value="Phoenix">Phoenix</Option>
          </Select>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={4}>
          <Select
            size="large"
            style={{ width: '100%' }}
            onChange={this.onLimitChange}
            value={limit}
          >
            <Option value="">Select Limit</Option>
            <Option value="10">10</Option>
            <Option value="20">20</Option>
            <Option value="30">30</Option>
            <Option value="40">40</Option>
            <Option value="50">50</Option>
          </Select>
        </Col>
        <Col
          style={{ textAlign: 'end' }}
          xs={24}
          sm={24}
          md={12}
          lg={2}
          xl={2}
          xxl={2}
        >
          <Button
            size="large"
            type="primary"
            onClick={this.onSearchClick}
            disabled={!(term && location && limit)}
          >
            Search
          </Button>
        </Col>
      </Row>
    )
  }
}
