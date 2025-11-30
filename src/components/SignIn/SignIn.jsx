import React, {useState} from "react";

const SignIn = () => {
  const [currState, setcurrState] = useState("Sign Up");

  const [pass, setPass] = useState("");
  const [passStrength, setPassStrength] = useState("");

  const [name, setName] = useState("");
  const [nameStrength, setNameStrength] = useState("");
  
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  
  const [check, setCheck] = useState(false);

  // change the state
  function stateHandler(){
    setcurrState(prev => prev === "Sign Up" ? "Login" : "Sign Up");
  }
  
  // submit handler
  function subHandler(e){
    e.preventDefault();
    alert("Form Submitted");
  }
  
  // pass Handler
  function passHandler(e){
    let value = e.target.value;
    setPass(value);

    if(value.length < 6){
      setPassStrength("weak");
      return;
    }

    if(/[A-Za-z]/.test(value) && /[0-9]/.test(value)){
      setPassStrength("medium");
      return;
    }
    if(/[!@#$%^&*(),.?"|<>]/.test(value) && value.length >= 8 && /[A-Za-z]/.test(value) && /[0-9]/.test(value)){
      setPassStrength("Strong");
      return;
    }
    setPassStrength("weak");
  }

  // name Handler
  function nameHandler(e){
    let value = e.target.value;
    setName(value);

    if(value.length < 3){
      setNameStrength("At least 3 character");
    }else{
      setNameStrength("");
    }
  }

  // email Handler
  function emailHandler(e){
    let value = e.target.value;
    setEmail(value);

    if(!value.includes("@") || !value.includes(".")){
      setEmailError("Enter a Valid Email");
    }else{
      setEmailError("");
    }
  }

  // check Handler
  function checkHandler(){
    setCheck(prev => !prev)
  }

  // final form Validation 
  const isFormValid = 
  currState === "Login"
  ? email !== "" && pass!== "" && passStrength !== "weak"
  : name !== "" && email !== "" && pass !== "" && nameStrength === "" && passStrength !== "weak" && emailError === "" && check;

  return (
    <div className="mt-25 md:mt-35">
      <div className="max-h-screen max-w-[1200px] bg-gradient-to-r from-[#E8F5E9] to-[#E3F2FD] mx-auto flex flex-col md:flex-row items-center justify-between px-4">

        {/* LEFT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/singIn.png"
            alt="Sign up visual"
            className="w-[350px] md:w-[540px] object-contain drop-shadow-xl"
          />
        </div>

        {/* FORM CARD */}
        <div className="w-full md:w-1/2 flex justify-center mt-10  my-10">
          <form 
          onSubmit={subHandler} 
          className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl px-10 py-8 sm:py-12 max-w-[420px] w-full border border-gray-100">

            <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#2E7D32] mb-4 sm:mb-8">
              {currState}
            </h2>

            <div className="flex flex-col gap-5">
              {/* name field only for the sign up */}
              {currState === "Sign Up" && (
                <>
                <input
                type="text"
                placeholder="Your Name"
                required
                onChange={nameHandler}
                className="bg-white px-4 py-2 rounded-md border border-gray-300 focus:border-[#2E7D32] outline-none transition" />
                {nameStrength && (
                  <p className="text-red-600">{nameStrength}</p>
                )}
                </>
              )}

              {/* email */}
              <div>
              <input
                type="email"
                placeholder="Your Email"
                required
                onChange={emailHandler}
                className="w-full bg-white px-4 py-2 rounded-md border border-gray-300 focus:border-[#2E7D32] outline-none transition"
              />
              {emailError && (
                <p className="text-red-600">{emailError}</p>
              )}
              </div>

              {/* password */}
              <div>
                <input
                type="password"
                placeholder="Password"
                onChange={passHandler}
                required
                className="bg-white w-full px-4 py-2 rounded-md border border-gray-300 focus:border-[#2E7D32] outline-none transition"
                />
                {pass && passStrength === "weak" && (
                  <p className="text-red-600">Weak Password</p>
                )}
              </div>
            </div>

            <button
            disabled={!isFormValid} 
            className={`w-full bg-[#2E7D32]  text-white py-2 rounded-xl mt-7 mb-4 transition-all font-semibold tracking-wide
                      ${isFormValid
                      ? "bg-green-600 hover:bg-green-700 text-white cursor-pointer"
                      : "bg-gray-400 text-gray-700 cursor-not-allowed"}`}>
              {currState === "Sign Up" ? "Create Account" : "Login"}
            </button>
            
            {/* check box only show in sign up page */}
            {currState == "Sign Up" && (
              <div className="flex items-start gap-2 mb-4">
                <input onClick={checkHandler} type="checkbox" className="mt-1" />
                <p className="text-sm text-gray-600">
                  I agree to the Terms of Use & Privacy Policy
                </p>
              </div>
            )}

            <div className="flex justify-center gap-2 text-gray-700 text-sm">
              <p>{currState === "Sign Up" ? "Already have an account?" : "Create a new Account?"}</p>
              <button onClick={stateHandler} className="text-[#FF5722] hover:underline">
                {currState === "Sign Up" ? "Login here" : "Click here"}
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default SignIn;

