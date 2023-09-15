import { StyleSheet } from 'react-native';
import { COLORS } from '../assets/themes';

export const styles = StyleSheet.create({
    primaryText: {
        width: '100%',
        textAlign: 'center',
        fontFamily: 'Jomhuria',
        color: COLORS.primaryColor,
        fontSize: 128,
        lineHeight: 128,
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { height: 4, width: -4 },
        textShadowRadius: 10,
    },
    secondaryText: {
        width: '100%',
        textAlign: 'center',
        fontFamily: 'Jomhuria',
        color: COLORS.secondaryColor,
        fontSize: 96,
        lineHeight: 96,
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { height: 4, width: -4 },
        textShadowRadius: 10,
    },
    thumb: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#FFFEA6',
    },
    rail: {
        width: '100%',
        height: 8,
        borderRadius: 4,
        backgroundColor: COLORS.secondaryColor,
    },
    slider: {
        width: '70%',
    },
    sliderContainer: {
        alignItems: 'center',
    },
    sliderLabelContainer: {
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        marginBottom: -10,
    },
    lettersContainer: {
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap',
        columnGap: 65,
        rowGap: -25,
        justifyContent: 'center',
    },
    guessWordContainer: {
        marginTop: 30,
    },
    modalContainer: {
        top: 0,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '110%',
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
});
