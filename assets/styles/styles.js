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
  },
  dish: { fontSize: 18, fontWeight: "600" },
  course: { color: "#333", fontSize: 14, marginTop: 2 },
  price: { color: "#007BFF", fontWeight: "bold", marginTop: 2 },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    padding: 8,
    marginBottom: 12,
    borderRadius: 6,
    backgroundColor: "#fff",
  },
  desc: {
  fontSize: 14,
  color: "#555",
  marginVertical: 4,
},
statsBox: {
  backgroundColor: "#fff",
  padding: 12,
  borderRadius: 10,
  marginVertical: 10,
  elevation: 2,
},
statText: {
  fontSize: 16,
  color: "#333",
  marginVertical: 2,
},


});
