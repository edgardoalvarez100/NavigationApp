import { useNavigation, DrawerActions } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Pressable, Text } from 'react-native';
import { IonIcon } from './IonIcon';
import { globalColors } from '../../theme/theme';

export const HamburerMenu = () => {

    const navigation = useNavigation();


    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Pressable style={{ marginLeft: 7 }} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
                    <IonIcon name='menu-outline' color={globalColors.primary} />
                </Pressable >
            )
        })

    }, [])

    return (
        <></>
    )
}
