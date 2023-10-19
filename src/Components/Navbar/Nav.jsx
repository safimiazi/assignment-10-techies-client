/* eslint-disable react/prop-types */

import React, { useContext } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,

} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Nav = ({ handleDarkMode, darkMode }) => {
  const [openNav, setOpenNav] = React.useState(false);
  const { user, logOut } = useContext(AuthContext)
  console.log("hi gay", user);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);


  const handleLogOut = () => {
    logOut()
    .then(result => {
      console.log(result.user)
  })
  .catch(error => {
      console.log(error.message);
  })
  }

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">

      <NavLink to='/'><li className="flex items-center">Home</li></NavLink>
      <NavLink to='/addProduct'><li className="flex items-center">add Product</li></NavLink>
      <NavLink to='/myCart'><li className="flex items-center">My Cart</li></NavLink>



    </ul>
  );

  return (
    <div>
      <Navbar className=" z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center max-w-6xl mx-auto justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className=" cursor-pointer py-1.5 font-medium"
          >
            <img src="https://i.ibb.co/TWDHqHS/asLogo.png" alt="" />
          </Typography>
          <div className="flex items-center gap-4">
            <div className=" hidden  lg:block">{navList}</div>
            <div>
              {
                user && <p className="font-bold">{user.displayName}</p>
              }
            </div>
            <div>
              {
                user &&  <img className="w-10 rounded-full border" src={user?.photoURL} alt="" />

              }
            </div>
            <div className="flex items-center gap-x-1">
              {
                user ? <NavLink><Button
                onClick={handleLogOut}
                  variant="text"
                  size="sm"
                  className="hidden bg-gray-900 text-white btn hover:bg-gray-800 lg:inline-block"
                >
                  <span>LogOut</span>
                </Button>

                </NavLink> :

                  <NavLink to='/login'><Button
                    variant="text"
                    size="sm"
                    className="hidden bg-gray-900 text-white btn hover:bg-gray-800 lg:inline-block"
                  >
                    <span>Log In</span>
                  </Button>

                  </NavLink>
              }
              <button className="md:ml-2 font-bold btn" onClick={handleDarkMode}>{`${darkMode ? "light" : "dark"}`}</button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav  className="text-black" open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            {
              user ?  
              <NavLink><Button
              onClick={handleLogOut}
              fullWidth variant="gradient" size="sm" className=""
            >
              <span>LogOut</span>
            </Button>
            </NavLink> :
            <NavLink><Button
            fullWidth variant="gradient" size="sm" className=""
          >
            <span>LogIn</span>
          </Button>
          </NavLink>
          
            }
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
}
export default Nav

