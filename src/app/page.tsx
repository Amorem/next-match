import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FaRegSmile } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl">Hello World</h1>
      <Button
        as={Link}
        color="primary"
        variant="bordered"
        startContent={<FaRegSmile size={20} />}
        href="/members"
      >
        Click Me
      </Button>
    </div>
  );
}
