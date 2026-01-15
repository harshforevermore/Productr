import { useNavigate } from "react-router-dom";

const SidePanel = ({selectedPage, setSelectedPage}) => {
  const navigate = useNavigate();
  const handleNav1 = () => {
    setSelectedPage("home");
    navigate("/");
  };
  const handleNav2 = () => {
    setSelectedPage("products");
    navigate("/products");
  };
  return (
    <div className="sidepanel w-[240px] min-h-full bg-[#1D222B]">
      <section className="border-b border-b-[#4b4b4b]">
        <section className="logo w-full px-4 py-3">
          <img src="../../images/logo_white.png" className="w-3/4" alt="Productr logo" />
        </section>
        <section className="search relative flex justify-center mb-4">
          <span className="search-icon z-99 absolute top-2.5 left-4">
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
            className="search-box w-[224px] h-9 pl-8 bg-[#2F343D] text-white placeholder-[#98A2B3] rounded-sm outline-none"
            name="search"
            placeholder="Search"
          />
        </section>
      </section>
      <section className="sidepanel-navigation pt-2">
        <section onClick={handleNav1} className="nav-1 cursor-pointer px-4 pt-4 flex items-center gap-4 group">
          <span className={`nav-icon text-[#6B7683] group-hover:text-white`}>
            <svg
              width="14"
              height="15"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.43135 1.59489C6.77843 0.96837 5.74754 0.96837 5.09462 1.59489L1.62479 4.92439C1.53978 5.00597 1.48259 5.11223 1.46134 5.22812C1.04574 7.49451 1.01506 9.81473 1.37059 12.0913L1.45499 12.6317H3.68733V7.97321C3.68733 7.66255 3.93917 7.41071 4.24983 7.41071H8.27614C8.5868 7.41071 8.83864 7.66255 8.83864 7.97321V12.6317H11.071L11.1554 12.0913C11.5109 9.81474 11.4802 7.49451 11.0646 5.22812C11.0434 5.11223 10.9862 5.00597 10.9012 4.92439L7.43135 1.59489ZM4.31571 0.783149C5.40392 -0.26105 7.12205 -0.26105 8.21026 0.783149L11.6801 4.11265C11.9355 4.35775 12.1073 4.67701 12.1712 5.02521C12.6096 7.41593 12.6419 9.86343 12.2669 12.2649L12.1313 13.133C12.0753 13.492 11.7661 13.7567 11.4027 13.7567H8.27614C7.96548 13.7567 7.71364 13.5049 7.71364 13.1942V8.53571H4.81233V13.1942C4.81233 13.5049 4.56049 13.7567 4.24983 13.7567H1.12328C0.75992 13.7567 0.450706 13.492 0.394639 13.133L0.259067 12.2649C-0.115969 9.86343 -0.0836083 7.41593 0.354789 5.02521C0.418639 4.67701 0.590452 4.35775 0.845879 4.11265L4.31571 0.783149Z"
                className={`${selectedPage === "home" ? 'fill-white' : 'fill-[#6B7683]'} group-hover:fill-white`}
              />
            </svg>
          </span>
          <span className={`nav-title ${selectedPage === "home" ? 'text-white' : 'text-[#6B7683]'} group-hover:text-white`}>Home</span>
        </section>
        <section onClick={handleNav2} className="nav-2 cursor-pointer px-4 pt-4 flex items-center gap-4 group">
          <span className={`nav-icon`}>
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
                className={`${selectedPage === "products" ? 'fill-white' : 'fill-[#6B7683]'} group-hover:fill-white`}
              />
            </svg>
          </span>
          <span className={`nav-title ${selectedPage === "products" ? 'text-white' : 'text-[#6B7683]'} group-hover:text-white`}>Products</span>
        </section>
      </section>
    </div>
  );
};

export default SidePanel;
