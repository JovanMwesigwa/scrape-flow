import { cn } from "@/lib/utils";
import { TaskParam } from "@/types/task";
import { Handle, Position } from "@xyflow/react";
import React from "react";
import NodeParamField from "./node-param-field";

const NodeInput = ({ input }: { input: TaskParam }) => {
  return (
    <div className="flex justify-start p-3 relative bg-secondary w-full">
      <NodeParamField param={input} />
      {!input.hideHandle && (
        <Handle
          id={input.name}
          type="target"
          position={Position.Left}
          className={cn(
            "!bg-muted-foreground !border-2 !border-background !-left-2 !size-4"
          )}
        />
      )}
    </div>
  );
};

export default NodeInput;
