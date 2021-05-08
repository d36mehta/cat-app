import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Platform } from 'react-native'


const FactsPageComp = ({ catdata }) => {
    const [curr, setCurr] = useState(catdata.currfact);

    const setCurrentFact = () =>{
        const newCurr = (curr + 1)%catdata.total;
        setCurr(newCurr);
    };

    return (
        <View style={styles.container} >
            <View style={styles.title}> 
                <Text style={styles.textTitle}>Cat Facts!</Text>
            </View>
            <View style={styles.gifView}>
                <Image style={styles.gif} source={{uri:"https://media.giphy.com/media/l0HlKjAZTc6NHCSdy/source.gif"}}/>
            </View>
            <View style={styles.textBox}> 
                <Text style={styles.textCat}>{catdata.catfacts[curr]}</Text>
            </View>
            <View style={styles.btn}>
                <Button onPress={() => setCurrentFact()} 
                title="Next Fact"
                color={Platform.OS == 'ios' ? "#FFF" : "#000"}
                fontFamily="Futura"
                />
            </View>
        </View>
    );
};
export default FactsPageComp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: '#FEC9F1',
        alignItems: 'center',
        justifyContent: 'center',
      },
    gifView: {
        width: "100%",
        justifyContent: 'center',
        top: "-15%"
    },
    gif:{
        width: 480,
        height: 267,
    },
    textTitle: {
        textAlign: "center",
        color: "#948D9B",
        fontSize: 50,
        letterSpacing: 5,
        textShadowColor: "#706B75",
        textShadowRadius: 1,
        fontFamily: "Futura-MediumItalic",
    },
    title: {
        top: "-10%"
    },
    textCat: {
        textAlign: "center",
        color: "#B279A7",
        fontSize: 20,
        fontFamily: "Futura",
    },
    textBox: {
        paddingTop: "10%",
        marginLeft: "5%",
        marginRight:"5%",
        bottom: Platform.OS == 'ios' ? "30%" : "20%",
        position: "absolute",
    },
    btn: {
        bottom: "-10%",
        backgroundColor: "#948D9B",
        borderRadius: 4
    }
});
