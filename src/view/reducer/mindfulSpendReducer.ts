//Definir la interface Expense y sus propiedes  


export interface Expense {
    id: string;
    dateValue: Date;
    name: string;
    category: string;
    value: number;
}

export interface Category {
    id: number;
    name: string;
    icon: string;
    color: string;
}

//Definir la interface State y sus propiedades
export interface MindfulSpendState {
    expenses: Expense[];
    categories: Category[];
}


// 3. Definir el estado inicial
export const getInitialState = (): MindfulSpendState => {
    const expenses: Expense[] = [];
    const categories: Category[] = [];

    return {
        expenses,
        categories
    }
}

//4. Definir acciones y la función reducer
export type MindfulSpendAction =
    | { type: 'ADD_EXPENSE', payload: Expense } //Agregar
    | { type: 'DELETE_EXPENSE', payload: string } //Eliminar

export const mindfulSpendReducer = (state: MindfulSpendState, action: MindfulSpendAction): MindfulSpendState => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            const newExpense: Expense = {
                id: Date.now().toString(),
                dateValue: new Date(),
                name: action.payload.name,
                category: action.payload.category,
                value: action.payload.value
            }
            return {
                ...state,
                expenses: [...state.expenses, newExpense],
            }

        case 'DELETE_EXPENSE':
            const updateExpenses = state.expenses.filter((expense) => expense.id !== action.payload);

            return {
                ...state,
                expenses: updateExpenses,
            }


        default:
            return state
    }
}


//5. Se importa la función de getInitialState y el mindfulSpendReducer
//En el componente MindfulSpend