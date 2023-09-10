import { useCallback } from 'react';
import { View, Text } from 'react-native';
import Slider from 'rn-range-slider';
import { styles } from '../../styles';
import Thumb from './Thumb';
import Rail from './Rail';

type Props = {
    min: number;
    max: number;
    labels: number[];
    onValueChanged: (low: number, high: number) => void;
};

const RangeSlider = ({ min, max, labels, onValueChanged }: Props) => {
    const renderThumb = useCallback(() => <Thumb />, []);
    const renderRail = useCallback(() => <Rail />, []);
    const renderRailSelected = useCallback(() => null, []);
    const renderLabel = useCallback(() => null, []);
    const renderNotch = useCallback(() => null, []);

    return (
        <View style={styles.sliderContainer}>
            <View style={styles.sliderLabelContainer}>
                {labels.map((label) => {
                    return (
                        <View>
                            <Text
                                style={{
                                    ...styles.secondaryText,
                                    fontSize: 48,
                                    lineHeight: 48,
                                    textShadowColor: 'rgba(0, 0, 0, 0)',
                                }}
                            >
                                {label}
                            </Text>
                        </View>
                    );
                })}
            </View>
            <Slider
                style={styles.slider}
                min={min}
                max={max}
                step={1}
                floatingLabel={false}
                disableRange
                onValueChanged={onValueChanged}
                renderThumb={renderThumb}
                renderRail={renderRail}
                renderRailSelected={renderRailSelected}
                renderLabel={renderLabel}
                renderNotch={renderNotch}
            />
        </View>
    );
};

export default RangeSlider;
