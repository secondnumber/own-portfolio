import FacebookImageColor from '../../assets/images/facebook.png';
import FacebookImageWhite from '../../assets/images/facebook.svg';
import TwitterImageColor from '../../assets/images/twitter.png';
import TwitterImageWhite from '../../assets/images/twitter.svg';
import PinterestImageColor from '../../assets/images/pinterest.png';
import PinterestImageWhite from '../../assets/images/pinterest.svg';
import LinkedinImageColor from '../../assets/images/linkedin.png';
import LinkedinImageWhite from '../../assets/images/linkedin.svg';
import BehanceImageColor from '../../assets/images/behance.png';
import BehanceImageWhite from '../../assets/images/behance.svg';
import {SocialItemsDataType} from "../../types/types";

export type InitialStateType = typeof initialState;

let initialState = {
  socialItems: [
    {
      id: 1,
      name: 'Facebook',
      link: 'https://ru-ru.facebook.com/',
      imageColor: FacebookImageColor,
      imageWhite: FacebookImageWhite,
    },
    {
      id: 2,
      name: 'Twitter',
      link: 'https://twitter.com/',
      imageColor: TwitterImageColor,
      imageWhite: TwitterImageWhite,
    },
    {
      id: 3,
      name: 'Pinterest',
      link: 'https://www.pinterest.com/',
      imageColor: PinterestImageColor,
      imageWhite: PinterestImageWhite,
    },
    {
      id: 4,
      name: 'Linkedin',
      link: 'https://ru.linkedin.com/',
      imageColor: LinkedinImageColor,
      imageWhite: LinkedinImageWhite,
    },
    {
      id: 5,
      name: 'Behance',
      link: 'https://www.behance.net/',
      imageColor: BehanceImageColor,
      imageWhite: BehanceImageWhite,
    },
  ] as Array<SocialItemsDataType>,
};

const socialReducer = (state = initialState, action: any): InitialStateType => {
  return state;
};

export default socialReducer;
