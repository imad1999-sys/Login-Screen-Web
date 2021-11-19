import React from "react";
import ImageBox from "./components/image_box";
import '../../assets/styles.css';
import LoginFormBox from "./components/login_form_box";

const LoginScreen = () => {
    return (
        <section className="login-section">
            <ImageBox />
            <LoginFormBox />
        </section>
    )
}
export default LoginScreen;