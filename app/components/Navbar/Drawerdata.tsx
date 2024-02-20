import React from "react";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Haqimizda", href: "/#aboutus-section", current: false },
  { name: "Kurslarimiz", href: "/#services-section", current: false },
  { name: "KBS", href: "/#faq-section", current: false },
  { name: "Natijalarimiz", href: "/#result", current: false },
  { name: "Sharaf kodeksi", href: "/honor", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Data = () => {
  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-purple"
                    : "text-black hover:bg-gray-700 hover:text-purple",
                  "block  py-2 rounded-md text-base font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </a>
            ))}
            <div className="mt-4"></div>
            <a
              href={"tel:+998901122757"}
              className="bg-navyblue w-full hover:text-white text-white border border-purple font-medium py-2 px-4 rounded"
            >
              +998 90 112 27 57
            </a>
            {/* <Contactusform /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
