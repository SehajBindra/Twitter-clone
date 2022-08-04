// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { TweetBody } from '../../typing'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    const data : TweetBody = JSON.parse(req.body);

    const mutations = {
        mutations: [
            {
                
                    create: {
                        
                    }
                
            }
        ]
    }
  res.status(200).json({ name: 'John Doe' })
}
