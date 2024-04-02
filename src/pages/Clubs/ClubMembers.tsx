import { IClub } from "@/interfaces/club";
import { useClubMembers } from "@/queries/clubs";

interface Props {
  club: IClub;
}

export default function ClubMembers({ club }: Props) {
  const { data: members, isLoading } = useClubMembers({ id: club.id });

  return (
    <div className="flex flex-col w-full mt-4 gap-4">
      {!isLoading &&
        members?.map((member) => (
          <div className="bg-white rounded-secondary p-6">
            {member.username}
          </div>
        ))}
    </div>
  );
}
