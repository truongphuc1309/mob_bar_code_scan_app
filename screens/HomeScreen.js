import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.greeting}>
        <Text style={styles.greetingText}>Hello 👋 Ngô Phúc Trường</Text>
        <Image
          source={{
            uri: "https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/468747887_1245411566763554_6544406857164742968_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFpgXW1__Y7Rlk1HcqD-g9wsYXmw2okLTKxhebDaiQtMv3N88dpS-RGQi81J7II2wkxnIRFpzepg1Bm-QdX8dfL&_nc_ohc=h0jpiAFCCB4Q7kNvgHI14OF&_nc_oc=AdhiUBsYtOIORftlfZlh7QBYsy353XvJvR826r6h3XjHBomBHKO8OXoxpe8A1recmlY&_nc_zt=23&_nc_ht=scontent.fhan19-1.fna&_nc_gid=Ax0squV5ngeOyk7_muvlGh0&oh=00_AYCzXnesyH3YxQXCH8h7qGkgtAfIbX-Y-_GlTCIXrGXKLA&oe=67CAF879",
          }} // Thay bằng đường dẫn ảnh thực tế
          style={styles.profileImage}
        />
      </View>
      {/* Your Insights Section */}{" "}
      <Text style={styles.sectionTitle}>Your Insights</Text>
      <View style={styles.insights}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Scan")}
        >
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Icon name="barcode" size={30} color="#000" />
            <Text style={styles.cardTitle}>Scan new</Text>
            <Text style={styles.cardText}>Scanned 483</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.card}>
          <Icon name="warning" size={30} color="#000" />
          <Text style={styles.cardTitle}>Counterfeits</Text>
          <Text style={styles.cardText}>Counterfeited 32</Text>
        </View>
        <View style={styles.card}>
          <Icon name="checkmark" size={30} color="#000" />
          <Text style={styles.cardTitle}>Success</Text>
          <Text style={styles.cardText}>Checkouts 8</Text>
        </View>
        <View style={styles.card}>
          <Icon name="folder" size={30} color="#000" />
          <Text style={styles.cardTitle}>Directory</Text>
          <Text style={styles.cardText}>History 26</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  greeting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  insights: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    height: 176,
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 14,
    marginTop: 5,
  },
  cardText: {
    fontSize: 12,
    color: "#666",
  },
  explore: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  exploreText: {
    fontSize: 16,
  },
});

export default HomeScreen;
