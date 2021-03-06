import React, {Component} from 'react';
import {View, Text, SafeAreaView, Image, StyleSheet, Platform, TouchableWithoutFeedback} from 'react-native';

class InfoPage extends Component {
    constructor(props){
        super(props)
        this.state = {
         destination: this.props.route.params.destination,  
        }
    }
    render(){
        return(
            <View>
                <SafeAreaView style={styles.safeareaview}></SafeAreaView>
                <View style={styles.commentheader}>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Home')}>
                        <Image source={require('../assets/backarrow.png')} style={{width: 25, height: 25,}}></Image>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.infoBody}>
                    <Image source={this.state.destination.image} style={{width: '100%',height: 300}}></Image>
                    <Text style={styles.name}>{this.state.destination.name}</Text>
                    <Text style={styles.location}>{this.state.destination.location}</Text>
                    <Text style={styles.price}>${this.state.destination.price}/night</Text>
                    <Text style={styles.details}>Details</Text>
                    <Text style={styles.info}>{this.state.destination.info}</Text>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    details: {
        fontSize: 18,
        fontWeight: '700',
        paddingTop: 30,
    },
    info: {
        paddingTop: 15, 
    },
    infoBody: {
        width: '100%',
        paddingLeft: '2.5%',
        paddingRight: '2.5%',
        paddingTop: '2.5%',
    },
    name: {
        fontSize: 20,
        fontWeight: '700',
        paddingTop: 30,
        paddingBottom: 20,
    },
    location: {
        fontWeight: '500',
        color: 'silver',
    },
    price: {
        fontSize: 18,
        fontWeight: '700',
        paddingTop: 20,
    },
    safeareaview: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    commentheader: {
        flexDirection: 'row',
        alignContent: 'flex-start',
        padding: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(0,0,0,0.1)',
    },
})

export default InfoPage