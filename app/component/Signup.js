// import React, { useState, useEffect } from 'react';
// import { signup } from './firebase.js';
// import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

// function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     // ユーザー登録のメソッド
//     signUp = (e, p) => {
//         console.log(e.email, p);
//         signup(e.email, p);
//     }

//     return (
//         <View>
//             <View>
//                 <Text>メールアドレス</Text>
//                 <TextInput
//                     onChangeText={(e) => setEmail(e)}
//                     value={email}
//                     placeholder="メールアドレスを入力してください"
//                     placeholderTextColor="#777"
//                 />
//             </View>
//             <View>
//                 <Text>パスワード</Text>
//                 <TextInput
//                     onChangeText={(p) => setPassword(p)}
//                     value={password}
//                     placeholder="パスワードを入力してください"
//                     placeholderTextColor="#777"
//                 />
//             </View>

//             <View style={{ paddingTop: 32 }}>
//                 <Button
//                     title="送信"
//                     onPress={() => signUp(email, password)} // ユーザー登録メソッドを実行
//                 />
//             </View>
//         </View>
//     )
// }

// export default Login;

