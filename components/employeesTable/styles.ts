import { StyleSheet } from "react-native";
import { Colors } from '../../constants/Colors';

const styles = StyleSheet.create({
  listHeader: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: Colors.primaryColors.bluePrimary,
    borderWidth: 1,
    borderColor: Colors.secondaryColors.gray10Neutral,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  columnHeader: {
    fontSize: 14,
    color: Colors.secondaryColors.whiteNeutral,
    width: 60,
  },
  nameColumn: {
    flex: 1,
  },
  lastColumn: {
    width: 10,
    justifyContent: "center",
    fontWeight: "500",
    fontSize: 16,
    color: Colors.secondaryColors.blackNeutral,
  },
  employeeTable: {
    paddingHorizontal: 20,
  },
  employeeItem: {
    paddingHorizontal: 1,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: Colors.secondaryColors.gray10Neutral,
    backgroundColor: Colors.secondaryColors.whiteNeutral,
  },
  employeeRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,

  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 12,
  },
  employeeName: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  detailsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  detailsContent: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  detailsAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  detailsInfo: {
    flex: 1,
  },
  detailRow: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 8,
    borderBottomWidth: 1,
    borderColor: Colors.secondaryColors.gray10Neutral,
    borderStyle: "dashed",

  },
  detailLabel: {
    fontSize: 14,
    color: Colors.secondaryColors.blackNeutral,
    fontWeight: "500",
  },
  detailValue: {
    color: Colors.secondaryColors.blackNeutral,
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19.09,
    textAlign: "right",
  },
});

export default styles;