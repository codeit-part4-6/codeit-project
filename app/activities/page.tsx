import React from 'react';
import Reservation from '@/components/activities/reservation';

const page = async () => {
  const data = await new Promise<string>(resolve => setTimeout(() => resolve('비동기 데이터 1초'), 1000));

  console.log(data);

  return <Reservation />;
};

export default page;
