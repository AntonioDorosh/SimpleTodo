import {store} from "../store/store";

export interface ITask {
    id: number;
    title: string;
    isDone?: boolean
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
