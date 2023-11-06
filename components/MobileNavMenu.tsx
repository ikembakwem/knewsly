import Link from "next/link";

export const MobileNavMenu = () => {
  return (
    <div className="h-screen md:hidden border-t border-gray-200">
      <div className="absolute top-14 z-50 w-full px-4">
        <nav>
          <div className="flex flex-col gap-4 py-4">
            <Link href="/sports">
              <span className="font-bold text-xl">Sports News</span>
            </Link>
            <Link href="/business">
              <span className="font-bold text-xl">Business News</span>
            </Link>
            <Link href="/technology">
              <span className="font-bold text-xl">Tech News</span>
            </Link>
          </div>
          <div className="text-indigo-700">
            <button>Sign In</button> <span className="text-black">or</span>{" "}
            <button>Register</button>
          </div>
        </nav>
      </div>
    </div>
  );
};
