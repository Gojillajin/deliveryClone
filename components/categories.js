import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './categoryCard'

const Categories = () => {
  return (
    <ScrollView contentContainerStyle={{
        paddingHorizontal : 15,
        paddingTop : 10,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}>

        {/* categoryCard */}

        <CategoryCard 
        imgUrl='https://links.papareact.com/gn7' 
        title='testing 1' 
        />

        <CategoryCard 
        imgUrl='https://links.papareact.com/gn7' 
        title='testing 2' 
        />

        <CategoryCard 
        imgUrl='https://links.papareact.com/gn7'
        title='testing 3' 
        />

        <CategoryCard 
        imgUrl='https://links.papareact.com/gn7' 
        title='testing 1' 
        />

        <CategoryCard 
        imgUrl='https://links.papareact.com/gn7' 
        title='testing 2' 
        />

        <CategoryCard 
        imgUrl='https://links.papareact.com/gn7'
        title='testing 3' 
        />

        <CategoryCard 
        imgUrl='https://links.papareact.com/gn7' 
        title='testing 1' 
        />

        <CategoryCard 
        imgUrl='https://links.papareact.com/gn7' 
        title='testing 2' 
        />

        <CategoryCard 
        imgUrl='https://links.papareact.com/gn7'
        title='testing 3' 
        />


        
      
    </ScrollView>
  )
}

export default Categories