import { DrawerActions, useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Pressable, Text, View } from 'react-native'
import { HamburerMenu } from '../../components/shared/HamburerMenu';
import { IonIcon } from '../../components/shared/IonIcon';





export const Tab1Screen = () => {




    return (
        <View>
            <HamburerMenu />
            <IonIcon name={'rocket-outline'} />
        </View>
    )
}
