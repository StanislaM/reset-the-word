import { View, SafeAreaView, Image, Text } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import Logo from '../assets/Logo.png';
import { COLORS } from '../assets/themes';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../styles';

const MainMenu = () => {
    const router = useRouter();

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.bgColor,
                paddingTop: 60,
            }}
        >
            <Stack.Screen
                options={{
                    header: () => <View />,
                    headerShadowVisible: false,
                }}
            />
            <View style={{ alignItems: 'center' }}>
                <Image source={Logo} />
            </View>
            <View style={{ marginTop: 66 }}>
                <TouchableOpacity>
                    <Text style={styles.secondaryText}>Play</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ ...styles.secondaryText, marginTop: -20 }}>
                        Settings
                    </Text>
                </TouchableOpacity>
            </View>
            <Text
                style={{
                    ...styles.secondaryText,
                    position: 'absolute',
                    bottom: 0,
                    fontSize: 30,
                    lineHeight: 30,
                }}
            >
                Mokhoid Stanislaw{'\n'}PI-201
            </Text>
        </SafeAreaView>
    );
};

export default MainMenu;
