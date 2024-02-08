import { Button, buttonVariants } from "@repo/ui/components/ui/button";
import { cn } from "@repo/ui/lib/utils";

export default function Page() {
  return (
    <main>
      <Button className={cn(buttonVariants({ variant: "default" }))}>
        Click me
      </Button>
    </main>
  );
}
