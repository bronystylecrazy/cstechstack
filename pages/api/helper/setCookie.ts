import { serialize, CookieSerializeOptions } from 'cookie';
import type { NextApiRequest, NextApiResponse } from 'next';

export const setCookie = (
    res: NextApiResponse,
    name: string,
    value: unknown,
    options: CookieSerializeOptions = { maxAge: 3600 * 24 * 60 * 60 }
  ) => {
    const stringValue =
      typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value)
  
    if ('maxAge' in options) {
      options.expires = new Date(Date.now() + options.maxAge)
      options.maxAge /= 1000
    }
  
    res.setHeader('Set-Cookie', serialize(name, String(stringValue), options))
  }