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
        <SelectValue placeholder="Employment status" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Employed</SelectItem>
        <SelectItem value="dark">Self Employed</SelectItem>
        <SelectItem value="default">UnEmployed</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectComponents;
