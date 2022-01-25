import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default Home = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=1')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
  }, []);

  const renderItem=()=>{
    <View style={styles.itemcontainer}>
    <Text style={{fontSize:15,color:"black"}}>{item.name}</Text>
    <Text>{item.email}</Text>
  </View>
  }

  return (

    <View style={{ flex: 1, padding: 24 }}>
        <View style={styles.redvew}>
          <FlatList style={{width:"100%"}} data={data} 
          renderItem={renderItem}/>
        </View>
    </View>
  );
};

const styles=StyleSheet.create({
  itemcontainer:{
    width:"100%",
    padding:20,
    backgroundColor:"#fff",
    borderWidth:1,
    borderRadius:20,
    elevation:10,
    marginTop:10
  }
})