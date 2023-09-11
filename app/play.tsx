import { Stack } from 'expo-router';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { COLORS } from '../assets/themes';
import { styles } from '../styles';
import { RootState } from '../store';
import { dataWords } from '../data/words';
import Letter from '../components/Letter/Letter';
import { shuffle } from '../utils';

interface IGuessWord {
    letter: string;
    onRemove: () => void;
}

const Play = () => {
    const [score, setScore] = useState(0);
    const { maxLength, minLength, time } = useSelector(
        (state: RootState) => state.settings
    );
    const words = useMemo(
        () =>
            dataWords.filter(
                (word) => word.length <= maxLength && word.length >= minLength
            ),
        [maxLength, minLength]
    );

    const [word, setWord] = useState('');
    const [shuffledWord, setShuffledWord] = useState('');
    const [guessWord, setGuessWord] = useState<IGuessWord[]>([]);

    useEffect(() => {
        setWord(words[Math.floor(Math.random() * words.length)]);
    }, [words]);

    useEffect(() => {
        console.log(word);

        setShuffledWord(shuffle(word.split('')).join(''));
    }, [word]);

    const onLetterPress = (letter: string, callback: () => void) => {
        setGuessWord((state) => [
            ...state,
            { letter: letter, onRemove: callback },
        ]);
    };

    const onGuessWordPress = () => {
        if (guessWord.length === 0) {
            return;
        }
        guessWord[guessWord.length - 1].onRemove();
        setGuessWord((state) => state.slice(0, state.length - 1));
    };

    const renderLetters = useCallback(() => {
        if (shuffledWord !== '') {
            return shuffledWord
                .split('')
                .map((letter, i) => (
                    <Letter
                        key={i}
                        letter={letter}
                        onLetterPress={onLetterPress}
                    />
                ));
        }
    }, [shuffledWord]);

    useEffect(() => {
        if (
            word &&
            word !== '' &&
            guessWord.map((letter) => letter.letter).join('') === word
        ) {
            setScore((state) => state + 1);
            setWord(words[Math.floor(Math.random() * words.length)]);
            guessWord.forEach((letter) => letter.onRemove());
            setGuessWord([]);
        }
    }, [guessWord]);

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
                    headerShown: false,
                }}
            />

            <View>
                <Text
                    style={{
                        ...styles.primaryText,
                        color: COLORS.secondaryColor,
                    }}
                >
                    Score: {score}
                </Text>
            </View>

            <View style={styles.lettersContainer}>{renderLetters()}</View>

            <View style={styles.guessWordContainer}>
                <TouchableOpacity onPress={onGuessWordPress}>
                    <Text
                        style={{
                            ...styles.primaryText,
                            letterSpacing: 10,
                            textShadowColor: 'rgba(0, 0, 0, 0)',
                        }}
                    >
                        {guessWord.map((letter) => letter.letter).join('')}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Play;
