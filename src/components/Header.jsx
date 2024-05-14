import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

function Header() {
  const { user } = useSelector((state) => state.userState);
  return (
    <header className=" bg-neutral py-2 text-neutral-content">
      <div className="align-content flex justify-center sm:justify-end">
        {/* USER */}
        {/* LINKS */}
        <div className="flex gap-x-6 justify-center sm:justify-end">
          {!user && (
            <>
              <Link to="/login" className="link link-hover text-xs sm:text-sm">
                Sign In / Guest
              </Link>
              <Link
                to="/register"
                className="link link-hover text-xs sm:text-sm"
              >
                Create an account
              </Link>
            </>
          )}

          {user && (
            <div className="flex items-center gap-5">
                <p className="capitalize">Hello, {user.displayName}</p>
                <button className="btn btn-sm" onClick={() => signOut(auth)}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
