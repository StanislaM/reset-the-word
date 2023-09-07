import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { View, Image } from 'react-native';
import Logo from '../assets/Logo.png';

SplashScreen.preventAutoHideAsync();

const MainMenu = () => {
    const [fontsLoaded] = useFonts({
        Jomhuria: require('../assets/fonts/Jomhuria-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View
            onLayout={onLayoutRootView}
            style={{
                backgroundColor: '#B6E1F9',
                paddingTop: 60,
                alignItems: 'center',
                flex: 1,
            }}
        >
            <Image source={Logo} />
        </View>
    );
};

export default MainMenu;
