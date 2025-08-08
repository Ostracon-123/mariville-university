import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Option {
  id: string | number;
  label: string;
  value: string;
}

interface Props {
  options: Option[];
  label: string;
  placeholder: string;
}

export function SelectCat({
  placeholder = "Select an option",
  label,
  options,
}: Props) {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options.map((o) => (
            <SelectItem key={o.id} value={String(o.id)}>
              {o.value}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

// const year = [
//   {
//     id: 1,
//     year: "2020 / 2021",
//   },
//   {
//     id: 2,
//     year: "2020 / 2022",
//   },
// ];
