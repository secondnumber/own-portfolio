import {MenuItemsDataType} from "../../types/types";

const CLOSE_MENU = 'CLOSE_MENU';
const OPEN_MENU = 'OPEN_MENU';

export type InitialStateType = typeof initialState;

let initialState = {
  title: 'ANA DOE',
  menuItems: [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'About me', link: '/about' },
    { id: 3, name: 'My projects', link: '/projects' },
    { id: 4, name: 'Contact me', link: '/contacts' },
  ] as Array<MenuItemsDataType>,
  isClosed: true,
};

const menuReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case CLOSE_MENU:
      return {
        ...state,
        isClosed: true,
      };
    case OPEN_MENU:
      return {
        ...state,
        isClosed: false,
      };
    default:
      return state;
  }
};

type CloseMenuActionType = {
  type: typeof CLOSE_MENU
}

type OpenMenuActionType = {
  type: typeof OPEN_MENU
}

export const closeMenu = (): CloseMenuActionType => ({
  type: CLOSE_MENU,
});

export const openMenu = (): OpenMenuActionType => ({
  type: OPEN_MENU,
});

export default menuReducer;
