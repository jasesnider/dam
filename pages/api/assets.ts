import type { NextApiRequest, NextApiResponse } from 'next'

type ImageDetails = {
    id: string,
    name: string,
    url: string,
    size: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<ImageDetails>>
) {
  res.status(200).json(
      [
        {
            id: '1',
            name: 'Image 1',
            url: 'image-1.jpeg',
            size: 1000
        },
        {
            id: '2',
            name: 'Image 2',
            url: 'image-2.jpeg',
            size: 2000
        },
        {
            id: '3',
            name: 'Image 3',
            url: 'image-3.jpeg',
            size: 3000
        }
    ]
)}
