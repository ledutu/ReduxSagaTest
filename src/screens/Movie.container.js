import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Card } from '../components';

const Info = ({title, year}) => {
    return (
        <View style={{padding: 10, margin: 10, borderColor: '#333333', borderWidth: 1, borderRadius: 10}}>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold'}}>Title: </Text>
                <Text>{title}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold'}}>Year: </Text>
                <Text numberOfLines={5}>{year}</Text>
            </View>
        </View>
    )
}

export default class ScreenContainer extends Component {
    render() {
        const { movieName, year } = this.state;
        console.log(this.props.movies)
        return (
            <View>
                <Card>
                    <Text style={{ fontSize: 20, marginBottom: 20 }}>New moview information</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder={'Enter new movie name'}
                        placeholderTextColor={'grey'}
                        onChangeText={text => this.setState({ movieName: text })}
                        value={movieName}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder={'Release year'}
                        placeholderTextColor={'grey'}
                        onChangeText={text => this.setState({ year: text })}
                        value={year}
                    />

                    <View style={styles.horizatal}>
                        <TouchableOpacity
                            style={styles.button}
                            activeOpacity={0.8}
                            onPress={() => this.props.onFetchMovies('asc')}
                        >
                            <Text style={styles.text}>Fetch movie</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.button}
                            activeOpacity={0.8}
                            onPress={() => this.props.onFetchMovies}
                        >
                            <Text style={styles.text}>Add movie</Text>
                        </TouchableOpacity>
                    </View>
                </Card>

                <FlatList
                    data={this.props.movies}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <Info title={item.title} year={item.userId}/>}
                />

            </View>
        );
    }
};

const styles = StyleSheet.create({
    textInput: {
        fontSize: 14,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: '#333333',
        borderRadius: 3,
        marginBottom: 10,
    },
    horizatal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#e36',
        borderRadius: 10,
    },
    text: {
        color: '#ffffff',
    }
});
