import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const ScanScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.scanFrame}>
        <Image
          source={{
            uri: "https://www.tropicana.com/images/products/tropicana-pure-premium-no-pulp-320.png",
          }}
          style={styles.productImage}
        />
        <View style={styles.topLine} />
        <View style={styles.bottomLine} />
      </View>
      <View style={styles.bottomCard}>
        <Image
          source={{
            uri: "https://www.tropicana.com/images/products/tropicana-pure-premium-no-pulp-320.png",
          }}
          style={styles.smallProductImage}
        />
        <Text style={styles.productName}>Lauren's Orange Juice</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  scanFrame: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    width: 200,
    height: 300,
  },
  topLine: {
    position: "absolute",
    top: -40,
    width: 250,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  bottomLine: {
    position: "absolute",
    bottom: -40,
    width: 250,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  bottomCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
    width: "90%",
  },
  smallProductImage: {
    width: 50,
    width: 50,
  },
  productName: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  addButton: {
    backgroundColor: "#007AFF",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: 20,
  },
});

export default ScanScreen;
