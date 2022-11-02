import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
    ChevronDownIcon,
    UserIcon
} from "react-native-heroicons/outline"


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
        <Text>
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
                <UserIcon size={35} color="#00CCBB" />
            </View>
        </Text>
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