import { useNavigate } from "react-router-dom";

const LoginBody = () => {
  const navigate = useNavigate();
  return (
    <div className="login-body pt-[150px] pb-[50px] text-center">
      <h1 className="text-[40px] text-[#000] leading-[1.3] font-normal">
        Welcome Back to
        <span className="block text-[#0052CC] leading-normal font-medium">
          Fieldiva
        </span>
      </h1>

      {/* Paragraph Wrapper */}
      <p className="login-text text-[13px] font-normal opacity-70 w-[90%] md:w-[50%] lg:w-[30%] mx-auto text-left leading-[1.4]">
        Securely manage field operations, assign tasks, and track worker{" "}
        <span className="inline lg:inline-block lg:w-full lg:text-center">
          activities in real-time.
        </span>
      </p>

      <form className="flex flex-col items-center gap-4 mt-[16px]">
        {/* Username Input */}
        <div className="w-[90%] md:w-[50%] lg:w-[30%] text-left">
          <input
            type="text"
            placeholder="Enter your username"
            className="border border-[#AEAEAE] w-full px-[12px] py-[8px] rounded-md placeholder:text-xs placeholder:text-[#000]"
          />
        </div>

        {/* Password Input */}
        <div className="w-[90%] md:w-[50%] lg:w-[30%] text-left">
          <input
            type="password"
            placeholder="Enter your password"
            className="border border-[#AEAEAE] w-full px-[12px] py-[8px] rounded-md placeholder:text-xs placeholder:text-[#000]"
          />
        </div>

        {/* Checkbox */}
        <div className="checkbox-field w-[90%] md:w-[50%] lg:w-[30%] text-left flex items-center text-base leading-normal">
          <input type="checkbox" className="border-2 border-black w-4 h-4" />
          <span className="text-xs ml-1">Remember me</span>
        </div>

        {/* Login Button */}
        <button className="w-[90%] md:w-[50%] lg:w-[30%] bg-[#0052CC] text-[#fff] py-2 rounded-md" onClick={() => navigate("/supervisor")}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginBody;
