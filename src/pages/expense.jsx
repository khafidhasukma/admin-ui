import React, { useState, useEffect } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import CardExpense from "../components/Fragments/CardExpense";
import { expensesService } from "../services/dataService";
import AppSnackbar from "../components/Elements/AppSnackbar";

function expense() {
  const [expenses, setExpenses] = useState([]);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const data = await expensesService();
        setExpenses(data);
      } catch (err) {
        setSnackbar({
          open: true,
          message: err.msg || "Failed to load expenses data",
          severity: "error",
        });
      }
    };

    fetchExpenses();
  }, []);

  return (
    <MainLayout>
      <div className="mb-4">
        <h1 className="text-2xl text-gray-02">Expenses Comparison</h1>
      </div>
      <CardExpense data={expenses} />

      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </MainLayout>
  );
}

export default expense;
