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
          <div className="flex bg-white rounded-secondary p-6 items-center gap-4">
            {member.avatar && (
              <img src={member.avatar} className="w-12 h-12 rounded-full" />
            )}
            <h1>{member.username}</h1>
          </div>
        ))}
    </div>
  );
}
