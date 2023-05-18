import { RegionInterface } from './interface';
declare const getRegions: ({ apiHost }: {
  apiHost: string;
}) => Promise<RegionInterface[]>;
export default getRegions;
