import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: 79,
    },
    headerLogo: {
        fontSize: 16,
        fontWeight: '500',
        borderRadius: 50,
        backgroundColor: Colors.secondaryColors.gray07Neutral,
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    notificationContainer: {
        position: 'relative',
    },
    badge: {
        position: 'absolute',
        right: -4,
        top: -4,
        backgroundColor: Colors.primaryColors.bluePrimary,
        borderRadius: 50,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: Colors.secondaryColors.whiteNeutral,
        fontSize: 10,
        fontWeight: '700',
    },
});

export default styles;
