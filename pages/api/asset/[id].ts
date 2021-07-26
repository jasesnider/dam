// import type { NextApiRequest, NextApiResponse } from 'next';
import { assets } from '../assetsList';

const assetCount = assets.length+1;

export default function assetHandler(req: any, res: any) {
    const {
      query: { id, name, url, size },
      method,
      body
    } = req
  
    switch (method) {
      case 'GET':
        // Get data from your database
        res.status(200).json({ id, name, url, size })
        break
      case 'POST':
          // Update or create data in your database
          [...assets, { body }]
          res.status(200).json({ assetCount, name, url, size})
      case 'PUT':
        // Update or create data in your database
        [...assets, { body }]
        res.status(200).json({ id, name, url, size})
        break
      default:
        res.setHeader('Allow', ['GET', 'PUT', 'POST'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  }