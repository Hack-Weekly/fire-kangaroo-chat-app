import styles from './Login.module.scss'
import { ReactComponent as MySvg } from '../images/icons/converso.svg';
import { useState } from 'react';

const Login = () => {
    const [uname, setUname] = useState("")
    const [password, setPassword] = useState("")

    console.log("uname", uname)
    return(
        <>
            <div className={styles.outer}>
                <div className={`${styles.login_container}`}>
                    {/* <p className={`${styles.login} regular-16-res`}>ini login</p> */}
                    <div className={styles.login_left}>
                        <div className={styles.converso_icon}>
                            <MySvg/>
                            <h2 className={`${styles} bold-24-res`}>Converso.</h2>
                        </div>
                       <div>
                         <p className={`${styles.p1} regular-10-res`}>Converso is a user-friendly chat application that allows you to <b>connect</b> with friends and family <i>effortlessly</i>. </p>
                        <p className={`${styles} regular-10-res`}> With its intuitive design and convenient features, staying in touch has <b>never been easier</b>.</p>
                       </div>
                    </div>
                    <div className={styles.login_right}>
                        <h2 className={`${styles} bold-24-res`}>Login</h2>
                        <div className={styles.form}>
                            <form>
                                <div className={styles.input_container}>
                                    <input className={`${styles.input} light-10-res`} type="text" name="uname" value={uname} onChange={(e) => setUname(e.target.value)}  required placeholder='Username / Email'/>
                                    {/* {renderErrorMessage("uname")} */}
                                </div>
                                <div className={styles.input_container}>
                                    <input className={`${styles.input} light-10-res`} type="password" name="pass"  value={password} onChange={(e) => setPassword(e.target.value)} required placeholder='Password'/>
                                    {/* {renderErrorMessage("pass")} */}
                                </div>
                                <div className={styles.remember_me_forgot_pass}>
                                    <div className={styles.remember_me}>
                                        <input type="checkbox" value="lsRememberMe" id="rememberMe"/> 
                                        <label for="rememberMe">Remember me</label> 
                                    </div>
                                    <p>Forgot Password</p>
                                </div>
                                <button className={`${styles} regular-10-res`}>Login</button>
                                <p className={`${styles.sign_up}`}>Dont have an account? <a href="#" className={styles.link}> Sign Up</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login