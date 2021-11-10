import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    ScrollView,
} from 'react-native';
import { WP_GET } from './WPAPI';

export default function ImageGallery() {
    const [imageArr, setImageArr] = useState([]);
    useEffect(
        () => {
            WP_GET('media')
            .then(
                (data) => setImageArr(data)
            )
        },
        []
    )
    const [imageInput, setImageInput] = useState('');

const uploadImage = () =>{
// wordpress API
}

const sendImage = () => {
    setImageArr([...imageArr, {image: imageInput}]);
    setImageInput('');
}

const deleteImage = (index) => {
    setImageArr(
        imageArr.filter((image, selected) => selected != index)
        );
}

const generateGallery = imageArr.map((img, index) => {
    // imgWidth: 40vh
    // const imgWidth = document.documentElement.clientHeight * 0.40;
    const imgWidth = 250;
    const imgHeight = (img.media_details.height / img.media_details.width) * imgWidth;
    
    return(
        <View key={index}>
            <View
                style={styles.imageRow}
                key={index} >
                <Image
                    style={{width: imgWidth, height: imgHeight}}
                    source={{uri: img.source_url}}
                />
            </View>
            <View style={styles.deleteButton}>
                <Button
                    color='#F0131E'
                    key={index}
                    onPress={() => deleteImage(index)}
                    title='Delete'
                />
            </View>
        </View>
        )
    }
)

return (
    <ScrollView style={styles.background}>
        <View style={styles.topContainer}>
            <Text>Images</Text>
            <View style={styles.buttonContainer}>
                <Button
                    color='#F0131E'
                    onPress={uploadImage}
                    title='Upload'
                />
                <View style={styles.spacing} />
                <Button
                    color='#F0131E'
                    onPress={sendImage}
                    title='Send'
                />
            </View>
        </View>
        <View style={styles.imageContainer}>   
            {generateGallery}
        </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#fff',
    },
    topContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
        minHeight: '100%',
        minWidth: '100%',
    },
    imageContainer: {
        backgroundColor: '#fff',
        display: 'flex',
        // flexWrap: 'wrap',
        // flexDirection: 'row',
        margin: 10,
    },
    imageRow: {
        height: 'auto',
        flexGrow: 1,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    deleteButton: {
        width: '20%',
        alignSelf: 'center',
        margin: 5,
    },
    spacing: {
        width: 5,
    },
});