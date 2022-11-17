export const baseUrl = process.env.API_BASE_URL;

export const getUrl = (paths: string[], query: Record<symbol, string | number> = {}): string => {
  const extraPath: string = paths.join('/');
  const queryParams: string = Object.keys(query).map((key) => {
    return `${key}=${query[Symbol(key)]}`;
  }).join('&');
  if (queryParams === '') {
    return `${baseUrl}/${extraPath}`;
  } else {
    return `${baseUrl}/${extraPath}?${queryParams}`;
  }

}

export const getBikesURL = (): string => {
  return getUrl(['bikes']);
}

export const getManufacturersUrl = (id?: number): string => {
  if (id === undefined) {
    return getUrl(['manufacturers']);
  }
  return getUrl(['manufacturers', id.toString()]);
}
