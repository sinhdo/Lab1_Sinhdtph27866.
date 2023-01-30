import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView, TextInput, FlatList,Image, SafeAreaView } from 'react-native';
import { useState } from 'react';

export default function App() {
  let count = 0;
  const [status, setStatus] = useState(false);
  const [name, setName] = useState(null);
  const [mt, setMt] = useState(null);
  const [img, setImg] = useState(null);

  const [data, setData] = useState([]);
  const getAll = () => {
    setData([...data, { name, mt, img }]);
    setName('');
    setMt('');
    setImg
  };

  return (

    <View style={styles.container}>
      <Text style={styles.text}>Tên : Đỗ Trường Sinh</Text>
      <Text style={styles.text}>MSV: PH27866</Text>


      <Button
        title={`${status ? 'Ẩn' : 'Thêm mới'}`}
        onPress={() => setStatus(!status)}
      />
      {
        status
          ? <>

            {/* const prompt = require('prompt-sync')(); */}
            <TextInput id='name' onChangeText={Text => setName(Text)} style={styles.borders} placeholder='Nhập tên' />
            <TextInput id='mt' onChangeText={Text => setMt(Text)} style={styles.borders} placeholder='Mô tả' />
            <TextInput id='img' onChangeText={Text => setImg(Text)} style={styles.borders} placeholder='Link ảnh' />

            <Button
              title={'Huỷ'}
              style={styles.btn}
              onPress={() => setStatus(!status)}
            />
            <Button title='Lưu'
              style={styles.right}
              onPress={getAll}
            />
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <View>
                  <Text>Tên :{item.name}</Text>
                  <Text>Mô tả :{item.mt}</Text>
                  <Text>Link :{item.img}</Text>
                  
                </View>
              )}
              KeyE={(item, index) => index.toString()}
            >

            </FlatList>
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
  },
  productImage:{width:50,height:50}

});
