import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";
import { isMobile } from 'react-device-detect';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondaryColors.whiteNeutral,
  },
  content: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    gap: 24,
  },
  titleContainer: {
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "Helvetica Neue",
    fontSize: 20,
    fontWeight: "500",
    marginLeft: 16,
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8FAFB",
    marginHorizontal: 16,
    borderRadius: 6,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 14,
  },
});

export default styles;
