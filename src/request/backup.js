import React, { useState, useEffect } from 'react';
import axios from 'axios'

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

var id = document.getElementById("id").value;
var password = document.getElementById("password").value;

async function user_register(id, password){
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

    // const [users, setUsers] = useState(null);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    //
    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         try {
    //             // 요청이 시작 할 때 error 와 users 를 초기화
    //             setError(null);
    //             setUsers(null);
    //             // loading 상태를 true 로
    //             setLoading(true);
    //             const response = await axios.get(
    //                 'https://charong.herokuapp.com/auth/login?id='
    //             );
    //             setUsers(response.data); // 데이터는 response.data 안에.
    //             console.log(response.data);
    //         } catch (e) {
    //             setError(e);
    //         }
    //         setLoading(false);
    //     };
    //
    //     fetchUsers();
    // }, []);
    // if (loading) return <div>로딩중..</div>;
    // if (error) return <div>에러가 발생했습니다</div>;
    // if (!users) return null;

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
    )//알아서 input값 받아다가 function/auth에 있는 함수들 요청 할 것
}

export default Login;