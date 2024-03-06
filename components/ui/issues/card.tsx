import Link from "next/link";
import { OpenState, ClosedState } from "./buttons";
import { IssueCardType } from "@/app/lib/definitions";

export default function Card({
  issueCard
} : {
  issueCard: IssueCardType
}) {
  const { title, user, repo, number, state, formattedCreatedAt, formattedUpdatedAt } = issueCard;
  return (
    <Link href={`/dashboard/${user}/${repo}/${number}`}>
      <div className="rounded-xl bg-gray-300 p-2 shadow-sm transition-colors duration-200 ease-in hover:bg-gray-400 hover:shadow-lg">
        <div className="flex justify-between items-start p-2">
          <div className="flex flex-col gap-2">
            <p className="text-4xl"><strong>{title}</strong></p>
            <p className="text-slate-600">{repo} #{number}</p>
          </div>
          { state === "open" ? <OpenState /> : <ClosedState /> }
        </div>
        <div className="mt-2 flex justify-start gap-4 p-2">
          <p className="text-sm italic">Created: {formattedCreatedAt} / Updated: {formattedUpdatedAt}</p>
        </div>
      </div>
    </Link>
  );
}