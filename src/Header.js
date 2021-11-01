// import React from 'react'; 
// import {View, StyleSheet, Pressable, Text} from 'react-native';
// import SearchBar from './SearchBar';

// const Header = (props) => {
//   const pageArray = ['Profile', 'Friends', 'Images', 'Messages']
//   const pageList = pageArray.map(  
//     (page, index) => (
//       <Pressable onPress={() => console.log({page})} key={index}>
//         <Text>{page}</Text>
//       </Pressable>
//     )
//   );
//   return (
//   <View style={styles.header}>
//     <View style={styles.columns}>
//       <Text>Marvel Space</Text>
//       <SearchBar/>
//     </View>
//     <View style={styles.linkWrapper}>
//       {pageList}
//     </View>
//   </View>
//   )
// };
// const styles = StyleSheet.create ({
//   linkWrapper: {
//     flex:1,
//     flexDirection: "row",
//     justifyContent: 'space-around',
//     padding: 10,
//   },
//   columns: {
//     flex:1,
//     flexDirection: "row",
//     justifyContent: 'space-between',
//     padding: 10,
//   },
// });

// export default Header;
