import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedSortOrder: string | null;
}

const SortSelector = ({ onSelectSortOrder, selectedSortOrder }: Props) => {
  const orderByArr = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date ddded" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const sortOrder = orderByArr.find(
    (order) => order.value === selectedSortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Order by: {sortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {orderByArr.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
