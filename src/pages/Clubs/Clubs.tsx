import { useClubs } from "@/queries/clubs";
import ClubCard from "./components/ClubCard/ClubCard";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import PageLayout from "@/components/Layouts/PageLayout";

export default function Clubs() {
  const { data: clubs, isLoading } = useClubs();

  return (
    <div className="w-full min-h-screen">
      <PageLayout title="Clubs" onActionButtonClick={() => {}}>
        {isLoading && (
          <div className="w-full min-h-96 grid place-content-center">
            <LoadingSpinner size="l" />
          </div>
        )}
        {!isLoading && (
          <div className="grid md:grid-cols-2 gap-6">
            {clubs?.map((club) => (
              <ClubCard key={club.id} club={club} />
            ))}
          </div>
        )}
      </PageLayout>
    </div>
  );
}
