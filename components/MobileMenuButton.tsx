import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
type Props = {
  onClick: any;
};
export default function MobileMenuButton({ onClick }: Props) {
  return (
    <button className="absolute right-2 top-2 p-2" onClick={onClick}>
      <FontAwesomeIcon className="text-4xl text-black" icon={faBars} />
    </button>
  );
}