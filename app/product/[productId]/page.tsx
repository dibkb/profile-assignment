import React from "react";

const Home = ({ params }: { params: { productId: string } }) => {
  return <div>{params.productId}</div>;
};
export default Home;
