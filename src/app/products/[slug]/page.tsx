import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};

const index = ({ params }: Props) => {
  return <h1>{params.slug}이것은 슬렉스</h1>;
};

export default index;

export const generateStaticParams = () => {
  const products = ['pants', 'skirt'];
  return products.map((products) => ({
    slug: products,
  }));
};
