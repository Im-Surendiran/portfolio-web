import Link from 'next/link';
import { usePathname } from 'next/navigation';
const activeButton = "activeButton"
const inactiveButton = "heroButton"
export default function DesktopNavLinks() {
  const pathname = usePathname();

  return (
    <div className='flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <div className="pt-4 lg:pt-4 font-outfit px-4 md:px-0">
        <Link href="#about">
          <button className={inactiveButton}  >
            about
          </button>
        </Link>
        <Link href={"#experience"}>
          <button className={inactiveButton}>
            experience
          </button>
        </Link>
        <Link href={"#skills"}>
          <button className={inactiveButton}>
            skills
          </button>
        </Link>
        <Link href={"#projects"}>
          <button className={inactiveButton}>
            projects
          </button>
        </Link>
      </div>
    </div>
  );
}
