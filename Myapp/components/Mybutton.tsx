import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'

const Mybutton = ({title , onPress}) => {
  return (
    
     <TouchableOpacity activeOpacity={0.8}
      style={{
        backgroundColor:"orange" ,
         paddingHorizontal:30,
         paddingVertical:15,
        borderRadius:10,

      }}
      
      onPress={onPress}
      >
        <Text style={{fontSize:16, color:"white" , fontWeight:"bold"}}>{title}</Text>
     </TouchableOpacity>
   
  )
}

export default Mybutton;