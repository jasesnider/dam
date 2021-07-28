import type { NextApiRequest, NextApiResponse } from 'next';
import { assets } from './assetsList';
import ImageDetails from '../../interfaces/ImageDetails';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<ImageDetails>>
) {
  res.status(200).json(assets)
};