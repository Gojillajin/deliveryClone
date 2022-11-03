import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
    AdjustmentsHorizontalIcon,
    AdjustmentsVerticalIcon,
    CheckBadgeIcon,
    ChevronDownIcon,
    UserIcon,
    MagnifyingGlassIcon
    
    
} from "react-native-heroicons/outline";
import Categories from './categories';



export const HomeScreen = () => {
  
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown : false,
        })
    }, [])

    return (
    <SafeAreaView style={ {
        paddingTop : 5,
        backgroundColor : 'white'} }>
            {/* Header */}
            <View style={ styles.container } >
                <View style={ styles.area }> 
                    <Image 
                        source={{
                            uri:'https://links.papareact.com/wru'
                        }}
                        
                        style={ styles.image }
                        />
                    <View style={ styles.textArea }>
                        <Text style={ styles.deText }>Deliver Now!</Text>
                        <Text style={ styles.clText } >Current Location
                            <ChevronDownIcon size={19} color="#00CCBB" />
                        </Text>
                    </View>
                </View>
                <UserIcon style={{ padding : 2 }} size={35} color="#00CCBB" />
            </View>

            {/* search */}
            <View style={{ 
                display : 'flex',
                flexDirection : 'row',
                marginBottom : 8,
                alignItems : 'center',
                justifyContent : 'space-between'
                }}>
                <View style={{
                    display : 'flex',
                    flexDirection : 'row',
                    flex : 1,
                    padding : 5,
                    alignItems : 'center',
                    backgroundColor : '#d3d3d3'
                 }}>
                    <MagnifyingGlassIcon size={20} color='gray' />
                    <TextInput 
                    placeholder='Restaurants and cuisines'
                    keyboardType='default' />
                </View>
                <View style={{ marginRight : 5 }} >
                    <AdjustmentsVerticalIcon size={20} color='#00CCBB' />
                </View>
            </View>
            {/* body */}
            <ScrollView style={{
                backgroundColor : 'white'
            }} >
                 {/* Categories */}
                 <Categories />
                 {/* Featured */}
            </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between'
    },

    area: {
        flexDirection : 'row',
        padding : 3,
        alignItems : 'center',
    },

    textArea : {
        padding : 10,
    },

    deText:{
        color:'#808080',
        fontWeight : 'bold',
        fontSize : 10
    },

    clText : {
        fontSize: 19,
        fontWeight: 'bold',
        alignItems : 'center',
        justifyContent : 'center'
    },

    image: {
        height : 40,
        width : 40,
        backgroundColor : '#808080',
        padding: 20,
        borderRadius : 100
    }
})