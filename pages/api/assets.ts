import type { NextApiRequest, NextApiResponse } from 'next';
import { assets } from './assetsList';

type ImageDetails = {
    id: string,
    name: string,
    url: string,
    size: number
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<ImageDetails>>
) {
  res.status(200).json(assets)
};