import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { AboutScreen } from '../screens/about/AboutScreen';
import { HamburerMenu } from '../components/shared/HamburerMenu';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
    return (
        <>
            <HamburerMenu />
            <Tab.Navigator>
                <Tab.Screen name="Profile" component={ProfileScreen} />
                <Tab.Screen name="About" component={AboutScreen} />
            </Tab.Navigator>
        </>

    );
}

