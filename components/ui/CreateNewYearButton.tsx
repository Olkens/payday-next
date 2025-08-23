import { Month } from "@/lib/types";
import { Button } from "@/components/ui/button";

interface cnybProps {
  setMonths: React.Dispatch<React.SetStateAction<Month[]>>;
  year: number;
  handleCreateNewYear: (year: string) => Promise<void>;
}

export default function CreateNewYearButton(props: cnybProps) {
  const year = props.year;

  const handleClick = () => {
    props.handleCreateNewYear(year);
  };
  return (
    <>
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Button onClick={handleClick}>Create new year</Button>
      </div>
    </>
  );
}
