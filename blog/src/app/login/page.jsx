"use client";
import styles from "./loginPage.module.css";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  const handleSocialLogin = (provider) => {
    // For frontend-only demo, just show an alert
    alert(`Login with ${provider} clicked! (Frontend Only Demo)`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div 
          className={styles.socialButton} 
          onClick={() => handleSocialLogin("Google")}
        >
          Sign in with Google
        </div>
        <div 
          className={styles.socialButton}
          onClick={() => handleSocialLogin("Github")}
        >
          Sign in with Github
        </div>
        <div 
          className={styles.socialButton}
          onClick={() => handleSocialLogin("Facebook")}
        >
          Sign in with Facebook
        </div>
      </div>
    </div>
  );
};

export default LoginPage;