import React, { useState } from "react"

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const [isEmail, setIsEmail] = React.useState(false);
    const [isPassword, setIsPassword] = React.useState(false);

    const [emailMessage, setEmailMessage] = React.useState("");
    const [passwordMessage, setPasswordMessage] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    const onChangeEmail = (e) => {
        const currentEmail = e.target.value;
        setEmail(currentEmail);
        const emailRegExp =
          /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
     
        if (!emailRegExp.test(currentEmail)) {
          setEmailMessage("이메일의 형식이 올바르지 않습니다!");
          setIsEmail(false);
        } else {
          setEmailMessage("사용 가능한 이메일 입니다.");
          setIsEmail(true);
        }
      };

      const onChangePassword = (e) => {
        const currentPassword = e.target.value;
        setPass(currentPassword);
        if (currentPassword.length < 8) {
          setPasswordMessage(
            "8자리 이상 입력해주세요!"
          );
          setIsPassword(false);
        } else {
          setPasswordMessage("안전한 비밀번호 입니다.");
          setIsPassword(true);
        }
      };
      
    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label>Full name</label>
                <input vlaue={name} name='name' id='name' placeholder="full Name" />
                <label for="email">email</label>
                <input value={email} onChange={onChangeEmail} type="email" placeholder='youremail@gmail.com' id="email" name="email" />
                <p className="message">{emailMessage}</p>
                <label for="password">password</label>
                <input value={pass} onChange={onChangePassword} type="password" placeholder='********' id="password" name="password" />
                <p className="message">{passwordMessage}</p>
                <button type="submit">Log In</button>
            </form>
            <button onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}