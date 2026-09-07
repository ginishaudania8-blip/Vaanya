import deerbg from '../../assets/deerbg.png'
import deercutout from '../../assets/deercutout.png'

export default function Hero4() {
  return (
    <div className="flex pt-[62px] pr-6 pb-[52px] pl-9 flex-col items-start gap-2.5 bg-[radial-gradient(50%50%at50%50%,#0B0F1722.93%)] min-w-screen min-h-screen overflow-hidden relative">

      <div className="shrink-0 w-[1380px] h-[910px] relative">
        <img
          src={deerbg}
          className="rounded-[30px] w-[1380px] h-[910px] absolute left-0 top-0 max-w-none"
          alt="Deer background"
        />

        <img
          src={deercutout}
          className="rounded-[30px] w-[1380px] h-[910px] absolute left-0 top-0 max-w-none"
          alt="Deer cutout"
        />
      </div>

      <div className="absolute left-[537px] top-[88px] rounded-[40px] border border-[rgba(255,255,255,0.15)] bg-[rgba(30,41,59,0.50)] w-[365px] h-12"></div>

      <div className="absolute left-[553px] top-[97px] rounded-[40px] bg-[rgba(16,185,129,0.80)] w-[98px] h-[30px]"></div>

      <div className="absolute right-[455px] top-[297px] rounded-[25px] border-[1.5px] border-[rgba(255,255,255,0.25)] bg-[rgba(15,23,42,0.50)] shadow-[08px24px0rgba(0,0,0,0.25)] w-[370px] h-[85px]"></div>

      <div className="absolute left-[615px] bottom-[118px] rounded-[100px] border border-[#10B981] bg-[#10B981] shadow-[04px20px0rgba(16,185,129,0.20)] w-[210px] h-[62px]"></div>

      <div className="absolute left-[602px] top-[382px] w-[25px] h-[25px]"></div>

      <div className="absolute left-[588px] top-[407px] w-3.5 h-3.5"></div>

      <p className="absolute left-[575px] top-[105px] text-[#F8FAFC] font-inter text-base font-medium w-[54px] h-3.5">
        HOME
      </p>

      <p className="absolute left-[687px] top-[105px] text-[#F8FAFC] font-inter text-base font-medium w-[65px] h-3.5">
        ABOUT
      </p>

      <p className="absolute right-[571px] top-[105px] text-[#F8FAFC] font-inter text-base font-medium w-[81px] h-3.5">
        CONTACT
      </p>

      <div className="absolute left-[630px] bottom-[135px] w-[180px] h-[29px] relative">

        <p className="text-[#F8FAFC] font-inter text-2xl font-bold w-[161px] h-[29px] absolute left-0 top-0">
          LET’S BEGIN
        </p>

        <svg
          width="36"
          height="32"
          viewBox="0 0 36 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 absolute left-[156px] top-4"
        >
          <g filter="url(#filter0_d_51_147)">
            <path
              d="M5.533 10.751C4.65011 10.7878 3.96421 11.5333 4.001 12.4162C4.03778 13.2991 4.78333 13.985 5.66622 13.9482L5.59961 12.3496L5.533 10.751ZM30.7771 12.4329C31.3754 11.7826 31.3332 10.7704 30.6829 10.1721L20.0855 0.422506C19.4352 -0.175779 18.423 -0.133604 17.8247 0.516705C17.2264 1.16701 17.2686 2.1792 17.9189 2.77748L27.3388 11.4438L18.6725 20.8637C18.0742 21.514 18.1164 22.5262 18.7667 23.1245C19.417 23.7228 20.4292 23.6806 21.0275 23.0303L30.7771 12.4329ZM5.59961 12.3496L5.66622 13.9482L29.6662 12.9482L29.5996 11.3496L29.533 9.751L5.533 10.751L5.59961 12.3496Z"
              fill="#F8FAFC"
            />
          </g>

          <defs>
            <filter
              id="filter0_d_51_147"
              x="0"
              y="0"
              width="35.1992"
              height="31.5471"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />

              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />

              <feOffset dy="4" />

              <feGaussianBlur stdDeviation="2" />

              <feComposite
                in2="hardAlpha"
                operator="out"
              />

              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />

              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_51_147"
              />

              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_51_147"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>

      {/* LEFT ARROW */}

      <div className="absolute left-[41px] top-[488px] w-12 h-12 relative">

        <div className="rounded-[48px] bg-[#10B981] shadow-[04px16px0rgba(16,185,129,0.20)] w-12 h-12 absolute left-0 top-0"></div>

        <svg
          width="25"
          height="38"
          viewBox="0 0 25 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-px absolute -left-[34px] top-6"
        >
          <g filter="url(#filter0_d_51_131)">
            <path
              d="M7 16.728H9V12.728H7V14.728V16.728ZM4.58579 13.3138C3.80474 14.0949 3.80474 15.3612 4.58579 16.1422L17.3137 28.8702C18.0948 29.6512 19.3611 29.6512 20.1421 28.8702C20.9232 28.0891 20.9232 26.8228 20.1421 26.0417L8.82843 14.728L20.1421 3.41432C20.9232 2.63327 20.9232 1.36694 20.1421 0.585892C19.3611 -0.195157 18.0948 -0.195157 17.3137 0.585892L4.58579 13.3138ZM7 14.728V12.728H6V14.728V16.728H7V14.728Z"
              fill="#F8FAFC"
            />
          </g>

          <defs>
            <filter
              id="filter0_d_51_131"
              x="0"
              y="0"
              width="24.7275"
              height="37.4561"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />

              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />

              <feOffset dy="4" />

              <feGaussianBlur stdDeviation="2" />

              <feComposite
                in2="hardAlpha"
                operator="out"
              />

              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />

              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_51_131"
              />

              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_51_131"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>

      {/* RIGHT ARROW */}

      <div className="absolute left-[1323px] top-[488px] w-12 h-12 relative">

        <div className="rounded-[48px] bg-[#10B981] shadow-[04px16px0rgba(16,185,129,0.20)] w-12 h-12 absolute left-0 top-0"></div>

        <svg
          width="25"
          height="38"
          viewBox="0 0 25 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-px absolute left-[33px] top-6"
        >
          <g filter="url(#filter0_d_51_155)">
            <path
              d="M17.7275 16.728H15.7275V12.728H17.7275V14.728V16.728ZM20.1418 13.3138C20.9228 14.0949 20.9228 15.3612 20.1418 16.1422L7.41383 28.8702C6.63278 29.6512 5.36645 29.6512 4.5854 28.8702C3.80435 28.0891 3.80435 26.8228 4.5854 26.0417L15.8991 14.728L4.5854 3.41432C3.80435 2.63327 3.80435 1.36694 4.5854 0.585892C5.36645 -0.195157 6.63278 -0.195157 7.41383 0.585892L20.1418 13.3138ZM17.7275 14.728V12.728H18.7275V14.728V16.728H17.7275V14.728Z"
              fill="#F8FAFC"
            />
          </g>

          <defs>
            <filter
              id="filter0_d_51_155"
              x="0"
              y="0"
              width="24.7275"
              height="37.4561"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />

              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />

              <feOffset dy="4" />

              <feGaussianBlur stdDeviation="2" />

              <feComposite
                in2="hardAlpha"
                operator="out"
              />

              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />

              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_51_155"
              />

              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_51_155"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <p className="absolute right-[488px] top-[314px] text-[#FFF] font-inter text-[19px] w-80 h-[52px] text-center">
        We stay still. It's the only defense we have
      </p>

    </div>
  )
}