import { RiVerifiedBadgeFill } from "react-icons/ri";
import Link from "next/link";
import { Button } from "../components/ui/button"; // update if path is different

export default function SuccessModal() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center space-y-4 animate-fade-in">
        <div className="text-green-600 text-8xl py-6 mb-2 flex justify-center">
          <RiVerifiedBadgeFill />
        </div>
        <h2 className="text-xl font-semibold">All steps completed</h2>
        <p className="text-sm text-gray-600">
          Successfully created your account
        </p>
        <Link href="/dashboard">
          <Button className="bg-blue-950 w-full">Go to Dashboard</Button>
        </Link>
      </div>
    </div>
  );
}
