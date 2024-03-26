import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import ClubCard from "./ClubCard";
import { useClubs } from "@/queries/clubs";

export default function ClubsList() {
  const { data: clubs, isLoading } = useClubs();

  return (
    <div>
      {isLoading && (
        <div className="w-full min-h-96 grid place-content-center">
          <LoadingSpinner size="l" />
        </div>
      )}
      {!isLoading && (
        <div className="grid md:grid-cols-2 gap-4">
          {clubs?.map((club) => (
            <ClubCard key={club.id} club={club} />
          ))}
        </div>
      )}
    </div>
  );
}
