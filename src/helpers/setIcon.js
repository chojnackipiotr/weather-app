import {BsSun} from 'react-icons/all';
import {FaCloudSun, FaCloudShowersHeavy} from 'react-icons/all';
import {CgSmileUpside} from 'react-icons/all';
import {IoCloudSharp, IoThunderstorm, IoSnow} from 'react-icons/all';
import {RiMistLine} from 'react-icons/all';

export default function setIcon(iconCode) {
  let emoji;

  switch (iconCode) {
    case '01d':
    case '01n':
      emoji = <BsSun/>;
      break;
    case '02d':
    case '02n':
      emoji = <FaCloudSun/>;
      break;
    case '03d':
    case '03n':
    case '04d':
    case '04n':
      emoji = <IoCloudSharp/>;
      break;
    case '09d':
    case '09n':
    case '10d':
    case '10n':
      emoji = <FaCloudShowersHeavy/>;
      break;
    case '11d':
    case '11n':
      emoji = <IoThunderstorm/>;
      break;
    case '13d':
    case '13n':
      emoji = <IoSnow/>;
      break;
    case '50d':
    case '50n':
      emoji = <RiMistLine/>;
      break;
    default:
      emoji = <CgSmileUpside/>;
      break;
  }

  return <span role='img' aria-label='emoji'>{emoji}</span>;
}
