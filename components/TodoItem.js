import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TodoItem(props) {    
    return (     
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal : 25,
                paddingVertical : 10,
            }}>
            <TouchableOpacity 
                onPress={()=>props.onCheck(props.item._id) }
                style={{  flex : 2 }}>
                <Ionicons 
                    name={ props.item.completed ? "md-checkbox" : "md-square-outline" }
                    size={23} />                               
            </TouchableOpacity>
            <View style={{ flex: 12 }}>                                  
                <TextInput 
                    placeholder="What's in your mind? "  
                    onChangeText={(new_title) => props.onUpdate(new_title, props.item._id) }
                    value={props.item.title} />                                  
            </View>
            <TouchableOpacity  style={{  flex : 1 }} >
                <Ionicons name="md-trash" size={23} 
                onPress={()=>props.onDelete(props.item._id) }/>
            </TouchableOpacity>
        </View>             
    );
}