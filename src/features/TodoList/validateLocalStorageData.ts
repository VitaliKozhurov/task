import z from "zod";

const todoSchema = z.object({
  id: z.string(),
  title: z.string(),
  checked: z.boolean(),
});

const todosSchema = z.array(todoSchema);

export const validateLocalStorageData = () => {
  try {
    const jsonParseData = JSON.parse(localStorage.getItem("todos") ?? "");
    const parsedData = todosSchema.parse(jsonParseData);

    return parsedData;
  } catch {
    return [];
  }
};
