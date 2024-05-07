import React, {useRef, useState} from "react";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {Link} from "react-router-dom";
import {eurocarService} from "../services/eurocarService";
import {Toast} from "primereact/toast";

const RegisterPage = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const toast = useRef(null);

    const onRegisterClick = () => {
        if (password === confirmPassword) {
            console.log(username)
            let registerRequest = {
                "username": username,
                "password": btoa(password),
                firstName: "",
                lastName: ""
            }
            eurocarService
                .register(registerRequest)
                .then(r => {
                    window.location.href = "/#/admin/login"
                })
                .catch(() => {
                    toast.current.show({
                        severity: 'error',
                        summary: 'Info',
                        detail: 'Datele sunt gresite!'
                    });
                })
        } else {
            toast.current.show({
                severity: 'error',
                summary: 'Info',
                detail: 'Parolele trebuie sa fie identice!'
            });
        }
    }

    return (
        <>
            <Toast ref={toast}/>
            <div className="h-screen flex justify-center">
                <div
                    className="h-4/5 w-2/3 bg-white rounded-xl overflow-hidden shadow-lg p-4 m-6 flex flex-col items-center">
                    <div className="text-center my-5">
                        <div className="text-900 text-3xl font-medium mb-3">Înregistrare</div>
                        <span className="text-600 font-medium line-height-3">Ai deja cont?</span>
                        <Link to="/admin/login" className="inline-block">
                            <p className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Login</p>
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

                        <label htmlFor="password" className="block text-900 font-medium mb-2">Confirm Password</label>
                        <InputText id="confirm-password" type="password" placeholder="Confirmă Parola"
                                   className="w-full mb-3"
                                   value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                        />

                        <div className="flex align-items-center justify-content-between mb-6">
                            <div className="flex align-items-center">
                            </div>
                        </div>

                        <Button label="Sign In" icon="pi pi-user" className="w-full"
                                onClick={onRegisterClick}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegisterPage;