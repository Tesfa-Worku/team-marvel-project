import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    ScrollView,
    Image
} from 'react-native';
import { media } from './WPAPI';

export default function ImageGallery() {
    const [imageArr, setImageArr] = useState([]);
    useEffect(
        () => {
            media()
            .then(
                (data) => setImageArr(data)
            )
        },
        []
    )
    console.log(imageArr);
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
    const imgWidth = 300;
    const imgHeight = (img.media_details.height / img.media_details.width) * imgWidth;
    
    return(
        <View
            key={index} >
            <Image
                style={{width: imgWidth, height: imgHeight}}
                source={img.source_url}
            />
            <Button
                key={index}
                onPress={() => deleteImage(index)}
                title='Delete'
            />
        </View>
        )
    }
)

return (
    <View style={styles.container}>
        <Text>Images</Text>
        <ScrollView>
            {generateGallery}
        </ScrollView>
        <Button
            onPress={uploadImage}
            title='Upload'
        />
        <Button
            onPress={sendImage}
            title='Send'
        />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
        height: 600,
        width: 400,
        minHeight: '100%',
        minWidth: '100%',
        padding: 10,
    },
});