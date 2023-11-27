/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import React, { useState } from 'react';
// import {
//   Button,
//   FlatList,
//   ScrollView,
//   SectionList,
//   StyleSheet,
//   Text,
//   TextInput,
//   View
// } from 'react-native';
// import CompanyData from './components/CompanyData';
// import ExStyle from './style.js'

// const App = () => {
//   let [name, setName] = useState("")
//   let [email, setEmail] = useState("")
//   let [password, setPassword] = useState("")
//   let [display, setDisplay] = useState(false)
//   let [data, setData] = useState([
//     {
//       id: 1,
//       name: 'Sunny1',
//       data: ['PHP', 'REACTJS', 'ANGULAR']
//     },
//     {
//       id: 2,
//       name: 'Sunny2',
//       data: ['PHP2', 'REACTJS2', 'ANGULAR2']
//     },
//     {
//       id: 3,
//       name: 'Sunny3',
//       data: ['PHP3', 'REACTJS3', 'ANGULAR3']
//     },
//   ])

//   const resetFormData = () => {
//     setDisplay(false)
//     setName('')
//     setPassword('')
//     setEmail('')
//   }

//   return (
//     <View>
//       {/* <CompanyData name="sunny" /> */}
//       {/* <Text style={{ fontSize: 30 }}>Button And onPress Event {name}</Text>
//       <Button title='On Press' color={'black'} onPress={() => setName(name + 1)} />
//       <Button title='On Press' color={'red'} onPress={() => setName(name - 1)} />
//       <User name={name} />
//       <Text style={style.textBox}>Text for Styling</Text>
//       <Text style={style.textBox}>Text for Styling</Text>
//       // <Text style={ExStyle.textBox}>Text for Styling</Text> */}
//       {/* <Text style={{ fontSize: 30 }}>Handle Text Input</Text>
//       <Text style={{ fontSize: 30 }}>Your name : {name}</Text>
//       <TextInput
//         style={style.textInput}
//         placeholder='Enter Name'
//         value={name}
//         onChangeText={(text) => setName(text)}
//       />
//       <Button title='Clear Input' onPress={()=> setName('')}/> */}
//       {/* <Text style={{ fontSize: 30 }}>Simple Form in React Native</Text>
//       <TextInput
//         style={style.textInput}
//         value={name}
//         placeholder='Enter User Name'
//         onChangeText={(text) => setName(text)}
//       />
//       <TextInput
//         style={style.textInput}
//         value={email}
//         placeholder='Enter Email'
//         onChangeText={(text) => setEmail(text)}
//       />
//       <TextInput
//         style={style.textInput}
//         value={password}
//         placeholder='Enter Password'
//         secureTextEntry={true}
//         onChangeText={(text) => setPassword(text)}
//       />
//       <View style={{ marginBottom: 10 }}>
//         <Button color={'green'} title='Print Details' onPress={() => setDisplay(!display)} />
//       </View>
//       <Button title='Clear Details' onPress={resetFormData} /> */}
//       {/* <View style={{ marginBottom: 30 }}> */}
//       {/* {
//           display && <View>
//             <Text style={{ fontSize: 30 }}>Name is : {name}</Text>
//             <Text style={{ fontSize: 30 }}>Email is : {email}</Text>
//             <Text style={{ fontSize: 30 }}>Password is : {password}</Text>
//           </View>
//         } */}
//       {/* <ScrollView>
//           {data.map((it, index) => {
//             return (
//               <Text style={style.listView}>{it.name} and {index}</Text>
//             )
//           })}
//         </ScrollView> */}
//       {/* <FlatList
//           data={data}
//           renderItem={({ item }) => <View>
//             <Text key={item.id} style={style.listView}>{item.name}</Text>
//             <Text key={item.id + 1.6} style={style.listView}>{item.id}</Text>
//           </View>}
//           keyExtractor={item => item.id}
//         /> */}

//       {/* <Text style={{ fontSize: 31 }}>Grid With Dynamic Data</Text>
//         <ScrollView >
//           <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
//             {data.map((it) =>
//               <Text style={style.textView}>{it.name}</Text>
//             )}
//           </View>
//         </ScrollView> */}
//       {/* </View> */}
//       {/* <Text style={{ fontSize: 31 }}>Component in loop with Flatlist</Text>
//       <FlatList
//         data={data}
//         renderItem={({ item }) =>
//           <User item={item} />
//         }
//       /> */}
//       <Text style={{ fontSize: 31 }}>Component in loop with SectionList </Text>
//       <SectionList
//         sections={data}
//         renderItem={({ item }) =>
//           <Text
//             style={{ fontSize: 20, marginLeft: 20, color: 'blue' }}>{item}</Text>}
//         renderSectionHeader={({ section: { name } }) => (
//           <Text style={{ fontSize: 25, color: 'red' }}>{name}</Text>)}
//       />
//     </View>
//   );
// }

// const style = StyleSheet.create({
//   textBox: {
//     color: '#fff',
//     fontSize: 25,
//     backgroundColor: 'blue',
//     marginBottom: 10,
//     padding: 10,
//     height: 100,
//     textAlignVertical: 'center',
//     textAlign: 'center',
//     borderRadius: 10,
//     borderWidth: 2,
//     borderColor: 'red'
//   },
//   textInput: {
//     fontSize: 18,
//     color: 'red',
//     borderWidth: 2,
//     borderColor: 'red',
//     margin: 18
//   },
//   listView: {
//     fontSize: 24,
//     padding: 10,
//     color: '#fff',
//     backgroundColor: 'blue',
//     borderColor: 'black',
//     margin: 10
//   },
//   textView: {
//     color: '#fff',
//     fontSize: 25,
//     backgroundColor: 'blue',
//     margin: 5,
//     padding: 5,
//     width: 120,
//     height: 120,
//     textAlignVertical: 'center',
//     textAlign: 'center',
//   }
// })


// const User = (props: any) => {
//   return (
//     <View style={{ backgroundColor: 'green', padding: 5 }}>
//       <Text style={{ fontSize: 30 }}>Child Component {props.item.name}</Text>
//       <Text style={{ fontSize: 30 }}>Child Component {props.item.id}</Text>
//     </View>
//   )
// }
// export default App;








import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 30, color: 'red' }}>Hello its 3:30 min</Text>
        <Button title='Press It' color={'red'} />
      </View>
    )
  }
}
