export const isNullValue=(value: any) => {
  if(typeof value === 'undefined' || value === null || value === '')
    return true;
  else
    return false;
}