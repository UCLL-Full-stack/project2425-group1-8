import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import avatar from "../images/avatar.png";

const Header: React.FC = () => {
  const [loggedInUser, setLoggedInUser] = useState<String | null>(null);

  useEffect(() => {
    setLoggedInUser(sessionStorage.getItem("loggedInUser"));
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("loggedInUser");
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
  };

  return (
    <header className="p-4 mb-1 border-bottom bg-success bg-gradient shadow-sm">
      <a className="fs-2 d-flex mb-2 mb-lg-0 text-white text-decoration-none">
        Crop App
      </a>
      <nav className="nav justify-content-end gap-15">
        <Link
          href="/"
          className="nav-link text-light fs-5 fw-semibold px-3 py-2 rounded hover-bg-light"
        >
          Home
        </Link>

        <Link
          href="/crops"
          className="nav-link text-light fs-5 fw-semibold px-3 py-2 rounded hover-bg-light"
        >
          Crops
        </Link>

        <Link
          href="/customers"
          className="nav-link text-light fs-5 fw-semibold px-3 py-2 rounded hover-bg-light"
        >
          Customers
        </Link>

        <Link
          href="/seedSuppliers"
          className="nav-link text-light fs-5 fw-semibold px-3 py-2 rounded hover-bg-light"
        >
          Seed Suppliers
        </Link>

        {!loggedInUser ? (
          <Link
            href="/login"
            className="nav-link text-light fs-5 fw-semibold px-3 py-2 rounded hover-bg-light"
          >
            Login
          </Link>
        ) : (
          <div style={{ cursor: "pointer" }} onClick={handleLogout}>
            <Image
              src={avatar}
              alt="User Avatar"
              width={40}
              height={40}
              className="rounded-circle"
            />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
