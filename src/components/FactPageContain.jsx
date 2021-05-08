import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import Axios from 'axios';
import FactsPageComp from './FactsPageComp';

export class FactPageContain extends Component {
    state = {
        currfact: 0,
        total: 0,
        catfacts: [],
        isLoading: true
    };

    componentDidMount = async () => {
        const repsonse = await Axios.get("https://cat-fact.herokuapp.com/facts");
        let catfacts = [];
        let total = 0;
        for (let i in repsonse.data){
            total++;
            catfacts.push(repsonse.data[i].text);
        }
        this.setState({
            catfacts: catfacts,
            isLoading: false,
            total: total
        });
    };

    render(){
        return this.state.isLoading ? (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#E899DC" />
        </View>) 
        : <FactsPageComp catdata={this.state} />;
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: '#FEC9F1',
        alignItems: 'center',
        justifyContent: 'center',
      },
});