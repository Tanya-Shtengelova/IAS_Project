import React, { useState} from 'react'
import { UseContext } from '../Contract/Context'
import {Link} from 'react-router-dom'
import nazad from '../nazad.svg'

const Mai =()=> {
    const { web3, Contract } = UseContext()// глобальные переменные
    let [password, passwords] = useState('')// Пароль
    let [password2, passwords2] = useState('')// Пароль
    const [name, names] = useState('')// Имя
    const [login, logins] = useState('')

    // Регистрация !!!
    async function Registration() {
        if (password == password2){
            setTimeout(async()=>{
                let a = await web3.eth.personal.newAccount(password)
                await web3.eth.personal.unlockAccount(web3.eth.accounts[0], "")
                await web3.eth.sendTransaction({from: web3.eth.accounts[0], to: a,  value: "1000000000000000000000"})
                await web3.eth.personal.unlockAccount(a,password)
                await Contract.methods.Registration(name, login).send({ from:a }).then(console.log)
                 names(""); passwords(""); passwords2(""); logins("")
                alert("Регистрация прошла успешно!")
            })
   
        }else{alert('Ошибка, пароли не совпадают!');}
    }

    return (
        <>
        <br/>
        {<div style={{ float: "right", marginRight: "20px" }}><Link to="./Main" ><li className="button2"><img src={nazad} width="60" alt=""/></li></Link ></div>}<br/>

        <div style={{ color: "#6f6582" }}><center><h2>РЕГИСТРАЦИЯ</h2></center></div>

        {<div style={{ marginLeft: "780px" }}>
                <p>
                    <lable>Имя</lable><br />
                    <input type="text" value={name} onChange={e => names(e.target.value)} /><br />
                    <label>Логин </label><br/>
                    <input type="text" value={login} onChange={e => logins(e.target.value)} /><br />
                    <label>Пароль </label><br/>
                    <input id="password-input" type="password" value={password} onChange={e => passwords(e.target.value)} /><br />
                    <label>Подтверждение пароля </label><br/>
                    <input id="userPassword" type="password" placeholder="Повторно введите пароль" value={password2} onChange={e => passwords2(e.target.value)} /><br />
                    <br/><button className="button" href='#' onClick={() => Registration()}>Зарегистрироваться</button><br />
                </p>
        </div>}

        

        </>)
}
export default Mai