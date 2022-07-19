import type { NextApiRequest, NextApiResponse } from "next";

export interface Quote {
  slip?: Slip;
}

export interface Slip {
  id?: number;
  advice?: string;
}

const handler = (req: NextApiRequest, res: NextApiResponse<Quote>) => {
  (() => {
    const url = "https://api.adviceslip.com/advice";
    fetch(url)
      .then((response) => response.json())
      .then((data: Quote) => {
        res.status(200).json(data);
      })
      .catch((error) => console.log(error));
  })();
};

export default handler;
