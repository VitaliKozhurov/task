import { TodoList } from "@/features/TodoList";
import { Header, Layout } from "../components";

export const App = () => {
  return (
    <>
      <Header />
      <Layout>
        <TodoList />
      </Layout>
    </>
  );
};
