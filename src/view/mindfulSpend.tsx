import { Input } from "@/components/ui/input";
import { ComboboxCustom } from "@/components/ui/comboboxCustom";
import { useReducer, useState } from "react";

import {
  getInitialState,
  mindfulSpendReducer,
} from "@/view/reducer/mindfulSpendReducer";

const categorias = [
  { value: "food", label: "Comida" },
  { value: "transport", label: "Transporte" },
  { value: "entertainment", label: "Entretenimiento" },
];

//Se define el type para el array de gastos
type Expense = {
  id: string;
  dateValue: Date;
  name: string;
  category: string;
  value: number;
};

export const MindfulSpend = () => {
  const [state, dispatch] = useReducer(mindfulSpendReducer, getInitialState());

  const [inputValue, setInputValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [category, setCategory] = useState("");

  // const [expenses, setExpenses] = useState<Expense[]>([]);
  // const [inputValue, setInputValue] = useState("");
  // const [nameValue, setNameValue] = useState("");
  // const [category, setCategory] = useState("");

  //Agregar un gasto a la lista y actualizar el valor final
  const addExpense = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch({
      type: "ADD_EXPENSE",
      payload: {
        id: Date.now().toString(),
        name: nameValue,
        category: category,
        value: parseFloat(inputValue),
        dateValue: new Date(),
      },
    });

    // const newExpense = {
    //   id: Date.now().toString(),
    //   dateValue: new Date(),
    //   name: nameValue,
    //   category: category,
    //   value: parseFloat(inputValue),
    // };

    //console.log("Nuevo gasto creado: ", newExpense);

    // setExpenses([...expenses, newExpense]);
    //console.log("Gastos antes de agregar: ", expenses);

    //console.log("Gastos después de agregar: ", [...expenses, newExpense]);

    setInputValue("");
    setNameValue("");
    setCategory("");
  };

  const deleteExpense = (id: string) => {
    //console.log("Eliminando" + id);
    //console.log("Gastos antes de eliminar: ", expenses);

    dispatch({
      type: "DELETE_EXPENSE",
      payload: id,
    });
    //console.log("Gastos después de eliminar: ", updateExpenses);
    // setExpenses(updateExpenses);
  };

  return (
    <>
      <main className="max-w-[1200px] mx-auto px-container-margin-mob md:px-container-margin-desk py-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-section-gap">
          {/* <!-- Summary Section (Left/Top) --> */}
          <div className="md:col-span-5 space-y-gutter">
            <div className="bg-surface-container-lowest rounded-xl p-8 elevation-1 border border-primary-container/20 relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary-container/30 rounded-full blur-2xl"></div>
              <p className="font-label-md text-label-md text-on-surface-variant mb-2">
                Resumen Mensual
              </p>
              <h2 className="font-display-lg text-display-lg text-primary mb-1">
                Total de Gastos
              </h2>
              <div className="flex items-baseline gap-2">
                <span className="font-display-lg text-[48px] text-primary">
                  $1200
                </span>
              </div>
            </div>
            {/* Form to Add Expenses */}
            <div className="bg-surface-container-lowest rounded-xl p-8 elevation-1">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-6">
                Agregar Nuevo Gasto
              </h3>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-on-surface-variant ml-1">
                    Nombre del Gasto
                  </label>
                  <Input
                    className="w-full bg-surface-container-low border-none rounded-xl pl-4 pr-4 py-3 focus:ring-2 focus:ring-primary-container focus:bg-surface-container-lowest transition-all placeholder:text-outline/50"
                    placeholder="Ej: Suscripción Streaming"
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-on-surface-variant ml-1">
                    Valor
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
                      $
                    </span>
                    <Input
                      className="w-full bg-surface-container-low border-none rounded-xl pl-8 pr-4 py-3 focus:ring-2 focus:ring-primary-container focus:bg-surface-container-lowest transition-all placeholder:text-outline/50"
                      placeholder="0.00"
                      type="number"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                  </div>

                  <ComboboxCustom
                    options={categorias}
                    value={category}
                    onChange={setCategory}
                  />
                </div>
                <button
                  className="w-full bg-primary-container text-primary font-bold py-4 rounded-full hover:opacity-90 active:scale-[0.98] transition-all elevation-1 flex items-center justify-center gap-2"
                  type="submit"
                  onClick={addExpense}
                >
                  <span
                    className="material-symbols-outlined"
                    data-icon="add_circle"
                  >
                    add_circle
                  </span>
                  Agregar Gasto
                </button>
              </form>
            </div>
          </div>
          {/* <!-- List Section (Right) --> */}
          <div className="md:col-span-7">
            <div className="bg-surface-container-lowest rounded-xl p-8 elevation-1 h-full min-h-100">
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Historial de Gastos
                </h3>
                <div className="flex gap-2">
                  <span className="bg-secondary-container/30 text-secondary font-label-sm text-label-sm px-3 py-1 rounded-full">
                    Recientes
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                {state.expenses.length === 0 ? (
                  <div className="flex flex-col items-center gap-4 py-16">
                    <span
                      className="material-symbols-outlined text-[48px] text-outline"
                      data-icon="receipt_long"
                    >
                      receipt_long
                    </span>
                    <p className="font-label-md text-label-md text-outline">
                      No hay gastos registrados aún.
                    </p>
                  </div>
                ) : (
                  <div>
                    {state.expenses.map((expense) => (
                      <div
                        key={expense.id}
                        className="flex items-center justify-between p-4 rounded-xl bg-surface hover:bg-primary-container/10 transition-colors group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-tertiary-container/30 rounded-full flex items-center justify-center text-tertiary">
                            <span
                              className="material-symbols-outlined"
                              data-icon="subscriptions"
                            >
                              subscriptions
                            </span>
                          </div>
                          <div>
                            <h4 className="font-body-lg text-body-lg text-on-surface font-semibold">
                              {expense.name}
                            </h4>
                            <p className="font-label-sm text-label-sm text-outline">
                              {expense.category}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <span className="font-headline-sm text-headline-sm text-on-surface">
                            {`$ ${expense.value}`}
                          </span>
                          <button
                            className="text-outline hover:text-error opacity-0 group-hover:opacity-100 transition-all flex items-center gap-1"
                            onClick={() => deleteExpense(expense.id)}
                          >
                            <span
                              className="material-symbols-outlined text-[20px]"
                              data-icon="delete"
                            >
                              delete
                            </span>
                            <span className="text-label-sm font-label-sm">
                              Eliminar
                            </span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {/* Expense Item */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
