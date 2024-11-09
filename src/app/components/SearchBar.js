import Image from "next/image";
import Link from "next/link";
function SearchBar() {
  return (
    <div className="logo-wrapper w-100 d-flex align-items-center gap-1 gap-sm-3 gap-md-4 flex-wrap flex-lg-nowrap">
      {/* <div className="mobile-topbar d-lg-none me-4">
        <div className="bars">
          <i data-feather="menu" className="text-secondary"></i>
        </div>
      </div> */}
      <div className="logo me-sm-2  order-1  order-lg-1">
        <Link href="/">
          <Image src="/images/logo.png" alt="header" width={169} height={50} />
        </Link>
      </div>
      <div className="header-form  order-4  order-lg-2">
        <form action="#">
          <div className="form-main d-flex justify-content-between position-relative">
            <div className="input-field">
              <input
                type="text"
                className="form-control rounded-0 shadow-none"
                placeholder="Search Product"
              />
            </div>
            <div className="search d-flex justify-content-center align-items-center position-absolute">
              <i data-feather="search" className="text-white"></i>
            </div>
          </div>
        </form>
      </div>
      <div className="icon_section order-2  order-lg-3">
        <ul className="d-flex gap-3">
          <li className="position-relative">
            <i data-feather="user" className="text-secondary"></i>
            <span>20</span>
          </li>
          <li className="position-relative">
            <i data-feather="heart" className="text-secondary"></i>
          </li>
          <li className="cart-bag position-relative">
            <i data-feather="shopping-cart" className="text-secondary"></i>
          </li>
        </ul>
      </div>
      <div className="cloud_sec  order-3  order-lg-4">
        <div className="image">
          <Image
            src="/images/cloud.png"
            alt="header"
            priority={false}
            width={183}
            height={53}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
