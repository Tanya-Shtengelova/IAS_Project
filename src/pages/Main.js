import React, { useState, useEffect } from 'react'
import { UseContext } from '../Contract/Context'
import vhod from '../vhod.svg'
import { Link, useHistory } from 'react-router-dom'
import nazad from '../nazad.svg'

const Main = () => {

    const { web3, Contract } = UseContext()// глобальные переменные
    const [value_acc, setvalue] = useState('')// побочный акк
    const [password, passwords] = useState('')// Логин
    const [log, logs] = useState('')
    const [a, a1] = useState('')
    const [g, g1] = useState('')
    const [addre, addres] = useState('')
    const [name, names] = useState('')
    const [addre2, addres2] = useState('')
    const [cost, costs] = useState('')
    const [time, times] = useState('')
    const [id, id3] = useState('')
    const [addre3, addres3] = useState('')
    const [cost3, costs3] = useState('')
    const [time3, times3] = useState('')
    const [z, z3] = useState('')
    const [b, b3] = useState('')
    const [q, q3] = useState('')
    const [w, w3] = useState('')
    const [e, e3] = useState('')
    const [G, G3] = useState('')

    // Активация 
    async function Activation() {
        try {
            let adr = await Contract.methods.Authorisation(log).call()
            console.log(adr)
            setvalue(adr[0])
            await web3.eth.personal.unlockAccount(adr[0], password);
            if (adr[1] == 1) 
            g1(1)
            else
            g1("")
            a1(1)
            logs("");passwords("")
            web3.eth.defaultAccount = adr[0];
        } catch(e) {
            alert('Ошибка авторизации\nНеправильный логин или пароль!') 
        }
    }

    async function exet() {
        a1("");g1("");logs("");passwords("");addres("");names("");addres3("");costs3("");times3("");G3("")
    }

    async function exet2() {
        a1(2)
    }

    async function exet3() {
        a1(1)
    }

    async function exet4() {
        a1(3)
    }

    async function Check_user() {
        try {
        let s = await Contract.methods.Check_user(log).call()
        addres(s[0]);names(s[1])
        }catch {alert("ERROR")}
    }

    async function CreateObject() {
        try {
        await Contract.methods.CreateObject(addre2, cost, time).send({ from: web3.eth.defaultAccount, gas: 1000000 })
        a1(1)
        } catch {alert("ERROR")}
    }

    async function CheckObject() {
        try {
        let s = await Contract.methods.CheckObject(password).call()
        addres3(s[0]);costs3(s[1]);times3(s[2]);G3(s[3])
        console.log(password, s[0], s[1], s[2])
    } catch {console.log(password)}
    }

    async function ChangeRole() {
        await Contract.methods.ChangeRole().call()
        if (g == 1) 
            g1("")
        else
            g1(1)
    }

    async function CreatePresent() {
        try {
        await Contract.methods.CreatePresent(id, b, z).send({ from: web3.eth.defaultAccount, gas: 1000000 })
        a1(1)
        } catch {alert("ERROR");console.log(id, b, z)}
    }

    async function CheckPresent() {
        try {
        let s = await Contract.methods.CheckPresent(z).call()
        q3(s[0]);w3(s[1]);e3(s[2])
        } catch {alert("ERROR")}
    }

    async function AcceptPresent() {
        try {
        await Contract.methods.AcceptPresent(z).send({ from: web3.eth.defaultAccount, gas: 1000000 })
        alert("Подтверждение отправлено")
        } catch {alert("ERROR")}
    }

    async function RefuselPresent() {
        try {
        await Contract.methods.RefuselPresent(z).send({ from: web3.eth.defaultAccount, gas: 1000000 })
        alert("Отказ отправлен")
        } catch {alert("ERROR")}
    }

    return (
        <>
                {(a !== 1 && a !== 2 && a !== 3) && <div><br/>
                <div style={{ color: "#6f6582" }}><center><h2> ВХОД </h2></center></div>
                <center>
                    <label>Логин </label>
                    <input type="text" value={log} onChange={e => logs(e.target.value)} /><br />
                    <label>Пароль </label>
                    <input id="userPassword" type="password" value={password} onChange={e => passwords(e.target.value)} /><br />
                    <br /><button className="button" onClick={Activation}>Войти в личный кабинет</button>
                    <br /><br /><div style={{ color: "#6b65829c" }}><label>______________Нет профиля______________</label></div><br />
                    <Link to="./mem" >
                        <li className="button">
                            Зарегистрироваться
                        </li>
                    </Link >
                </center>
                </div>}

                {(a === 1) && <div style={{ float: "right", marginRight: "20px" }}><br /><button className="button2" href='#' onClick={() => exet()}><img src={vhod} width="50" alt="" /></button><br/>
                </div>}
                
                {(a === 1) && <div style={{ marginLeft: "20px" }}><br /><button className="buttonx" href='#' onClick={() => ChangeRole()}>Смена роли</button><br/>
                </div>}

                {(a === 1) && <div style={{ color: "#6f6582" }}><br/><center><h2> Мой личный кабинет </h2></center></div>}
                
                {(a === 1 && g === 1) && <div style={{ float: "right", marginRight: "20px", color: "#6f6582"}}>
                    <button className="button" href='#' onClick={() => exet2()}> Создание объекта </button><br/>
                </div>}

                {(a === 1 && g !== 1) && <div style={{ float: "right", marginRight: "20px", color: "#6f6582"}}>
                    <button className="button" href='#' onClick={() => exet4()}> Дарение </button><br/>
                    <button className="button" href='#' onClick={() => AcceptPresent()}> Подтверждение дарения </button><br/>
                    <button className="button" href='#' onClick={() => RefuselPresent()}> Отказ от дара </button>
                </div>}

                {(a === 1 && g === 1) && <div style={{ marginLeft: "20px", color: "#6b65829c"}}>
                <button className="buttonx" onClick={Check_user}>Просмотр пользователей</button><br/>
                <input type="text" value={log} onChange={e => logs(e.target.value)} /><br />
                {addre}<br/>
                {String(name)}
                </div>}

                {(a === 1 && g === 1) && <div style={{ marginLeft: "20px", color: "#6b65829c"}}><br/>
                <button className="buttonx" onClick={CheckObject}>Просмотр объектов</button><br/>
                <input type="text" value={[password]} onChange={e => passwords(e.target.value)} /><br />
                {addre3}<br/>
                {cost3}<br/>
                {time3}<br/>
                {G}
                </div>}

                {(a === 1 && g !== 1) && <div style={{ marginLeft: "20px", color: "#6b65829c"}}><br/>
                <button className="buttonx" onClick={CheckPresent}>Просмотр даров</button><br/>
                <input type="text" value={[z]} onChange={e => z3(e.target.value)} /><br />
                {q}<br/>
                {w}<br/>
                {e}
                </div>}

                {(a === 2) && <div style={{ float: "right", marginRight: "20px", color: "#827d65"}}><br/>
                <button className="button2" href='#' onClick={() => exet3()}><img src={nazad} width="60" alt="" /></button>
                </div>}

                {(a === 2) && <div style={{ color: "#6f6582"}}>
                <br/><br/><center><h2> Создание объекта собственности </h2></center></div>}

                {(a === 2) && <div style={{ color: "#6b65829c", marginLeft: "780px"}}>
                    <lable>Владелец</lable><br/>
                    <input type="text" value={addre2} onChange={e => addres2(e.target.value)} /><br/>
                    <lable>Стоимость</lable><br/>
                    <input type="text" value={cost} onChange={e => costs(e.target.value)} /><br/>
                    <lable>Срок владения</lable><br/>
                    <input type="text" value={time} onChange={e => times(e.target.value)} /><br/><br/>
                    <button className="button" href='#' onClick={() => CreateObject()}> Создать объект</button>
                </div>}

                {(a === 3) && <div style={{ float: "right", marginRight: "20px", color: "#827d65"}}><br/>
                <button className="button2" href='#' onClick={() => exet3()}><img src={nazad} width="60" alt="" /></button>
                </div>}

                {(a === 3) && <div style={{ color: "#6f6582"}}>
                <br/><br/><center><h2> Дарение объекта </h2></center></div>}

                {(a === 3) && <div style={{ color: "#6b65829c", float: "right", marginRight: "150px"}}>
                <button className="buttonx" onClick={Check_user}>Просмотр пользователей</button><br/>
                <input type="text" value={log} onChange={e => logs(e.target.value)} /><br />
                {addre}<br/>
                {String(name)}
                </div>}


                {(a === 3) && <div style={{ color: "#6b65829c", marginLeft: "500px"}}>
                    <lable>Номер объекта</lable><br/>
                    <input type="text" value={id} onChange={e => id3(e.target.value)} /><br/>
                    <lable>Пользователь</lable><br/>
                    <input type="text" value={b} onChange={e =>  b3(e.target.value)} /><br/>
                    <lable>Срок владения</lable><br/>
                    <input type="text" value={z} onChange={e => z3(e.target.value)} /><br/><br/>
                    <button className="button" href='#' onClick={() => CreatePresent()}>Отправить дар</button>
                </div>}
                

                
        </>
    )
}
export default Main
