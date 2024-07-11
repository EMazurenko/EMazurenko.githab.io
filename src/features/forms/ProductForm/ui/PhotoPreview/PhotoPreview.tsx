import React from 'react';
import { Control, Path, useWatch } from 'react-hook-form';
import s from './PhotoPreview.module.scss';

type PhotoPreviewType<T> = {
  control: Control<T>;
};

const PhotoPreview = <T,>({ control }: PhotoPreviewType<T>) => {
  const photo_url = useWatch<T>({ control, name: 'photo' as Path<T> }) as string;
  return (
    photo_url && (
      <div className={s.root}>
        <img className={s.preview_image} src={photo_url} alt="Фото товара" />
      </div>
    )
  );
};

export default PhotoPreview;
