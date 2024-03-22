import Button from "@/components/Button/Button";
import { IClub } from "@/interfaces/club";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";

interface Props {
  club: IClub;
}

export default function ClubCard({ club }: Props) {
  return (
    <div className="flex flex-col p-6 gap-6 bg-white rounded-primary">
      <div className="flex items-center gap-6">
        <img
          src={club.icon}
          alt="club icon"
          className="w-24 h-24 rounded-full"
        />
        <div>
          <h1 className="font-bold text-xl text-accent">{club.title}</h1>
          <p className="font-light">{club.description}</p>
        </div>
      </div>

      <div className="flex w-full items-center justify-between gap-2">
        <div className="flex gap-1">
          <IoMdPerson className="text-xl text-secondary" />
          <h3 className="text-sm font-light">0</h3>
        </div>
        <div>
          <Button
            icon={<FaArrowRight />}
            text="Join the club"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
