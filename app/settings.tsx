import { SafeAreaView, Text, View } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { useDispatch } from 'react-redux';
import { COLORS } from '../assets/themes';
import { styles } from '../styles';
import RangeSlider from '../components/RangeSlider/RangeSlider';

import {
    TMaxLength,
    TMinLength,
    TTime,
    setMaxLength,
    setMinLength,
    setTime,
} from '../store/settingsReducer';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const Settings = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const onMaxLengthValueChanged = (low: number, high: number): void => {
        dispatch(setMaxLength(low as TMaxLength));
    };
    const onMinLengthValueChanged = (low: number, high: number): void => {
        dispatch(setMinLength(low as TMinLength));
    };
    const onTimeValueChanged = (low: number, high: number): void => {
        dispatch(setTime(low === 3 ? 5 : (low as TTime)));
    };

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.bgColor,
                paddingTop: 30,
            }}
        >
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <ScrollView>
                <View style={{}}>
                    <Text style={styles.primaryText}>SETTINGS</Text>

                    <Text
                        style={{ ...styles.secondaryText, marginBottom: -20 }}
                    >
                        Max-length
                    </Text>
                    <RangeSlider
                        min={6}
                        max={8}
                        labels={[6, 7, 8]}
                        onValueChanged={onMaxLengthValueChanged}
                    />

                    <Text
                        style={{
                            ...styles.secondaryText,
                            marginBottom: -20,
                            marginTop: 30,
                        }}
                    >
                        Min-length
                    </Text>
                    <RangeSlider
                        min={4}
                        max={6}
                        labels={[4, 5, 6]}
                        onValueChanged={onMinLengthValueChanged}
                    />

                    <Text
                        style={{
                            ...styles.secondaryText,
                            marginBottom: -20,
                            marginTop: 30,
                        }}
                    >
                        Time
                    </Text>
                    <RangeSlider
                        min={1}
                        max={3}
                        labels={[1, 2, 5]}
                        onValueChanged={onTimeValueChanged}
                    />

                    <TouchableOpacity
                        style={{ marginTop: 50 }}
                        onPress={() => router.back()}
                    >
                        <Text style={styles.secondaryText}>Back</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Settings;
