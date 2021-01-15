import React, { useState, useEffect } from 'react'
import { Card, CardItem, Thumbnail, Button, Icon, Left, Body, Text, Spinner } from 'native-base'
import axios from 'axios'

const ItemInfo = ({ match: { params: { id } }, history }) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      setData(data)
      setIsLoading(false)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const onBackButtonPress = () => {
    history.push('/')
  }

  return (
    isLoading
      ? <Spinner color="blue" />
      : (
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Left>
              <Thumbnail large source={{ uri: data.image }} />
              <Body>
                <Text>{data.name}</Text>
                <Text note>{data?.origin?.name}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                Species: {data.species}
              </Text>
              <Text>
                Gender: {data.gender}
              </Text>
              <Text>
                Status: {data.status}
              </Text>
              <Text>
                Last known location: {data?.location?.name}
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent textStyle={{ color: '#87838B' }} onPress={onBackButtonPress}>
                <Icon name="arrow-back" />
                <Text>Back</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
      )
  )
}

export default ItemInfo
