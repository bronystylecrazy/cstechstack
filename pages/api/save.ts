import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req : NextApiRequest, res : NextApiResponse) {
  const { token } = JSON.parse(req.body);

  if(token.trim() === process.env.SAVE_TOKEN){
    return res.status(200).json({
        code: 200,
        message: 'Saved successfully!',
        success: true
    });
  }

  return res.status(403).json({
    code: 403,
    message: 'Unauthorized!',
    success: false
  });
}