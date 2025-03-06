import React from "react";
import LoginHeader from "./LoginHeader";
import LoginBody from "./LoginBody";


const LoginPage = () => {
  return (
    <>
      <section className="login-section">
        <div className="login-container pt-[100px] px-[5%] md:px-[10%] lg:px-[15%]">
          <LoginHeader />
          <LoginBody />
        </div>
        <footer className="px-[50px] flex flex-col md:flex-row items-center md:justify-between text-center md:text-left pt-[190px] pb-[20px]">
          <p className="text-xs text-[#959595] md:w-1/2">
            By clicking "Sign In to Dashboard," you agree to Fieldiva’s Terms &
            Conditions and Privacy Policy.
          </p>
          <p className="text-xs text-[#959595] mt-2 md:mt-0 md:w-auto">
            © Fieldiva. 2025. All Rights Reserved.
          </p>
        </footer>
      </section>
    </>
  );
};

export default LoginPage;
