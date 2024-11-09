
import Link from "next/link";

function TopHeader() {
  return (
    <div className="header-top px-3">
      <ul className="d-flex justify-content-between flex-column flex-lg-row">
        <div className="d-flex gap-5">
          <li>
            <span>English</span>
          </li>
          <li>
            <Link href="#">Help Center</Link>
          </li>
          <li>
            <Link href="tel:0964781656">Helpline: 0964781656</Link>
          </li>
        </div>
        <div className="d-flex gap-5">
          <li>
            <Link href="#">Become a Seller</Link>
          </li>
          <li>
            <Link href="#">Order Track</Link>
          </li>
          <li>
            <Link href="/signup">Sign up </Link>
            <span className="px-2">/</span>
            <Link href="/login"> Login</Link>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default TopHeader