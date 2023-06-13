import constants from 'src/config/constants';

export const validateType = (type: string, size: number): boolean => {
  if (
    (type === constants.UPLOAD_TYPE_PNG ||
      type === constants.UPLOAD_TYPE_JPEG) &&
    size <= Number(process.env.MAX_SIZE)
  ) {
    return true;
  } else {
    return false;
  }
};
