import React, { FC, useReducer } from 'react';
import { ModalWindow } from 'src/shared/ui/modal/ModalWindow';
import s from './ModalController.module.scss';

type ModalControllerState = {
  needShow: boolean;
  windowTitle: string;
  windowContent: string;
};

type ModalControllerAction = { type: string; payload?: Omit<ModalControllerState, 'needShow'> };

const reducer = (state: ModalControllerState, action: ModalControllerAction): ModalControllerState => {
  switch (action.type) {
    case 'show':
      return {
        needShow: true,
        ...action.payload,
      };
    case 'close':
      return {
        needShow: false,
        windowTitle: '',
        windowContent: '',
      };
  }
};

export const ModalController: FC = () => {
  const [state, dispatch] = useReducer(reducer, { needShow: false, windowTitle: '', windowContent: '' });
  const titleElementName = 'title';
  const contentElementName = 'content';

  const handleShow = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target;
    dispatch({
      type: 'show',
      payload: {
        windowTitle: form[titleElementName].value,
        windowContent: form[contentElementName].value,
      },
    });
  };

  const handleClose = () => dispatch({ type: 'close' });

  return (
    <>
      <form className={s.root} onSubmit={handleShow}>
        <div>
          <label>Заголовок окна</label>
          <input type="text" name={titleElementName} title="Заголовок окна" defaultValue="Модальное окно" />
        </div>
        <div>
          <label>Контент окна</label>
          <textarea name={contentElementName} title="Контент окна" defaultValue="Содержимое модального окна" />
        </div>
        <button type="submit">Показать модальное окно</button>
      </form>
      {state.needShow && (
        <ModalWindow title={state.windowTitle} visible={true} onClose={handleClose}>
          {state.windowContent}
        </ModalWindow>
      )}
    </>
  );
};
