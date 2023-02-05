import { UpBtn, UpBtnIcon } from './BtnToTop.styled';

export const BtnToTop = () => {
  const btnSettings = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <UpBtn type="button" onClick={btnSettings}>
      <UpBtnIcon />
    </UpBtn>
  );
};
