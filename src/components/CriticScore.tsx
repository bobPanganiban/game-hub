import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score >= 90 ? "green" : score > 75 ? "yellow" : "red";

  return (
    <Badge colorScheme={color} fontSize={"14px"} paddingX={"10px"}>
      {score}
    </Badge>
  );
};

export default CriticScore;
