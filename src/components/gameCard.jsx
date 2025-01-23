import { cn } from "../lib/utils";
import { useNavigate } from "react-router-dom";

export function GameCard({id , title, description, image}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/games/${id}`);
  }

  return (
    <div
      className={cn(
        "group max-w-sm rounded-2xl border border-neutral-500/10 p-6 dark:border-white/10 ",
        "dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]",
        "group transform-gpu transition-transform hover:scale-[1.01]",
        "bg-gray-400 mx-4 ",
      )}
      onClick={handleClick}
    >
      <div className="h-40 overflow-hidden rounded-lg mb-4 bg-white">
        <img src={image} alt={title} className="object-fill h-full w-full"/>
      </div>
      <h6 className="mb-2 origin-left transform-gpu font-semibold text-gray-950 text-xl tracking-tighter transition-all group-hover:scale-90">
        {title}
      </h6>
      <p className=" text-sm tracking-tight text-gray-700 font-medium">
        {description}
      </p>
    </div>
  );
}

export default GameCard;
