import React from "react";
import { PhoneCall } from "lucide-react";

type TollFreeHelplineProps = {
  variant?: "footer" | "floating";
};

const PHONE_NUMBER = "040 4189 7778";
const PHONE_LINK = "tel:+914041897778";

const TollFreeHelpline: React.FC<TollFreeHelplineProps> = ({
  variant = "floating",
}) => {
  const isFloating = variant === "floating";

  const pill = (
    <a
      href={PHONE_LINK}
      aria-label={`Call OXYGLOBAL Toll Free helpline ${PHONE_NUMBER}, available 24/7`}
      className={`
        group inline-flex
        items-center justify-center
        rounded-full
        border border-[#D6E4F5]
        bg-[#F1F6FD]
        text-[#2F5FAA]
        transition-all duration-300
        hover:border-[#2F5FAA]
        hover:bg-[#E7F0FB]
        ${
          isFloating
            ? "gap-x-2 px-2.5 py-1.5 sm:gap-x-2 sm:px-3 sm:py-2 shadow-[0_6px_20px_rgba(47,95,170,0.2)] hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(47,95,170,0.26)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36A35C] focus-visible:ring-offset-2 backdrop-blur-md bg-[#F1F6FD]/95"
            : "gap-x-2.5 gap-y-2 px-3 py-2.5 max-w-full flex-wrap hover:shadow-[0_4px_14px_rgba(47,95,170,0.12)]"
        }
      `}
    >
      {/* PHONE ICON */}
      <span
        className={`
          relative flex shrink-0
          items-center justify-center
          rounded-full bg-[#2F5FAA]/10
          text-[#2F5FAA]
          transition-transform duration-300
          group-hover:scale-105
          ${
            isFloating
              ? "h-7 w-7 sm:h-[30px] sm:w-[30px]"
              : "h-8 w-8"
          }
        `}
      >
        <PhoneCall
          size={isFloating ? 15 : 17}
          strokeWidth={2.1}
          className="text-[#2F5FAA]"
        />

        {/* ACTIVE STATUS INDICATOR */}
        <span
          className="
            absolute -right-0.5 -top-0.5
            flex h-2.5 w-2.5
            items-center justify-center
          "
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#36A35C] opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full border border-white bg-[#36A35C]" />
        </span>
      </span>

      {/* NUMBER */}
      <span
        className={`
          whitespace-nowrap font-bold
          text-[#173D7B]
          ${
            isFloating
              ? "text-[12px] sm:text-[13px] tracking-tight"
              : "text-[13px] sm:text-[14px]"
          }
        `}
      >
        Toll Free: {PHONE_NUMBER}
      </span>

      {/* AVAILABILITY */}
      <span
        className={`
          whitespace-nowrap rounded-full
          bg-[#E5F5EA]
          font-semibold text-[#166534]
          ${
            isFloating
              ? "px-2 py-0.5 text-[9.5px] sm:text-[10px]"
              : "px-2.5 py-1 text-[10px]"
          }
        `}
      >
        24/7
      </span>
    </a>
  );

  if (isFloating) {
    return (
      <aside
        aria-label="Floating Helpline"
        className="
          fixed right-3
          bottom-[calc(14px+env(safe-area-inset-bottom))]
          z-[100]
          sm:bottom-5 sm:right-5
          md:bottom-6 md:right-6
        "
      >
        {pill}
      </aside>
    );
  }

  return pill;
};

export default TollFreeHelpline;
