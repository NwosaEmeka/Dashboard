import {
  IoHomeOutline,
  IoBagHandleOutline,
  IoCartOutline,
  IoWalletOutline,
  IoPeopleOutline,
  IoChatbubbleEllipsesOutline,
  IoSettingsOutline,
  IoArrowUpCircleOutline,
  IoArrowDownCircleOutline
} from 'react-icons/io5';

export const generateIcon = function(icon) {
    switch (icon) {
      case 'home':
        return <IoHomeOutline size={ 24}/>
      case 'bag':
        return <IoBagHandleOutline size={ 24}/>
      case 'cart':
        return <IoCartOutline size={ 24}/>
      case 'wallet':
        return <IoWalletOutline size={ 24}/>
      case 'people':
        return <IoPeopleOutline size={ 24}/>
      case 'chat':
        return <IoChatbubbleEllipsesOutline size={ 24}/>
      case 'settings':
        return <IoSettingsOutline size={24} />
      case 'arrow-up':
        return <IoArrowUpCircleOutline />
      case 'arrow-down':
        return <IoArrowDownCircleOutline />
      default:
        return ''
    }
  }