import React from "react";
import "../../../assets/styles.css";
const LoginFormBox = () => {
  return (
    <div className="contentBx">
      <div className="formBx">
        <h2 className="title">login</h2>
        <form>
          <div className="inputBx">
            <span className="input-label">Username</span>
            <input type="text" name="" />
          </div>
          <div className="inputBx">
            <span className="input-label">Password</span>
            <input type="password" name="" />
          </div>
          <div className="remember">
            <label className="input-label">
              <input type="checkbox" name="" /> Remember Me
            </label>
          </div>
          <div className="inputBx">    
            <input type="submit" value="Sign in" name="" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginFormBox;
