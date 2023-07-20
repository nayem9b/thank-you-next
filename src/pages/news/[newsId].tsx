import { useRouter } from "next/router";
import React from "react";

const News1 = () => {
  const router = useRouter();
  return (
    <div>
      <h1>This is dynamic news page of : {router.query.newsId}</h1>
    </div>
  );
};

export default News1;
