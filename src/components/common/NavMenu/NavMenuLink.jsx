import clsx from "clsx";
import LinkButton from "@/components/ui/LinkButton";
import { navDataLink } from "@/data";


const NavMenuLink = ({ classNameList, classNameLink, onMenuToggled }) => {
  const handleMenuClick = () => {
    if (onMenuToggled) {
      onMenuToggled();
    }
  };
  return (
    <ul
      className={clsx(
        "flex flex-col items-center lg:flex-row lg:items-end justify-between gap-8",
        classNameList
      )}
      onClick={handleMenuClick}
    >
      {navDataLink.map(({ id, href, page }) => (
        <li key={id}>
          <LinkButton className='outline-none shadow-none cursor-pointer  hover:underline focus:underline transition' href={href}>{page}</LinkButton>
        </li>
      ))}
    </ul>
  );
};

export default NavMenuLink;
