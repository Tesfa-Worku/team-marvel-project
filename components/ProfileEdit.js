import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Image } from 'react-native';
import { users, media } from './WPAPIP';


export default function ProfileEdit () {
    const [userList, setUserList] = useState([]);
    useEffect(
        () => {
            users()
            .then(
                (data) => setUserList(data)
            )
        },
        []
    )

    const buildProfile = userList.map((user, index) => { })
}