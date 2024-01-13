import svgSprite from '../assets/svg/sprite.svg';

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
};

export const Icon = (props: IconPropsType) => {
  return (
    <svg
      width={props.width || '46'}
      height={props.height || '46'}
      viewBox={props.viewBox || '0 0 46 46'}
      fill={props.fill || 'none'}
      xmlns="http://www.w3.org/2000/svg">
      <use xlinkHref={`${svgSprite}#${props.iconId}`}></use>
    </svg>
  );
};
