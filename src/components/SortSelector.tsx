import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

const SortSelector = () => {
  const orderByArr = [
    "name",
    "released",
    "added",
    "created",
    "updated",
    "rating",
    "metacritic",
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Order by:
      </MenuButton>
      <MenuList>
        {orderByArr.map((order) => (
          <MenuItem key={order}>{order}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
