import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  let count = 0;
  const [status, setStatus] = useState(false);
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  // const showData = (name, mt,img) => {
  //   return 'Tên : ' +name+ ', Mô tả : '+ mt+' Link ảnh : '+img;
  // }
  function getData(val) {
    setData(val.target.value)
    setPrint(false)
    console.warn(val.target.value)
  }
  return (

    <View style={styles.container}>
      <Text id='a' style={styles.text}>Tên : Đỗ Trường Sinh</Text>
      <Text id='b' style={styles.text}>MSV: PH27866</Text>
      

      <Button
        title={`${status ? 'Ẩn' : 'Thêm mới'}`}
        onPress={() => setStatus(!status)}
      />
      {
        status
          ? <>

            {/* const prompt = require('prompt-sync')(); */}
            <TextInput onChange={getData} id='name' style={styles.borders} placeholder='Nhập tên' />
            <TextInput id='mt' style={styles.borders} placeholder='Mô tả' />
            <TextInput id='img' style={styles.borders} placeholder='Link ảnh' />

            <Button
              title={'Huỷ'}
              style={styles.btn}
              onPress={() => setStatus(!status)}
            />
            <Button title='Lưu'
              style={styles.right}
              onPress={() => setPrint(true)}
            />

            {
              print ?
                <Text>{data}</Text>
                : null
            }





          </>
          : null
      }
      <StatusBar style="auto" />
    </View>


  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    marginTop: 15,
    padding: 15
  },
  text: {
    color: "red",
    fontSize: 20,
  },
  left: {
    marginLeft: 10,
    flex: 1
  },
  right: {
    marginRight: 10,
    flex: 1
  },
  borders: {
    width: 300,
    height: 50,
    padding: 5
  },
  btn: {
    width: 100,
    backgroundColor: "yellow"
  }

});
