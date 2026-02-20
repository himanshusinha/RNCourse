import { View, Button, Text, TouchableOpacity } from 'react-native';
import React, { FC, useState } from 'react';
/*  The React useState Hook allows us to track state in a function component */
const State: FC = () => {
  const [bgColor, setBgColor] = useState('red');
  const [switchOff, setSwitchOff] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'Himanshu',
    email: 'himanshusinha011@gmail.com',
    age: 35,
  });

  const handleDetails = () => {
    setUserInfo({
      name: 'Dakshit',
      email: 'dakshit@gmail.com',
      age: 6,
    });
    setBgColor('green');
  };

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <View style={{ padding: 10, backgroundColor: bgColor }}>
        <Text style={{ color: bgColor ? 'white' : 'black' }}>
          Name: {userInfo.name}
        </Text>
        <Text style={{ color: bgColor ? 'white' : 'black' }}>
          Email: {userInfo.email}
        </Text>
        <Text style={{ color: bgColor ? 'white' : 'black' }}>
          Age: {userInfo.age}
        </Text>
        <TouchableOpacity onPress={() => setSwitchOff(!switchOff)}>
          <Text style={{ color: bgColor ? 'white' : 'black' }}>
            {switchOff ? 'Off' : 'On'}
          </Text>
        </TouchableOpacity>
      </View>

      <Button title="Change Details" onPress={handleDetails} />
    </View>
  );
};

export default State;
