import { createContext, useState } from "react";
const data = 'context를 통해 전달되는 초기값';

export const DataContext = createContext(data);