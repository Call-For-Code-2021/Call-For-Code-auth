import React from 'react';
import axios from 'axios';

// async function user_get(){
//     axios.get("https://charong.herokuapp.com/auth/login?id=asdffds")
//         .then((response) => {
//             console.log(response.data);
//         })
//         .catch(function (error) {
//             if (error.response) {
//                 // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
//                 console.log(error.response.data);
//                 console.log(error.response.status);
//                 console.log(error.response.headers);
//             }
//             else if (error.request) {
//                 // 요청이 이루어 졌으나 응답을 받지 못했습니다.
//                 // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
//                 // Node.js의 http.ClientRequest 인스턴스입니다.
//                 console.log(error.request);
//             }
//             else if(error.message) {
//                 console.log('Error', error.message);
//             }
//             else {
//                 // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
//                 console.log('Error', error.message);
//             }
//         }
//     );
// }

var id;
var password;

async function user_register(){
    var id = document.getElementById("id").value;
    var password = document.getElementById("password").value;
    console.log(id)
    console.log(password)
    await axios({
        method: "post",
        url: "https://charong.herokuapp.com/auth/login",
        data: {
            id:id,
            password:password
        }
    });
}

const Login = () => {
    return (
        <div>
            <input
                name="id"
                placeholder="ID"
                id={id}
                />
            <input
                name="password"
                type="password"
                id={password}
            />
            {/*<button type="submit" onClick={user_login}>로그인</button>*/}
            <button type="submit" onClick={user_register}>회원가입</button>
            {/*<button type="submit" onClick={user_get}>확인</button>*/}
            {/*<button onClick={onReset}>초기화</button>*/}
            {/*<div>*/}
            {/*    {users.map(user => (<div>{user.name}</div>))}*/}
            {/*</div>*/}
        </div>
    )
}

export default Login;