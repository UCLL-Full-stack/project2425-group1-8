import Link from "next/link";
import { useEffect, useState, useTransition } from "react";
import Image from "next/image";
import avatar from "../images/avatar.png";
import Language from "./Language";
import { useTranslation } from "next-i18next";

const Header: React.FC = () => {
  const [loggedInUser, setLoggedInUser] = useState<String | null>(null);
  const { t, i18n } = useTranslation();
  console.log(i18n.language);
  console.log("reading");
  useEffect(() => {
    setLoggedInUser(sessionStorage.getItem("loggedInUser"));
  }, []);

  const handleLogout = () => {
    // sessionStorage.removeItem("loggedInUser");
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
  };

  return (
    <header className="p-4 mb-1 border-bottom bg-success bg-gradient shadow-sm">
      <a className="fs-2 d-flex mb-2 mb-lg-0 text-white text-decoration-none">
        {/* Crop App */}
        {t("header.app.title")}
      </a>
      <nav className="nav justify-content-end gap-15">
        <Link
          href="/"
          className="nav-link text-light fs-5 fw-semibold px-3 py-2 rounded hover-bg-light"
        >
          {/* Home */}
          {t("header.nav.Home")}
        </Link>

        <Link
          href="/crops"
          className="nav-link text-light fs-5 fw-semibold px-3 py-2 rounded hover-bg-light"
        >
          {/* Crops */}
          {t("header.nav.Crops")}
        </Link>

        <Link
          href="/customers"
          className="nav-link text-light fs-5 fw-semibold px-3 py-2 rounded hover-bg-light"
        >
          {/* Customers */}
          {t("header.nav.Customers")}
        </Link>

        <Link
          href="/seedSuppliers"
          className="nav-link text-light fs-5 fw-semibold px-3 py-2 rounded hover-bg-light"
        >
          {/* Seed Suppliers */}
          {t("header.nav.Seed Suppliers")}
        </Link>
        {!loggedInUser ? (
          <Link
            href="/login"
            className="nav-link text-light fs-5 fw-semibold px-3 py-2 rounded hover-bg-light"
          >
            {/* Login */}
            {t("header.nav.Login")}
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
        <Language />
      </nav>
    </header>
  );
};

export default Header;
