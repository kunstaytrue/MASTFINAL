import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fdf6f0", padding: 16 },
  logo: { width: 100, height: 100, alignSelf: "center", marginBottom: 10 },
  title: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  sub: { textAlign: "center", marginVertical: 10 },
  row: { flexDirection: "row", justifyContent: "space-around", marginBottom: 20 },
  card: {
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3,
  },
  rowCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 8,
    borderRadius: 10,
    elevation: 2,
  
