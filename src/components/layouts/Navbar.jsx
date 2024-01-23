import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useIsUserLogin } from "../../context/isLogin";
import { useTotalCart } from "../../context/totalCartContext";
import Button from "../elements/button";

const Navbar = () => {
  const [dialogLogout, setDialogLogout] = useState(false);
  const headerRef = useRef(null);
  const hamburgerRef = useRef(null);
  const navMenuRef = useRef(null);
  const { isUserLogin } = useIsUserLogin();
  const { totalCart } = useTotalCart();

  useEffect(() => {
    const handleScroll = () => {
      const header = headerRef.current;
      const fixNav = header.offsetTop;

      if (window.pageYOffset > fixNav) {
        header.classList.add("navbar-fixed");
      } else {
        header.classList.remove("navbar-fixed");
      }
    };

    const handleToggle = (e) => {
      const hamburger = hamburgerRef.current;
      const navMenu = navMenuRef.current;

      if (
        e.target === navMenu ||
        e.target === hamburger ||
        navMenu.contains(e.target) ||
        hamburger.contains(e.target)
      ) {
        hamburger.classList.toggle("hamburger-active");
        navMenu.classList.toggle("hidden");
      } else {
        hamburger.classList.remove("hamburger-active");
        navMenu.classList.add("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleToggle);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleToggle);
    };
  }, []);

  const handleLogout = () => {
    setDialogLogout(false)
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <>
      <header
        ref={headerRef}
        className="bg-white top-0 left-0 w-full flex items-center z-10 py-3 md:py-0"
      >
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <Link to="/" className="flex items-center py-2">
                <p className="font-bold text-lg text-primary">TrendLoom</p>
              </Link>
            </div>
            <div className="flex items-center px-4">
              <button
                ref={hamburgerRef}
                name="hamburger"
                type="button"
                className="block absolute right-4 md:hidden"
              >
                <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
              </button>
              <nav
                ref={navMenuRef}
                className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full md:block md:static md:bg-transparent md:max-w-full md:shadow-none md:rounded-none"
              >
                <ul className="block md:flex items-center">
                  <li className="group">
                    <Link
                      to="/"
                      className="font-medium text-base text-dark py-2 mx-8 flex group-hover:text-blue-700"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      to="/products"
                      className="font-medium text-base text-dark py-2 mx-8 flex group-hover:text-blue-700"
                    >
                      Products
                    </Link>
                  </li>
                  <li className="group ">
                    <Link
                      to="/about"
                      className="font-medium text-base text-dark py-2 mx-8 flex group-hover:text-blue-700 "
                    >
                      About
                    </Link>
                  </li>

                  <li className="group">
                    <Link
                      to="/contact"
                      className="font-medium text-base text-dark py-2 mx-8 flex group-hover:text-blue-700"
                    >
                      Contact
                    </Link>
                  </li>
                  {isUserLogin && (
                    <li className="group">
                      <Link
                        href="#contact"
                        className="font-medium text-base text-dark py-2 mx-8 md:mx-2 flex"
                      >
                        <FontAwesomeIcon
                          icon={faUser}
                          style={{ color: "#000000" }}
                        />
                      </Link>
                    </li>
                  )}
                  {isUserLogin && (
                    <li className="group">
                      <Link
                        to="/cart"
                        className="font-medium text-base text-dark py-2 mx-8 md:mx-2 flex"
                      >
                        <div>
                          <FontAwesomeIcon
                            icon={faCartShopping}
                            style={{ color: "#000000" }}
                          />
                          <p className="ms-1 inline-block">{totalCart}</p>
                        </div>
                      </Link>
                    </li>
                  )}
                  {isUserLogin ? (
                    <li className="group">
                      <Link
                        onClick={() => setDialogLogout(true)}
                        className="font-medium text-base bg-dark text-white py-1 px-4 mx-8 md:mx-2 flex-auto"
                      >
                        Logout
                      </Link>
                    </li>
                  ) : (
                    <li className="group">
                      <Link
                        to="/login"
                        className="font-medium text-base bg-dark text-white py-1 px-4 mx-8 md:mx-2 flex-auto"
                      >
                        Login
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {dialogLogout && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-8 px-12 bg-slate-50 border border-gray-300 rounded text-center z-[99999]">
          <h2 className="text-xl font-semibold text-accent">
            Are you sure,
            <br />
            you want to logout?
          </h2>

          <div className="flex justify-between mt-8 ">
            <Button
              classname="bg-white text-accent me-4 border border-transparent hover:border hover:border-accent"
              onClick={() => setDialogLogout(false)}
            >
              Cancel
            </Button>
            <Button
              classname="bg-accent text-white me-4 border border-transparent hover:border hover:border-gray-500"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
