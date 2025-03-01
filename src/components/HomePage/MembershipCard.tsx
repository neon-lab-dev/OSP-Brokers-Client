import Image from "next/image";
import { ICONS } from "../../../public/assets";

interface MembershipCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
}

const getBadgeIcon = (badge: string) => {
  switch (badge.toLowerCase()) {
    case "free":
      return (
        <Image
          src={ICONS.freeBadge}
          alt="Free"
          width={20}
          height={20}
          className="w-full h-full object-contain "
        />
      );
    case "bronze":
      return (
        <Image
          src={ICONS.bronzeBadge}
          alt="Bronze"
          width={20}
          height={20}
          className="w-full h-full object-contain "
        />
      );
    case "silver":
      return (
        <Image
          src={ICONS.silverBadge}
          alt="Silver"
          width={20}
          height={20}
          className="w-full h-full object-contain "
        />
      );
    case "gold":
      return (
        <Image
          src={ICONS.goldBadge}
          alt="Gold"
          width={20}
          height={20}
          className="w-full h-full object-contain "
        />
      );
    case "diamond":
      return (
        <Image
          src={ICONS.diamondBadge}
          alt="Diamond"
          width={20}
          height={20}
          className="w-full h-full object-contain "
        />
      );
    case "platinum":
      return (
        <Image
          src={ICONS.platinumBadge}
          alt="Platinum"
          width={20}
          height={20}
          className="w-full h-full object-contain "
        />
      );
    default:
      return null;
  }
};

const getGradientClass = (badge: string) => {
  switch (badge.toLowerCase()) {
    case "free":
      return "from-[#0000002c] to-[#99999914]";
    case "bronze":
      return "from-[#F09C2D2c] to-[#99999914]";
    case "silver":
      return "from-[#FFFFFF2c] to-[#99999914]";
    case "gold":
      return "from-[#F8DC0E2c] to-[#FB850014]";
    case "platinum":
      return "from-[#70F3B14b] to-[#3F9BB5cf]";
    case "diamond":
      return "from-[#24439Bab] to-[#15A5CDef]";
    default:
      return "from-[#0000002c] to-[#99999914]";
  }
};

const MembershipCard: React.FC<MembershipCardProps> = ({
  title,
  price,
  description,
  features,
  buttonText = "Start Now!",
}) => {
  const badge = title;
  return (
    <div
      className={`relative p-[1px] z-[2] text-white rounded-2xl bg-gradient-to-b ${getGradientClass(
        badge
      )} overflow-hidden max-w-[360px] `}
    >
      {/* fading border line */}
      <div className="absolute flex flex-col justify-between gap-20 top-0 left-0 w-full h-full rounded-2xl -z-[1]">
        <div className="relative w-full h-[10%] ">
          <div className="h-full border-[1px] border-b-0 rounded-t-2xl "></div>
          <div className="w-full h-full absolute gradient-border-t-b "></div>
        </div>

        <div className=" relative w-full h-[30%] ">
          <div className="h-full border-[1px] border-t-0 rounded-b-2xl"></div>
          <div className="w-full h-full absolute -top-[100%] gradient-border-b-t "></div>
        </div>
      </div>

      <div className=" p-6 rounded-2xl z-[2] flex flex-col justify-between gap-4 h-full">
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-5">
            <div className="w-[60px] text-black  py-1 text-xs font-bold rounded-lg ">
              {getBadgeIcon(badge)}
            </div>
            <div className="text-[24px] font-[800]">
              {price}/<span className="text-[16px]">month</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 ">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-300 text-sm ">{description}</p>

            <ul className="text-gray-300 text-sm space-y-1">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center font-[400] text-[14px]"
                >
                  <span>•</span>&nbsp;{feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button className=" mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 w-full rounded-full">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default MembershipCard;
