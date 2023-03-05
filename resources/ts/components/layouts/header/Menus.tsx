type MenusProps = {
  isNavbarOpen: boolean;
};

const menus = [
  { slug: "home", name: "Home" },
  { slug: "blog", name: "Blog" },
  { slug: "about", name: "About US" },
  { slug: "contact", name: "Contact US" },
];

export default function Menus({ isNavbarOpen }: MenusProps): JSX.Element {
  return (
    <div
      className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
        isNavbarOpen ? "block" : "hidden"
      }`}
    >
      <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
        {menus.map((menu) => (
          <li className="text-gray-600 hover:text-blue-600">
            <a href={`#${menu.slug}`}>{menu.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
