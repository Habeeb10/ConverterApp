import React from "react";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Convertercard } from "./convertercard";
import { useState, useEffect } from "react";
import { Modalcard } from "./modalcard";
import { Input } from "./input";
import Modal from "react-native-modal";
import * as colors from "../../component/common/colors";

export default function Converter() {
  const [modal, setModalState] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://currencyconverter.p.rapidapi.com/availablecurrencies", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setData(res.items);
      })
      .catch((error) => console.error(error));
  };

  const _renderItem = ({ item }) => {
    const { id, description } = item;
    return <Modalcard id={id} description={description} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View>
        <Input placeHolder="input amount here" />
        <Text style={styles.conv}>FROM</Text>
        <Convertercard
          title="Select currency here"
          onPress={() => setModalState(true)}
        />
        <Text style={styles.conv}>TO</Text>
        <Convertercard
          title="Select currency here"
          onPress={() => setModalState(true)}
        />
        <View style={styles.convertbox}>
          <TouchableOpacity>
            <Text style={styles.convert}>Convert</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        visible={modal}
        transparent={true}
        backdropOpacity={0.2}
        hasBackdrop
      >
        <View style={styles.modalBox}>
          <Text onPress={() => setModalState(false)} style={{ height: 30 }}>
            CLOSE
          </Text>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={_renderItem}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  convert: {
    fontSize: 18,
    color: colors.white,
  },
  convertbox: {
    backgroundColor: colors.orange,
    width: "95%",
    borderRadius: 5,
    alignItems: "center",
    paddingHorizontal: 10,
    height: 70,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 40,
  },
  conv: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 20,
    fontWeight: "bold",
    color: colors.orange,
  },
  container: {
    flex: 1,
  },
  modalBox: {
    // position: "absolute",
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
    backgroundColor: colors.white,
    // height: 240,
    // marginHorizontal: 15,
    borderRadius: 5,
    marginTop: 30,
    height: "100%",
    width: "100%",
    opacity: 0.9,
  },
  modalContainer: {
    // position: "absolute",
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
  },
});
