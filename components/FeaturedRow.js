import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurentCard from './RestaurentCard'

const FeaturedRow = ({id, title, description}) => {
  return (
    <View>
        <View style={{
            marginTop : 4,
            padding : 6,
            flexDirection : 'row',
            alignItems : 'center',
            justifyContent : 'space-between'
        }} >
        <Text style={{
            fontSize : 20,
            fontWeight : 'bold',
            }} >{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
        </View>

        <Text style={{
            padding : 4,
            fontSize : 13,
            color : 'gray',
        }} >{description}</Text>

        <ScrollView
        horizontal
        contentContainerStyle={{
            paddingHorizontal : 15
        }}
        showsHorizontalScrollIndicator={false}
        style={{
            padding : 4
        }}
        >

            {/* Restaurent Card */}
            <RestaurentCard
                id={123}
                imgUrl={"https://links.papareact.com/gn7"}
                title="Yo! Sushi"
                rating={4.5}
                genre="Japanese"
                address="123 Main St"
                short_description="This is a Test description"
                dishes={[]}
                long={20}
                lat={0}
            />

        </ScrollView>
    </View>
  )
}

export default FeaturedRow