import React, { useContext, useEffect, useRef, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import {
  useGetCustomerAnalyticsQuery,
  useGetSalesSummaryQuery,
  useGetTransactionHistorySummaryQuery,
  useGetTransactionOrderHistoryQuery,
} from "../../services/reports";
import dayjs from "dayjs";

const Home = () => {
  const history = useHistory();
  const [filter, setFilter] = useState({
    startDate: dayjs(new Date().setDate(1)).format("YYYY-MM-DD"),
    endDate: dayjs().format("YYYY-MM-DD"),
  });
  const { data: custumersAnalitics } = useGetCustomerAnalyticsQuery();
  const { data: salesSummary } = useGetSalesSummaryQuery({
    startDate: filter.startDate,
    endDate: filter.endDate,
  });
  const { data: transactionHistorySummary } =
    useGetTransactionHistorySummaryQuery({
      startDate: filter.startDate,
      endDate: filter.endDate,
    });
  const { data: transactionOrderHistory } = useGetTransactionOrderHistoryQuery({
    startDate: filter.startDate,
    endDate: filter.endDate,
  });

  useEffect(() => {
    if (custumersAnalitics) {
      // setUsers(custumersAnalitics?.data);
    }
  }, [custumersAnalitics]);

  console.log(
    "data",
    custumersAnalitics,
    salesSummary,
    transactionHistorySummary,
    transactionOrderHistory
  );

  return <div></div>;
};

export default Home;
