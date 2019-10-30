import { Dimensions, Platform } from 'react-native'

const { height,width } = Dimensions.get('window')

// Remove the status bar height
// since the modal view does not cover this area
const ANDROID_MINUS_HEIGHT = 24

const DEFAULT_HEIGHT =
  Platform.OS === 'android' ? height - ANDROID_MINUS_HEIGHT : height


const guidelineBaseWidth = 375;
const actualDimensions =  {
    c_height:  (height<width) ? width : height,
    c_width: (width>height) ? height : width
};
const { c_width, c_height } = actualDimensions;
export const scale = size => c_width / guidelineBaseWidth * size;

export const getHeightPercent = (percentage: number) =>
  Math.round(DEFAULT_HEIGHT * (percentage / 100))

export declare const scale: (value: number) => number;