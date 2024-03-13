import { Button } from "@/app/components/ui/button";
import { authenticate } from "./lib/actions";

// TODO: Adjust the layout
// TODO: show loading spinner when clicking the button
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-4xl font-bold text-center">Welcome to Next.js</h1>
        <p className="text-center">
          Get started by editing <code>pages/index.js</code>
        </p>
        <form action={authenticate}>
          <Button className="mt-4">Sign In</Button>
        </form>
      </div>
    </main>
  );
}
