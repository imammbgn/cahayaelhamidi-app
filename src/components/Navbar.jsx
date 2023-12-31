import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Input
} from "@material-tailwind/react";
import ModalLogin from "./Login/login"

export function NavbarDefault( {onclick} ) {
  const [openNav, setOpenNav] = useState(false);
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setShow(window.innerWidth >= 1024);
    };

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium font-poppins text-light-green-700"
      >
        <a onClick={onclick} className="flex items-center cursor-pointer">
          Produk
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium font-poppins text-light-green-700"
      >
        <Link to="about" className="flex items-center">
          Tentang Kami
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium font-poppins text-light-green-700"
      >
        <Link to="/gallery" className="flex items-center">
          Galeri
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium font-poppins text-light-green-700"
      >
        <Link to="/contact" className="flex items-center">
          Kontak
        </Link>
      </Typography>
    </ul>
  );

  return (
    <>
    <div className="lg:max-h-[768px] w-[375px] lg:w-full">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-light-green-700">
          <Typography
            as="a"
            href="/"
            className="mr-4 cursor-pointer py-1.5 font-montserrat font-bold"
          >
            CahayaElhamidi
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          <div className="flex items-center gap-8">

          {/* -- Aktifkan Fungsi Search --  */}

          {/* {show && (
        <Input
          type="search"
          color="light-green"
          label="Cari Disini.."
          className="pr-20"
          containerProps={{
            className: "min-w-[288px]",
          }}
        />
        )} */}

        {/* -- Aktifkan Fungsi Login --  */}
        
            {/* <Button
              variant="outlined"
              size="sm"
              color="light-green"
              className="group hidden lg:inline-block hover:bg-light-green-700"
              onClick={() => setShowModal(true)}
            >
              <span className="font-semibold font-poppins group-hover:text-white">
                Login
              </span>
            </Button> */}


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
        <Collapse open={openNav}>
          {navList}
          <Button
            variant="gradient"
            size="sm"
            fullWidth
            color="light-green"
            className="mb-2"
          >
            <span>Login</span>
          </Button>
        </Collapse>
      </Navbar>
    </div>

{/* {showModal ? (
    <ModalLogin onclick={() => setShowModal(false)}/>
) : null} */}
</>
  );
}
