import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const SelectComponents = () => {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Gender" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Male</SelectItem>
        <SelectItem value="dark">Female</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectComponents;
