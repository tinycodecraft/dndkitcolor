import { FC } from "react";
import { useDroppable } from "@dnd-kit/core";
import { Box } from "../elements/grid";




export const Trash: FC<{ active: boolean }> = ({ active }) => {
  const { setNodeRef, isOver } = useDroppable({
    id: "trash",
  });

  return (
    <Box
      ref={setNodeRef}
      color={(isOver && active) ? "red" : "grey"}
    > Trash</Box >
  );
};

