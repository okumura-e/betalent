import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: 60,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        // marginBottom: 24,
        backgroundColor: Colors.secondaryColors.whiteNeutral,
    },
});

export default styles;
