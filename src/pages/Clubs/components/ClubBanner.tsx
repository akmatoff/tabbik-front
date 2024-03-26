import { ICONS } from "@/components/Icons/Icons";
import { IClub } from "@/interfaces/club";

interface Props {
  club: IClub;
}

export default function ClubBanner({ club }: Props) {
  return (
    <div className="w-full h-60 relative">
      <div
        className="w-full h-full bg-center bg-no-repeat rounded-secondary absolute"
        style={{
          backgroundImage: `url(${club.icon})`,
          backgroundSize: "110%",
        }}
      ></div>
      <div className="w-full h-full rounded-secondary absolute bg-black opacity-60"></div>
      <div className="flex flex-col justify-center items-center h-full p-6 relative text-textLight">
        <h1 className="text-3xl font-bold">{club.title}</h1>
        <div className="flex gap-4 absolute bottom-0 right-0 p-6">
          <div className="flex items-center gap-2">
            <div className="text-xl">{ICONS.STAR}</div>
            <div className="text-xl">{club.rating}</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-xl">{ICONS.PROFILE}</div>
            <div className="text-xl">{club.members_count}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
