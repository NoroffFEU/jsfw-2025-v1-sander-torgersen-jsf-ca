import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxStars?: number;
}

export default function StarRating({ rating, maxStars = 5 }: StarRatingProps) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`Rating: ${rating} out of ${maxStars}`}
    >
      {Array.from({ length: maxStars }, (_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < Math.round(rating)
              ? "fill-yellow-400 text-yellow-400"
              : "fill-muted text-muted"
          }`}
        />
      ))}
      <span className="ml-1 text-xs text-muted-foreground">({rating})</span>
    </div>
  );
}
