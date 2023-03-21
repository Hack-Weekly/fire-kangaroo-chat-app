import styles from './Login.module.scss'
import { ReactComponent as MySvg } from '../images/icons/converso.svg';
import { ReactComponent as GoogleSvg } from '../images/icons/google.svg';
import { ReactComponent as EmailSvg } from '../images/icons/email.svg';
//import { useState } from 'react';

const LoginEmail = () => {

    //console.log("uname", uname)
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
                        <div className={styles.buttons_signin}>
                            <button><GoogleSvg/> <p>Continue with Google</p> </button>
                            <button><EmailSvg/> <p>Continue with Email</p> </button>
                            <p className={`${styles.sign_up}`}>Dont have an account? <a href="#" className={styles.link}> Sign Up</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginEmail