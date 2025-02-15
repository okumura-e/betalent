import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  listHeader: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#EDEFFB",
    borderWidth: 1,
    borderColor: "#DFDFDF",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  columnHeader: {
    fontSize: 14,
    color: "#666",
    width: 60,
  },
  nameColumn: {
    flex: 1,
  },
  lastColumn: {
    width: 20,
    fontWeight: "500",
    fontSize: 16,
    color: "#1C1C1C",
  },
  employeeItem: {
    paddingHorizontal: 1,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: "#DFDFDF",
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
    borderColor: "#DFDFDF",
    borderStyle: "dashed",

  },
  detailLabel: {
    fontSize: 14,
    color: "#1C1C1C",
    fontWeight: "500",
  },
  detailValue: {
    color: "#1C1C1C",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19.09,
    textAlign: "right",
  },
});

export default styles;