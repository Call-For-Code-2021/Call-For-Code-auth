import React from "react";
import axios from 'axios'

async function user_login(id, password){
    axios({
        url: "http://charong.herokuapp.com/auth/login",
        method: "post",
        data: {
            id: id,
            password: password
        }
    })//데이터 구조 확인하기
}

async function user_get(){
    axios.get("https://charong.herokuapp.com/auth/login")
        .then((response) => {
            console.log(response.data);
        })
        .catch(function (error) {
            if (error.response) {
                // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
            else if (error.request) {
                // 요청이 이루어 졌으나 응답을 받지 못했습니다.
                // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
                // Node.js의 http.ClientRequest 인스턴스입니다.
                console.log(error.request);
            }
            else if(error.message) {
                console.log('Error', error.message);
            }
            else {
                // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
                console.log('Error', error.message);
            }
        }
    );
}

const login = () => {
    return (
        <div>
            <input placeholder="ID"/>
            <input type="password"/>
            <button type="submit" onClick={user_login}>로그인</button>
            <button type="submit" onClick={user_get}>확인</button>
        </div>
    )//알아서 input값 받아다가 function/auth에 있는 함수들 요청 할 것
}

export default login;