import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { View, SafeAreaView, Image, Text } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import Logo from '../assets/Logo.png';
import { Provider } from 'react-redux';
import { store } from '../store';
import { COLORS } from '../assets/themes';

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

    const router = useRouter();

    return (
        <Provider store={store}>
            <SafeAreaView
                onLayout={onLayoutRootView}
                style={{ flex: 1, backgroundColor: COLORS.bgColor }}
            >
                <View>
                    <Image source={Logo} />
                </View>
            </SafeAreaView>
        </Provider>
    );
};

export default MainMenu;
