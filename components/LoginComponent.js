import React, {Component} from "react";
import {StyleSheet,View,Image, Text ,TextInput,TouchableOpacity, KeyboardAvoidingView, AsyncStorage} from 'react-native';
 
export default class LoginComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            passengerName:'',
            seatNo:'',
        }
    }

        render() {
            return (
                <KeyboardAvoidingView>
                <View style={styles.container}>
                   <Text style={styles.title}>Please enter your credentials
                   </Text>
                    <TextInput
                     placeholder="Passenger Name"
                    //  placeholderTextColor="rgba(255,255,255,0.7)"
                    placeholderTextColor="black"
                     style={styles.input}
                     onChangeText = {(passengerName) => this.setState({passengerName})}
                     underlineColorAndroid='transparent'
                    />
                    <TextInput
                     placeholder="Seat Number"
                    //  placeholderTextColor="rgba(255,255,255,0.7)"
                    placeholderTextColor="black"
                     style={styles.input}
                     onChangeText = {(seatNo) => this.setState({seatNo})}
                     underlineColorAndroid='transparent'
                    />
                    <TouchableOpacity style={styles.buttonContainer} onPress={this.login}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
                </KeyboardAvoidingView>
        );
    }
    login = () => {
        alert(this.state.passengerName);
        alert(this.state.seatNo);
        fetch('https://localhost', {
            method:'POST',
            headers:{
                'Accept':'application.json',
                'Content-Type':'application.json',
            },
            body: JSON.stringify({
                passengerName:this.state.passengerName,
                seatNo:this.state.seatNo,
            })
        })
        .then((response)=>response.json())
        .then((res) => {
            if(res.success === true){
                AsyncStorage.setItem('passenger',res.passenger);
                this.props.navigation.navigate('');
            }else{
                alert(res.message);
            }
        })
        .done();
    }
}

const styles = StyleSheet.create({
    container:{
        paddingBottom:500,
        backgroundColor:'white',
    },
    input:{
        height:40,
        backgroundColor:'#D6CFCB',
        marginBottom:30,
        color:'black',
        paddingHorizontal:10,
        borderColor:'blue',
    },
    buttonContainer:{
        backgroundColor:'#1D2BC0',
        paddingVertical:10
    },
    buttonText:{
        textAlign:'center',
        color:'#FFFFFF',
    },
    title:{
        color:'black',
        marginTop:50,
        marginBottom:50,
        width:300,
        paddingLeft:100,
        opacity:0.9,
    }
})