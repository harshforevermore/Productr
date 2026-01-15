const Navbar = ({ selectedPage }) => {
  return (
    <div className="navbar-container w-full h-[64px] flex items-center justify-between px-4 bg-linear-to-r from-[#ffe8e690] from-5% via-[#feffcd27] via-80% to-[#9aadf94b] to-100% border-b border-b-[#D1D5DB]">
      <section className="section-1 flex items-center gap-2">
        {selectedPage === "products" && (
          <>
            <span className="nav-icon">
              <svg
                width="13"
                height="15"
                viewBox="0 0 11 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.1211 3.24658V3.16666C2.1211 1.7215 3.09951 0.459677 4.49914 0.0997724C5.01648 -0.0332574 5.55906 -0.0332575 6.0764 0.0997724C7.47603 0.459677 8.45444 1.7215 8.45444 3.16667V3.24658H9.45519C9.83604 3.24658 10.1593 3.5259 10.2145 3.90273L10.3603 4.8977C10.6473 6.85667 10.6473 8.84702 10.3603 10.806C10.2217 11.752 9.45879 12.4834 8.50777 12.582L8.08852 12.6255C6.22634 12.8186 4.34919 12.8186 2.48702 12.6255L2.06777 12.582C1.11674 12.4834 0.353883 11.752 0.215272 10.806C-0.0717573 8.84702 -0.0717571 6.85667 0.215272 4.8977L0.361054 3.90273C0.416268 3.5259 0.739499 3.24658 1.12035 3.24658H2.1211ZM4.74818 1.06827C5.10215 0.977245 5.47339 0.977245 5.82736 1.06827C6.785 1.31452 7.45444 2.17787 7.45444 3.16667V3.24658H3.1211V3.16666C3.1211 2.17787 3.79054 1.31452 4.74818 1.06827ZM2.1211 4.24658V5.74658C2.1211 6.02272 2.34496 6.24658 2.6211 6.24658C2.89725 6.24658 3.1211 6.02272 3.1211 5.74658V4.24658H7.45444V5.74658C7.45444 6.02272 7.6783 6.24658 7.95444 6.24658C8.23058 6.24658 8.45444 6.02272 8.45444 5.74658V4.24658H9.25419L9.37083 5.04268C9.64377 6.90551 9.64377 8.79818 9.37083 10.661C9.29853 11.1544 8.90065 11.5359 8.40462 11.5873L7.98537 11.6308C6.19178 11.8168 4.38376 11.8168 2.59017 11.6308L2.17092 11.5873C1.67489 11.5359 1.277 11.1544 1.20471 10.661C0.931764 8.79818 0.931764 6.90551 1.20471 5.04267L1.32135 4.24658H2.1211Z"
                  fill="#344054"
                />
              </svg>
            </span>
            <span className="nav-title text-[#344054] text-sm">Products</span>
          </>
        )}
      </section>
      <section className="section-2 flex gap-14 items-center">
        <section className="product-search relative">
          <span className="search-icon z-99 absolute top-2.5 left-3.5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.22264 9.01812C6.23493 10.6101 3.32536 10.4848 1.48277 8.64223C-0.494257 6.6652 -0.494257 3.4598 1.48277 1.48277C3.4598 -0.494257 6.6652 -0.494257 8.64223 1.48277C10.4848 3.32536 10.6101 6.23493 9.01813 8.22263L12.8849 12.0894C13.1045 12.309 13.1045 12.6652 12.8849 12.8848C12.6652 13.1045 12.309 13.1045 12.0894 12.8848L8.22264 9.01812ZM2.27827 7.84673C0.740578 6.30904 0.740578 3.81596 2.27827 2.27827C3.81596 0.740578 6.30904 0.740578 7.84673 2.27827C9.38329 3.81483 9.38442 6.30538 7.85012 7.84334C7.84898 7.84446 7.84785 7.84558 7.84672 7.84671C7.84559 7.84784 7.84447 7.84898 7.84335 7.85011C6.30539 9.38442 3.81483 9.3833 2.27827 7.84673Z"
                fill="#6B7683"
              />
            </svg>
          </span>
          <input
            type="text"
            className="product-search-box w-[339px] h-9 pl-10 bg-[#F3F4F6] text-black placeholder-[#6B7180] rounded-md outline-none"
            placeholder="Search Services, Products"
          />
        </section>
        <section className="user-profile flex items-center gap-2">
          <img
            src="../../images/profile.jpg"
            className="profile-pic w-9 h-9 object-cover rounded-full"
            alt="user profile picture"
          />
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.28033 0.21967C9.57322 0.512563 9.57322 0.987437 9.28033 1.28033L5.28033 5.28033C4.98744 5.57322 4.51256 5.57322 4.21967 5.28033L0.21967 1.28033C-0.0732233 0.987437 -0.0732233 0.512564 0.21967 0.21967C0.512563 -0.073223 0.987437 -0.073223 1.28033 0.21967L4.75 3.68934L8.21967 0.21967C8.51256 -0.0732233 8.98744 -0.0732233 9.28033 0.21967Z"
              fill="black"
            />
          </svg>
        </section>
      </section>
    </div>
  );
};

export default Navbar;
