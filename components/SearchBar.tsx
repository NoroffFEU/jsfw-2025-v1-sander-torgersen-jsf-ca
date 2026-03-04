"use client";

import { Search } from "lucide-react";
import { Input } from "./ui/input";

interface SearchBarState {
  query: string;
}
interface SearchBarActions {
  onChange: (value: string) => void;
}

interface SearchBarProps extends SearchBarState, SearchBarActions {}

export default function SearchBar({ query, onChange }: SearchBarProps) {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10"
      />
    </div>
  );
}
