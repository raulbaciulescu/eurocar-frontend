import React, {useEffect, useRef, useState} from "react";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {Link} from "react-router-dom";
import {eurocarService} from "../services/eurocarService";
import {Toast} from "primereact/toast";

const LoginPage = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const toast = useRef(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token != null) {
            window.location.href = "/#/admin/calendar"
        }
    });

    const onLoginClick = () => {
        let loginRequest = {
            "username": username,
            "password": btoa(password)
        }
        eurocarService
            .login(loginRequest)
            .then(r => {
                localStorage.setItem("token", r.token)
                localStorage.setItem("user", r.username)
                window.location.href = "/#/admin/calendar"
            })
            .catch((e) => {
                console.log(e)
                toast.current.show({
                    severity: 'error',
                    summary: 'Info',
                    detail: 'Datele sunt gresite!'
                });
            })
    }

    return (
        <>
            <Toast ref={toast}/>
            <div className="h-screen flex justify-center">
                <div className="h-3/5 lg:w-1/3 bg-white rounded-xl overflow-hidden shadow-lg p-4 m-6 flex flex-col items-center">
                    <div className="text-center my-5">
                        <div className="text-900 text-3xl font-medium mb-3">Bun venit</div>
                        <span className="text-600 font-medium line-height-3">Nu ai cont?</span>
                        <Link to="/admin/register" className="inline-block">
                            <p className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Crează un cont!</p>
                        </Link>
                    </div>

                    <div>
                        <label htmlFor="username" className="block text-900 font-medium mb-2">Username</label>
                        <InputText id="username" type="text" placeholder="Username" className="w-full mb-3"
                                   value={username} onChange={(e) => setUsername(e.target.value)}
                        />

                        <label htmlFor="password" className="block text-900 font-medium mb-2">Parola</label>
                        <InputText id="password" type="password" placeholder="Parola" className="w-full mb-3"
                                   value={password} onChange={(e) => setPassword(e.target.value)}
                        />

                        <div className="flex align-items-center justify-content-between mb-6">
                            <div className="flex align-items-center">
                            </div>
                        </div>

                        <Button label="Sign In" icon="pi pi-user" className="w-full"
                                onClick={onLoginClick}
                        />
                    </div>
                </div>
            </div>

        </>
    );
}

export default LoginPage;