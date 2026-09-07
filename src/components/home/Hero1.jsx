import lionbg from '../../assets/lionbg.png'
import lioncutout from '../../assets/lioncutout.png'

export default function Hero1() {
  return (
    <div
      className="
        relative
        flex
        w-[1440px]
        h-[1024px]
        pt-[63px]
        pr-[29px]
        pb-[66px]
        pl-[27px]
        flex-col
        items-start
        gap-[10px]
        overflow-hidden
        bg-[#0B0F17]
      "
    >

      {/* =========================
          MAIN LION IMAGE
      ========================== */}

      <div className="relative shrink-0 w-[1384px] h-[895px]">

        <img
          src={lionbg}
          alt="Lion background"
          className="
            absolute
            left-px
            top-0.5
            w-[1383px]
            h-[893px]
            max-w-none
            rounded-[30px]
          "
        />

        <img
          src={lioncutout}
          alt="Lion"
          className="
            absolute
            left-0
            top-0
            w-[1322px]
            h-[895px]
            max-w-none
            rounded-[30px]
          "
        />

      </div>


      {/* =========================
          TOP NAVIGATION PILL
      ========================== */}

      <div
        className="
          absolute
          left-[537px]
          top-[88px]
          w-[365px]
          h-[48px]
          rounded-[40px]
          border
          border-[rgba(255,255,255,0.15)]
          bg-[rgba(30,41,59,0.50)]
          backdrop-blur-[10px]
        "
      />

      {/* HOME ACTIVE PILL */}

      <div
        className="
          absolute
          left-[553px]
          top-[97px]
          w-[98px]
          h-[30px]
          rounded-[40px]
          bg-[rgba(16,185,129,0.80)]
        "
      />


      {/* =========================
          NAVIGATION TEXT
      ========================== */}

      <p
        className="
          absolute
          left-[575px]
          top-[105px]
          w-[54px]
          h-[14px]
          text-[#F8FAFC]
          font-inter
          text-[16px]
          font-medium
          leading-none
        "
      >
        HOME
      </p>

      <p
        className="
          absolute
          left-[687px]
          top-[105px]
          w-[65px]
          h-[14px]
          text-[#F8FAFC]
          font-inter
          text-[16px]
          font-medium
          leading-none
        "
      >
        ABOUT
      </p>

      <p
        className="
          absolute
          right-[571px]
          top-[105px]
          w-[81px]
          h-[14px]
          text-[#F8FAFC]
          font-inter
          text-[16px]
          font-medium
          leading-none
        "
      >
        CONTACT
      </p>


      {/* =========================
          THOUGHT BUBBLE
      ========================== */}

      <div
        className="
          absolute
          left-[490px]
          top-[254px]
          w-[409px]
          h-[124px]
        "
      >

        {/* Main bubble */}

        <div
          className="
            absolute
            left-0
            top-0
            w-[370px]
            h-[85px]
            rounded-[25px]
            border-[1.5px]
            border-[rgba(255,255,255,0.25)]
            bg-[rgba(15,23,42,0.50)]
            backdrop-blur-[10px]
            shadow-[0_8px_24px_0_rgba(0,0,0,0.25)]
          "
        />

        {/* Bubble lower extension */}

        <div
          className="
            absolute
            left-[25px]
            top-[85px]
            w-[25px]
            h-[25px]
          "
        />

        {/* Small bubble */}

        <div
          className="
            absolute
            left-[0px]
            top-[110px]
            w-[14px]
            h-[14px]
            rounded-full
            bg-[rgba(15,23,42,0.50)]
            border
            border-[rgba(255,255,255,0.25)]
          "
        />

      </div>


      {/* =========================
          THOUGHT BUBBLE TEXT
      ========================== */}

      <p
        className="
          absolute
          left-[551px]
          top-[282px]
          w-[320px]
          h-[33px]
          text-[#FFFFFF]
          font-inter
          text-[19px]
          font-normal
          leading-[33px]
          text-center
        "
      >
        This is the only home he knows
      </p>


      {/* =========================
          LET'S BEGIN BUTTON
      ========================== */}

      <div
        className="
          absolute
          right-[603px]
          bottom-[138px]
          w-[210px]
          h-[62px]
        "
      >

        {/* Button background */}

        <div
          className="
            absolute
            left-0
            top-0
            w-[210px]
            h-[62px]
            rounded-[100px]
            border
            border-[#10B981]
            bg-[#10B981]
            shadow-[0_4px_20px_0_rgba(16,185,129,0.20)]
          "
        />

        {/* Button text */}

        <p
          className="
            absolute
            left-[18px]
            top-[16px]
            w-[161px]
            h-[29px]
            text-[#F8FAFC]
            font-inter
            text-[24px]
            font-bold
            leading-[29px]
          "
        >
          LET’S BEGIN
        </p>

        {/* Arrow */}

        <svg
          width="36"
          height="32"
          viewBox="0 0 36 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="
            absolute
            left-[174px]
            top-[32px]
            w-[24px]
            h-auto
          "
        >
          <path
            d="M1 16H34M34 16L20 2M34 16L20 30"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

      </div>


      {/* =========================
          RIGHT CAROUSEL ARROW
      ========================== */}

      <div
        className="
          absolute
          left-[1330px]
          top-[488px]
          w-[48px]
          h-[48px]
        "
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[48px] h-[48px]"
        >
          <circle
            cx="24"
            cy="24"
            r="23.5"
            stroke="rgba(255,255,255,0.35)"
          />

          <path
            d="M20 16L28 24L20 32"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>


      {/* =========================
          LEFT CAROUSEL ARROW
      ========================== */}

      <div
        className="
          absolute
          left-[41px]
          top-[488px]
          w-[48px]
          h-[48px]
        "
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[48px] h-[48px]"
        >
          <circle
            cx="24"
            cy="24"
            r="23.5"
            stroke="rgba(255,255,255,0.35)"
          />

          <path
            d="M28 16L20 24L28 32"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

    </div>
  )
}