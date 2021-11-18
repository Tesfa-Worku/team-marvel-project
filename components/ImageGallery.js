import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
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

const generateGallery = imageArr.map((img, index) => {
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
        </View>
        )
    }
)

return (
    <ScrollView style={styles.background}>
        <View style={styles.topContainer}>
            <Text>Images</Text>
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
        margin: 10,
    },
    imageRow: {
        height: 'auto',
        flexGrow: 1,
        alignItems: 'center',
        margin: 5,
    },
    spacing: {
        width: 5,
    },
});