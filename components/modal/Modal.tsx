import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../styles';
import { useRouter } from 'expo-router';

interface IProps {
    score: number;
}

const Modal = ({ score }: IProps) => {
    const router = useRouter();

    return (
        <View style={styles.modalContainer}>
            <Text
                style={{ ...styles.primaryText, fontSize: 96, lineHeight: 96 }}
            >
                Time over
            </Text>
            <Text style={styles.primaryText}>Your score</Text>
            <Text style={{ ...styles.primaryText, marginTop: -30 }}>
                {score}
            </Text>

            <TouchableOpacity onPress={() => router.replace('play')}>
                <Text
                    style={{
                        ...styles.primaryText,
                        fontSize: 96,
                        lineHeight: 96,
                        marginTop: 60,
                    }}
                >
                    Try again
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.back()}>
                <Text
                    style={{
                        ...styles.primaryText,
                        fontSize: 96,
                        lineHeight: 96,
                    }}
                >
                    Back
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Modal;
