import React, {Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image, TextInput, ScrollView, TouchableWithoutFeedback} from 'react-native';
import Places from './Places';

class HomePage extends Component {
    constructor(props){
        super(props)
        this.rio = new Places("Some Beach in Rio de Janeiro", require('../assets/beach.jpg'), "Rio de Janeiro, Brazil", 100, "Este playa es muy preciosa. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." );
        this.cancun = new Places("Some Beach in Cancun", require('../assets/beach.jpg'), "Cancun, Mexico", 120, "Este playa es muy preciosa. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." );
    }
    render(){
        return(
            <View>
                <SafeAreaView></SafeAreaView>
                <View style={styles.homeHeader}>
                    <View style={{flex: 1}}>

                    </View>
                    <View style={{flex: 1, alignItems: "flex-end"}}>
                        <Image source={require("../assets/bell.png")} style={styles.bell}></Image>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.homeBody}>
                            <View>
                                <View style={styles.homeBody}>
                                    <Text style={styles.homeHeaderText}>Where are you</Text>
                                    <Text style={styles.homeHeaderText}>going?</Text>
                                    <View>
                                        <TextInput style={styles.textinput} placeholder="E.g: New York, United States" placeholderTextColor={"grey"}></TextInput>
                                    </View>

                                    <TouchableWithoutFeedback onPress={()=> this.props.navigation.navigate('Info', {destination: this.rio})}>
                                        <View style={styles.destination}>
                                            <Image source={this.rio.image} style={styles.destinationImage}></Image>
                                            <View style={styles.destinationBody}>
                                                <Text style={{flex: 1, fontSize: 17, fontWeight: '500'}}>{this.rio.name}</Text>
                                                <Text style={{flex: 1, fontSize: 15, fontWeight: '500', color: 'silver'}}>{this.rio.location}</Text>
                                                <Text style={{flex: 1, fontSize: 17, fontWeight: '700'}}>${this.rio.price}/night</Text>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>

                                    <TouchableWithoutFeedback onPress={()=> this.props.navigation.navigate('Info', {destination: this.cancun})}>
                                        <View style={styles.destination}>
                                            <Image source={this.cancun.image} style={styles.destinationImage}></Image>
                                            <View style={styles.destinationBody}>
                                                <Text style={{flex: 1, fontSize: 17, fontWeight: '500'}}>{this.cancun.name}</Text>
                                                <Text style={{flex: 1, fontSize: 15, fontWeight: '500', color: 'silver'}}>{this.cancun.location}</Text>
                                                <Text style={{flex: 1, fontSize: 17, fontWeight: '700'}}>${this.cancun.price}/night</Text>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>

                                    <TouchableWithoutFeedback onPress={()=> this.props.navigation.navigate('Info', {destination: this.rio})}>
                                        <View style={styles.destination}>
                                            <Image source={this.rio.image} style={styles.destinationImage}></Image>
                                            <View style={styles.destinationBody}>
                                                <Text style={{flex: 1, fontSize: 17, fontWeight: '500'}}>{this.rio.name}</Text>
                                                <Text style={{flex: 1, fontSize: 15, fontWeight: '500', color: 'silver'}}>{this.rio.location}</Text>
                                                <Text style={{flex: 1, fontSize: 17, fontWeight: '700'}}>${this.rio.price}/night</Text>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>

                                    <TouchableWithoutFeedback onPress={()=> this.props.navigation.navigate('Info', {destination: this.cancun})}>
                                        <View style={styles.destination}>
                                            <Image source={this.cancun.image} style={styles.destinationImage}></Image>
                                            <View style={styles.destinationBody}>
                                                <Text style={{flex: 1, fontSize: 17, fontWeight: '500'}}>{this.cancun.name}</Text>
                                                <Text style={{flex: 1, fontSize: 15, fontWeight: '500', color: 'silver'}}>{this.cancun.location}</Text>
                                                <Text style={{flex: 1, fontSize: 17, fontWeight: '700'}}>${this.cancun.price}/night</Text>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                            </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bell: {
        height: 30,
        width: 30,
        marginRight: 20,
    },
    destination: {
        flexDirection: "row",
        marginTop: 40,
    },
    destinationBody: {
        flex: 3,
        paddingLeft: 20,
        paddingTop: 5,
        flexDirection:"column",
    },
    destinationImage: {
        flex: 2,
        height: 150,
        borderRadius: 10,
    },
    homeBody: {
        width: '100%',
        paddingLeft: '1.5%',
        paddingRight: '1.5%',
        marginTop: 10,
    },
    homeHeader: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: "row",
        paddingTop: 40,
        paddingBottom: 10,
    },
    homeHeaderText: {
        fontSize: 30,
        fontWeight: '500',
    },
    textinput: {
        height: 40,
        marginTop: 40,
        marginBottom: 10,
        backgroundColor: "silver",
        paddingLeft: 10,
    }
})

export default HomePage