import { DrawerActions, useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Pressable, Text, View } from 'react-native'
import { HamburerMenu } from '../../components/shared/HamburerMenu';


import Icon from 'react-native-vector-icons/Ionicons';


export const Tab1Screen = () => {




    return (
        <View>
            <HamburerMenu />
            <Text>Tab1Screen</Text>

            <Icon name="rocket-outline" size={100} />
        </View>
    )
}
