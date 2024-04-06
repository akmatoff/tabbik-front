import { ICONS } from "@/components/Icons/Icons";
import PageLayout from "@/components/Layouts/PageLayout";
import useTournaments from "@/queries/tournament";

export default function Tournaments() {
  const { data: tournaments, isLoading } = useTournaments();

  return (
    <PageLayout title="Tournaments">
      <div className="flex flex-col gap-4">
        {tournaments?.map((tournament) => (
          <div className="bg-white rounded-secondary p-4">
            <div className="font-bold">
              <div className="text-3xl">{ICONS.CUP}</div>
              <h1 className="font-bold">{tournament.title}</h1>
            </div>
            <p className="">{tournament.description}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
