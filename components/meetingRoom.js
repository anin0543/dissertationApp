import * as React from 'react';
import { View, Text,Image} from 'react-native';

const MeetingRoom  = ()=>{
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Text>Factory Screen</Text> */}
      <Image
        source={{ uri: "https://reactjs.org/logo-og.png" }}
        style={{ width: 400, height: 400 }}
      />
    </View> 
    )
}
export default MeetingRoom ;