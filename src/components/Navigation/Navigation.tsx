import { FC, useEffect } from "react";
import Link from "next/link";

// function scrollToSection(sectionId) {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   }

const Navigation: FC = () => {
  // useEffect(() => {
  //     // Listen for route changes and scroll to the appropriate section
  //     const handleRouteChange = () => {
  //       // Get the section ID from the route query parameter or use a default value
  //       const sectionId = router.query.section || 'about';
  //       scrollToSection(sectionId);
  //     };

  //     // Initial scroll on page load
  //     handleRouteChange();

  //     // Listen for route changes
  //     router.events.on('routeChangeComplete', handleRouteChange);

  //     // Cleanup the event listener when the component unmounts
  //     return () => {
  //       router.events.off('routeChangeComplete', handleRouteChange);
  //     };
  //   }, []);
  return (
    <nav>
      <ul className="flex gap-3">
        <li>
          <Link href={"/#about"}>Про нас</Link>
        </li>
        <li>
          <Link href={"/#prices"}>Ціни</Link>
        </li>
        <li>
          <Link href={"/#discounts"}>Акції</Link>
        </li>
        <li>
          <Link href={"/#teachers"}>Викладачі</Link>
        </li>
        <li>
        <Link href={"/#articles"}>Статті</Link>
        </li>
        <li>
          <Link href={"/#responses"}>Відгуки</Link>
        </li>
        <li>
          <Link href={"/#calculator"}>Калькулятор</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
