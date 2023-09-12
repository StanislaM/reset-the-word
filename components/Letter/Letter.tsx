import { TouchableOpacity, View, Text } from 'react-native';
import { useState } from 'react';
import { styles } from '../../styles';
import { COLORS } from '../../assets/themes';

interface IProps {
    letter: string;
    onLetterPress: (letter: string, callback: () => void) => void;
}

const Letter = ({ letter, onLetterPress }: IProps) => {
    const [active, setActive] = useState(true);

    return (
        <TouchableOpacity
            disabled={!active}
            onPress={() => {
                setActive((state) => !state);
                onLetterPress(letter, () => setActive((state) => !state));
            }}
        >
            <View>
                <Text
                    style={{
                        ...styles.primaryText,
                        color: COLORS.secondaryColor,
                        textShadowColor: 'rgba(0, 0, 0, 0)',
                        opacity: active ? 1 : 0.25,
                    }}
                >
                    {letter}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default Letter;
