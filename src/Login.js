// import React from 'react';
// import { View, Text } from 'react-native';

// const LoginButton = () => {
//     return (
//         <View>
//             <Text>Login</Text>
//         </View>
//     );
// };

// export default LoginButton;

// <DrawerNavigation.Screen name="Friends" component={Friends} />
// <DrawerNavigation.Screen name="Images" component={Images} /> 
// <DrawerNavigation.Screen name="Messages" component={Messages} />
// <DrawerNavigation.Screen name="Profile" component={Profile} />



// return 
// <>
// <StatusBar barStyle="dark-content" />
// <SafeAreaView>
//   <ScrollView
//     contentInsetAdjustmentBehavior="automatic"
//     style={styles.scrollView}>
//     <Header />
//     <View>
//       <LoginButton
//         onLoginFinished={
//           (error, result) => {
//             if (error) {
//               console.log("login has error: " + result.error);
//             } else if (result.isCancelled) {
//               console.log("login is cancelled.");
//             } else {
//               setLoggedIn(true);
//               AccessToken.getCurrentAccessToken().then(
//                 (data) => {
//                   console.log(data.accessToken.toString());
//                   this.getPublicProfile();
//                 }
//               )
//             }
//         }
//     }
//     onLogoutFinished={() => {
//       console.log("logout.");
//       setLoggedIn(false);
//     }}/>
//   { isLoggedIn && <Card
//       title={profile.name}>
//       <Image
//         source={{ uri: profileImage }}
//         style={{ width: 50, height: 50 }}
//       />
//       <TouchableHighlight onPress={this.shareLinkWithDialog}>
//         <Text style={styles.shareText}>Share link with ShareDialog</Text>
//       </TouchableHighlight>
//     </Card>
//   }
// </View>
// </ScrollView>
// </SafeAreaView>
// </>
// };
