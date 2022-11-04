import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { MapPinIcon, StarIcon } from 'react-native-heroicons/outline'


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
    <TouchableOpacity style={{
        backgroundColor : 'white',
        margin : 3,
        shadowColor : '#000',
        shadowOffset : {
            width : 0,
            height : 2
        },
        shadowOpacity : 0.25,
        shadowRadius : 3.84,
        elevation : 5
    }} >
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
                <Text style={{
                    fontSize : 10,
                    color : 'gray'
                }} >
                    <Text style={{
                        color : 'green'
                    }} >{rating}</Text>· {genre}
                </Text>
            </View>
                
            <View style={{
                display : 'flex',
                flexDirection : 'row',
                alignItems : 'center'
            }} >
            <MapPinIcon color='gray' opacity={0.4} size={22} />
                <Text style={{
                    fontSize : 10,
                    color : 'gray'
                }} >Nearby · {address}
                </Text>
            </View>
        </View>
        
    </TouchableOpacity>
  )
}

export default RestaurentCard