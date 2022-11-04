import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/outline'


const RestaurentCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat
}) => {
  return (
    <TouchableOpacity>
        <Image 
            source={{
                uri : imgUrl
            }}
            style={{
                height : 126,
                width : 240,
                borderRadius : 4
            }}
        />
        <View style={{
            paddingBottom : 4,
            paddingLeft : 12,
            paddingRight : 12
        }}>
            <Text style={{
                paddingTop : 10,
                fontSize : 18,
                fontWeight : 'bold'
            }} >{title}</Text>

            <View style={{
                display : 'flex',
                flexDirection : 'row',
                alignItems : 'center',
            }}>
                <StarIcon size={22} color="green" />
                <Text>{rating} · {genre}</Text>
            </View>
        </View>
        
    </TouchableOpacity>
  )
}

export default RestaurentCard