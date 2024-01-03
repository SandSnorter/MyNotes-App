import { Navbar, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="border-4 bg-pink-500 rounded-full mt-5 w-3/5 mx-auto mb-11 md:w-4/5 xl:mb-24" id="header">
      <div className="items-center text-blue-gray-900 justify-center grid grid-flow-row lg:grid-flow-col lg:relative lg:flex lg:justify-around">
        <Link to={"/"}>
          <img src="./images/notebook-unscreen.gif" alt="logo" className="size-16 mx-auto mb-5 lg:mb-0" />
        </Link>
          <Link to={"/"}>
            <Button variant="text" size="md" className="bg-white min-w-40 mx-auto mb-5 lg:mb-0">
              Add Note
            </Button>
          </Link>
          <Link to={"/notes"}>
            <Button variant="text" size="md" className="bg-white min-w-40 mx-auto mb-5 lg:mb-0">
              View Notes
            </Button>
          </Link>
        </div>
    </Navbar>
  );
};

export default Header;
