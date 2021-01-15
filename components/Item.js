import React from 'react'
import { ListItem, Thumbnail, Left, Right, Body, Text, Icon } from 'native-base'

const Item = ({ id, name, uri, history }) => {
  const onItemPress = () => {
    history.push(`/character/${id}`)
  }

  return (
    <ListItem thumbnail onPress={onItemPress}>
      <Left>
        <Thumbnail small source={{ uri }} />
      </Left>
      <Body>
        <Text>{name}</Text>
      </Body>
      <Right>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
  )
}

export default Item
