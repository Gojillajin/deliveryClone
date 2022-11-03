import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity style={{
        padding : 5,
    }} >
      <Image source={{
        uri : imgUrl
      }}

      style={{
        height : 60,
        width : 60,
        backgroundColor : '#808080',
        padding: 20,
      }}
      />  
      <Text style={{
        position : 'absolute',
        bottom : 2,
        left : 8,
        fontWeight : 'bold',
        color : 'white'
      }} >{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard