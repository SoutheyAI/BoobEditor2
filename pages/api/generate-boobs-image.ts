import { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'node-fetch'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const response = await fetch('http://localhost:5000/api/generate-boobs-image', {
        method: 'POST',
        body: req.body,
      })

      const data = await response.json()
      res.status(response.status).json(data)
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}