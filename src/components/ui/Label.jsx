import React, { forwardRef } from "react";
import { cn } from "../../lib/utils";

const Label = forwardRef(({ className, ...props }, ref) => {
  return (
    <label
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        cn
      )}
      ref={ref}
      {...props}
    />
  );
});
Label.displayName = "Label";

export { Label };
