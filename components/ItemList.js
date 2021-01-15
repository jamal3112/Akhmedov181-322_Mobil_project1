import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native'
import { Spinner, List } from 'native-base'
import Item from './Item'
import axios from 'axios'

const ItemList = ({ history }) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    try {
      const { data: { results } } = await axios.get('https://rickandmortyapi.com/api/character/')
      setData(results)
      setIsLoading(false)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    isLoading
      ? <Spinner color="blue" />
      : (
        <ScrollView>
          <List>
            {data.map(({ id, name, image }) => {
              return (
                <Item
                  key={id}
                  id={id}
                  name={name}
                  uri={image}
                  history={history}
                />
              )
            })}
          </List>
        </ScrollView>
      )
  )
}

export default ItemList
