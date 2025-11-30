import React,{useState, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";

const Navbar = () => {

  const [update, setUpdate] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [isColor, setIsColor] = useState(false);
  function show() {
    setUpdate(!update);
  }

  useEffect(() => {
    const scrollhandler = () =>{
      let scrollY = window.scrollY;
      setIsScroll(scrollY > 10);
      setIsColor(scrollY > window.innerHeight - 100);
    }
    
    window.addEventListener('scroll', scrollhandler);
    
    return () =>  window.removeEventListener("scroll", scrollhandler);  
  }, [])
  

  // for the navigation button 
  const {pathname} = useLocation(); //gave the current url path  
  // check the path for the cart and the heart and apply the icon acccordingly
  let activeHeart = pathname === "/likepage";
  let activeCart = pathname === "/cart";

  const navItems = [
    {name : "Home", path: '/'},
    {name : "About Us", path: "/about"},
    {name : "Products", path: "/allproduct"},
    {name : "Contact Us", path: "/contactus"}
  ];

  return (
    <>
      <div className= {`${isColor ? "bg-[#DAF1DA]" :"bg-white"} fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${isScroll ? "shadow-[0_4px_12px_rgba(0,0,0,0.15)]" : " "}`}>
        <nav className = "flex items-center justify-between w-full max-w-[1300px] mx-auto px-[1.8rem] md:py-[2rem] py-[1.5rem]">
          {/* logo */}
          <Link to="/">
            <h1 className="text-[25px] sm:text-2xl md:text-3xl font-Quicksand font-extrabold text-[#2E7D32]">
              Harvestly
            </h1>
          </Link>
          

          {/* Navigation for different pages */}
          <div className="lg:flex items-center justify-between md:gap-[2.5rem] sm:gap-[1.5rem] font-semibold hidden">
            {navItems.map((item) => {
              const isActive = pathname === item.path; //check the active state of a button

              return(
                <Link key={item.name} to={item.path}>
                  <p
                    className={`tracking-wider transition-colors` + " " +
                      (isActive 
                        ? "text-[#FF9800]" //active tab
                        : "text-[#1B4332] hover:text-[#FF9800]"
                      )
                    }>
                    {item.name}
                  </p>
                </Link>
              )
            })}
          </div>

          {/* Search bar like item and cart item */}
          <div className="flex items-center justify-center gap-[1rem]">
            <Link to="/signin">
              <div className="md:flex justify-center border-[2px] border-[#2E7D32] rounded-full px-5 py-[6px] cursor-pointer transition-all duration-300 hover:border-[#FF9800]  hover:bg-[#FF9800]/15 hover:shadow-[0_3px_6px_rgba(0,0,0,0.15)] hidden">
                <h1 className="text-[#235641] font-bold"> Sign In </h1>
              </div>
            </Link>
            <Link to="/likepage">
              <img src={activeHeart ? "./images/heartFill.png" : "./images/heart.png"} alt="" className="w-5 sm:w-6 md:w-7"/>
            </Link>
            <Link to="/cart">
              <img src={activeCart ? "./images/cartFill.png" : "./images/cart.png"} alt="cart items" className="w-5 sm:w-6 md:w-7"/>
            </Link>
          

            {/* menu icon */}
            <img src={update ? '/images/close.png' : '/images/menu.png'} onClick={show} alt="Navlinks" className="w-4.5 sm:w-5.5 md:w-6 lg:hidden relative"/>
          </div>
            {/* Navlinks show on the press of menuIcon */}
            <div className={`md:hidden flex flex-col items-end justify-between pr-[20px] w-full rounded-md bg-green-200/50 backdrop-blur-xs top-19 right-0.5 shadow-[0_8px_16px_rgba(0,0,0,0.12)] transition-all duration-700 ${update? 'left-0.5' : 'left-full'} py-[15px] gap-y-[15px] absolute font-semibold`}>
              {navItems.map((item) => {
              const isActive = pathname === item.path; //check the active state of a button

              return(
                <Link key={item.name} to={item.path} onClick={()=>setUpdate(false)} >
                  <p
                    className={`tracking-wider transition-colors` + " " +
                      (isActive 
                        ? "text-[#FF9800]" //active tab
                        : "text-[#1B4332] hover:text-[#FF9800]"
                      )
                    }>
                    {item.name}
                    
                  </p>
                </Link>
              )
            })}
            <Link to="/signin">
              <div onClick={() => setUpdate(false)} className="flex justify-center border-[2px] border-[#2E7D32] rounded-full px-5 py-[6px] cursor-pointer transition-all duration-300 hover:border-[#FF9800]  hover:bg-[#FF9800]/15 hover:shadow-[0_3px_6px_rgba(0,0,0,0.15)] md:hidden">
                <h1 className="text-[#235641] font-bold"> Sign In </h1>
              </div>
            </Link>
            </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
