import Link from "next/link";

export const Header = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Create", href: "/create" },
  ];
  return (
    <header className="rounded-md bg-bg-300">
      <nav
        className="flex items-center justify-center p-4 mx-auto max-w-7xl lg:px-8"
        aria-label="Global"
      >
        <div className="flex gap-x-12">
          {navigation.map((item) => (
            <Link
              href={item.href}
              key={item.name}
              className="text-sm font-semibold leading-6 text-text-100"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};
