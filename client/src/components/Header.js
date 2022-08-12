import logo from "../assets/logo.png";

const Header = () => {
    return ( <img
        src={logo}
        alt="Smack Chat Logo"
        position="top-center"
        width={200}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
      />)
}

export default Header;