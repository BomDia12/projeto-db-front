import { Option, Selectables } from "./models";

export const mapObjectToOptions = (object: Selectables[]) => {
  return object.map((value) => ({
    value: value.id,
    label: value.nome
  })) as Option[]
};
