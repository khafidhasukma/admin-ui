import React from "react";
import Icon from "../Elements/Icon";
import CircularProgress from "@mui/material/CircularProgress";

function CardExpense(props) {
  const { data } = props;

  const getCategoryInfo = (category) => {
    const categoryMap = {
      housing: { icon: <Icon.House size={32} />, name: "Housing" },
      food: { icon: <Icon.Food size={32} />, name: "Food" },
      transportation: { icon: <Icon.Transport size={32} />, name: "Transportation" },
      entertainment: { icon: <Icon.Movie size={32} />, name: "Entertainment" },
      shopping: { icon: <Icon.Shopping size={32} />, name: "Shopping" },
      others: { icon: <Icon.Other size={32} />, name: "Others" },
    };
    return categoryMap[category] || { icon: <Icon.Other size={32} />, name: category };
  };

  const trendClass = (trend) => {
    return trend === "up" ? "text-red-500" : "text-green-500";
  };

  const expensesContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((expense, index) => {
        const categoryInfo = getCategoryInfo(expense.category);
        return (
          <div key={index} className="rounded-lg overflow-hidden shadow">
            <div className="bg-gray-06 border-b-2 border-gray-05 flex items-center justify-between p-3">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gray-05 text-gray-02 rounded-lg">{categoryInfo.icon}</div>
                <div>
                  <div className="text-base font-semibold text-gray-01">{categoryInfo.name}</div>
                  <div className="text-lg font-bold text-black">${expense.amount}</div>
                </div>
              </div>
              <div className="space-y-1 flex flex-col items-end">
                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium text-gray-02">{expense.percentage}%</span>
                  {expense.trend === "up" ? (
                    <Icon.ArrowUp size={16} className={trendClass("up")} />
                  ) : (
                    <Icon.ArrowDown size={16} className={trendClass("down")} />
                  )}
                </div>
                <p className="text-xs text-gray-03 font-medium">Compare to the last month</p>
              </div>
            </div>

            {/* Detail items */}
            <div className="px-3">
              {expense.detail.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center border-b-2 last:border-0 border-gray-05 py-3">
                  <div className="text-base font-semibold text-gray-01">{item.item}</div>
                  <div className="space-y-1 text-end">
                    <div className="text-base font-semibold text-gray-01">${item.amount}</div>
                    {/* Date */}
                    <div className="text-xs text-gray-02">{expense.detail[0].date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <>
      {data.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-64 text-primary">
          <CircularProgress color="inherit" size={50} />
          <div className="mt-4">Loading Data</div>
        </div>
      ) : (
        expensesContent
      )}
    </>
  );
}

export default CardExpense;
