import Link from 'next/link';


const Header: React.FC =() => {
    return (
        <header className="p-4 mb-3 border-bottom bg-success bg-gradient shadow-sm">
            <a className='fs-2 d-flex justify-content-center mb-2 mb-lg-0 text-white text-decoration-none'>
            {' '}
                Crop App
            </a>
            <nav className="nav justify-content-center gap-15">
            <Link href="/" className="nav-link text-light fs-5 fw-semibold px-3 py-2 rounded hover-bg-light">
            Home
            </Link>

            <Link href="/crops" className='nav-link text-light fs-5 fw-semibold px-3 py-2 rounded hover-bg-light'>
            Crops
            </Link>

            <Link href="/customers" className="nav-link text-light fs-5 fw-semibold px-3 py-2 rounded hover-bg-light">
            Customers
            </Link>
            </nav>
        </header>
    );
};

export default Header;