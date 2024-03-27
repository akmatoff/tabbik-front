import { DATE_TIME_FORMAT } from "@/constants/common";
import { IClub } from "@/interfaces/club";
import dayjs from "dayjs";

interface Props {
  club: IClub;
}

export default function ClubInfo({ club }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-4">
        <div className="bg-white p-6 rounded-secondary">
          <h1 className="font-bold text-lg">Leader</h1>
          {club.club_leader.username}
        </div>
        <div className="bg-white p-6 rounded-secondary">
          <h1 className="font-bold text-lg">Created</h1>
          {dayjs(club.created).format(DATE_TIME_FORMAT)}
        </div>
      </div>
      <div className="bg-white p-6 rounded-secondary">
        <h1 className="font-bold text-lg">Description</h1>
        {club.description}
      </div>
    </div>
  );
}
